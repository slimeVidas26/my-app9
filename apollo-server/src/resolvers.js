import {Warehouse} from './models/Warehouse.js';
import {Department} from './models/Department.js';
import { Redstamp } from './models/Redstamp.js';
import { ItemReason } from './models/ItemReason.js';
import {Arrival} from './models/Arrival.js';
import {Supplier} from './models/Supplier.js';
import {Author} from './models/Author.js';
import {Book} from './models/Book.js';
import {Product} from './models/Product.js';
import { AlphaSupplier } from './models/AlphaSupplier.js';
import { BetaSupplier } from './models/BetaSupplier.js';
import {AlphaProduct} from './models/AlphaProduct.js';
import { BetaProduct } from './models/BetaProduct.js';
import {AlphaOrder} from './models/AlphaOrder.js'
import { BetaOrder } from './models/BetaOrder.js';



import { EdiOrder } from './models/EdiOrder.js';
import { EdiOrderItem } from './models/EdiOrderItem.js';

import {Order} from './models/Order.js';
import {OrderItem} from './models/OrderItem.js'
import { GraphQLScalarType, Kind } from 'graphql';


// const newProduct   = new BetaProduct({
//   name :"product2",
//   quantityPerBox: 22
// });

// newProduct.save()
// .then(product => console.log("newproduct saved" , product))
// .catch(error => console.log("saving newproduct failed" , error))

// BetaProduct.find()
// .then(products => console.log("listing products" , products))
// .catch(error=>console.log("listing products failed" , error))



// const newSupplier = new AlphaSupplier({
//   name: 'Supplier E',
//   address: '123 Main St',
//   phone: '123-456-7890',
//   email: 'suppliera@example.com'
// });

// newSupplier.save()
//   .then(supplier => console.log('Supplier saved:', supplier))
//   .catch(error => console.error('Error saving supplier:', error));

  

//    AlphaSupplier.find()
//  .then(supplier => console.log('Supplier founded:', supplier))
//  .catch(error => console.error('Error finding supplier:', error));


const dateScalar = new GraphQLScalarType({

    
    name: 'Date',
    description: 'Date custom scalar type',
    serialize(value) {
      if (value instanceof Date) {
        return value.toLocaleDateString();
        //return value.getTime(); // Convert outgoing Date to integer for JSON
      }
      throw Error('GraphQL Date Scalar serializer expected a `Date` object');
    },
    parseValue(value) {
      if (typeof value === 'number') {
        return new Date(value); // Convert incoming integer to Date
      }
      throw new Error('GraphQL Date Scalar parser expected a `number`');
    },
    parseLiteral(ast) {
      if (ast.kind === Kind.INT) {
        // Convert hard-coded AST string to integer and then to Date
        return new Date(parseInt(ast.value, 10));
      }
      // Invalid hard-coded value (not an integer)
      return null;
    },
  });

  console.log(Date.now())
 //helper

  const books = async bookIds => {
    try {
      const books = await Book.find({_id: { $in: bookIds }})
      return books.map(book => ({
        ...book._doc,
        author: author.bind(this, book._doc.author)
      }))
    } catch {
      throw err
    }
  }

  // const products = async productIds => {
  //   try {
  //     const products = await Product.find({_id: { $in: productIds }})
  //     return products.map(product => ({
  //       ...product._doc,
  //       supplier: Supplier.bind(this, product._doc.supplier)
  //     }))
  //   } catch {
  //     throw err
  //   }
  // }

  const ediOrderItems = async ediOrderItemsIds => {
    try {
      const ediOrderItems = await EdiOrderItem.find({_id: { $in: ediOrderItemsIds }})
      return ediOrderItems.map(ediOrderItem => ({
        ...ediOrderItem._doc,
        ediOrder: ediOrder.bind(this, ediOrderItem._doc.ediOrder)
      }))
    } catch {
      throw err
    }
  }
  // const ediOrder = async ediOrderId => {
  //   try {    
  //     const ediOrder = await EdiOrder.findById(ediOrderId)

  //     return {
        
  //       ...ediOrder._doc,
  //       ediOrderItems: ediOrderItems.bind(this, ediOrder._doc.ediOrderItems)
  //     }
  //   } catch (err) {
  //     throw err

  //   }
    
  // }
  //console.log('ediOrder from helper' , ediOrder("651d2b6fbd737353eb2c50db"))


  const author = async authorId => {
    try {
      const author = await Author.findById(authorId)
      return {
        ...author._doc,
        books: books.bind(this, author._doc.books)
      }
    } catch (err) {
      throw err
    }
  }


  // const supplier = async supplierId => {
  //   try {
  //     const supplier = await Supplier.findById(supplierId)
  //     return {
  //       ...supplier._doc,
  //       products: products.bind(this, supplier._doc.products)
  //     }
  //   } catch (err) {
  //     throw err
  //   }
  // }


// GraphQL Resolvers
export const resolvers = {
  
    
    Date: dateScalar,
    
    Query: {

    // alphaSuppliers: async () => await AlphaSupplier.find(),
    alphaSuppliers: async () => {
      try {
        const alphaSuppliers = await AlphaSupplier.find();
        console.log('list suppliers:', alphaSuppliers);
        return alphaSuppliers;
      } catch (error) {
        console.error('Error listing suppliers:', error);
        throw error;
      }
    },

    betaSuppliers: async () => {
      try {
        const betaSuppliers = await BetaSupplier.find();
        console.log('list suppliers:', betaSuppliers);
        return betaSuppliers;
      } catch (error) {
        console.error('Error listing suppliers:', error);
        throw error;
      }
    },
    //alphaSupplier: async (_, { id }) => await AlphaSupplier.findById(id),

    alphaSupplier : async (_, { id }) =>{
      try {
        const alphaSupplier  = await AlphaSupplier.findById(id);
      console.log('alphaSupplier' , alphaSupplier);
      return alphaSupplier;
      } catch (error) {
        console.error('Error finding alphaSupplier:', error);
        throw error;
      }
    },
    betaSupplier : async (_, { id }) =>{
      try {
        const betaSupplier  = await BetaSupplier.findById(id);
      console.log('betaSupplier' , betaSupplier);
      return betaSupplier;
      } catch (error) {
        console.error('Error finding betaSupplier:', error);
        throw error;
      }
    },
    
    
    //alphaProducts: async() => await AlphaProduct.find(),

    alphaProducts : async()=>{
      try {
        const alphaProducts = await AlphaProduct.find();
        console.log('listing alphaProducts',alphaProducts);
        return alphaProducts
        
      } catch (error) {
        console.error('Error finding alphaSupplier:', error);
        throw error;
      }
    },
    betaProducts : async()=>{
      try {
        const betaProducts = await BetaProduct.find();
        console.log('listing betaProducts',betaProducts);
        return betaProducts
        
      } catch (error) {
        console.error('Error finding betaProducts:', error);
        throw error;
      }
    },


    alphaProduct : async (_ , {id})=>{
      try {
        const alphaProduct = await AlphaProduct.findById(id);
        console.log('alphaProduct' , alphaProduct);
        return alphaProduct;

      } catch (error) {
        console.error('Error finding alphaProduct:', error);
        throw error;
      }
    },

    betaProduct : async (_ , {id})=>{
      try {
        const betaProduct = await BetaProduct.findById(id);
        console.log('betaProduct' , betaProduct);
        return betaProduct;

      } catch (error) {
        console.error('Error finding betaProduct:', error);
        throw error;
      }
    },


    //alphaOrders: () => AlphaOrder.find(),
    alphaOrders : async ()=>{
      try {
        const alphaOrders = await AlphaOrder.find();
        console.log('listing alphaOrders' ,alphaOrders)
        return alphaOrders
      } catch (error) {
        console.error('Error finding alphaOrders:', error);
        throw error;
      }
    }
    ,
    // alphaOrder: (_, { id }) => AlphaOrder.findById(id),
    alphaOrder : async (_ , {id})=>{
      try {
       const alphaOrder = await AlphaOrder.findById(id) ;
       console .log('alphaOrder',alphaOrder)
       return alphaOrder
      } catch (error) {
        console.error('Error finding alphaOrder:', error);
        throw error;
      }
    },

     
        // hello:  (_, {name}) =>  `Hello ${name}`,
        warehouses: async () => await Warehouse.find({}),
        departments: async () => await Department.find({}),
        redstamps: async () => await Redstamp.find({}),
        itemReasons: async () => await ItemReason.find({}),


        arrivals: async () => await Arrival.find({}),
        // suppliers: async () => await Supplier.find({}),
        //suppliers: () => Supplier.find().populate('products'),
        // supplier: (_, { id }) => Supplier.findById(id).populate('products'),
        // authors: async () => await Author.find({}),
        // books: async () => await Book.find({}),
        //  products: async () => await Product.find({}),
         // products: () => Product.find(),
         // product: (_, { id }) => Product.findById(id),

        orders: async () => await Order.find({supplierNumber : Supplier.number}),
        orderItems: async () => await OrderItem.find({}),
        openOrders: async () => await Order.find({isOpen:true}),
        closedOrders: async () => await Order.find({isOpen:false}),
        orderItems: async () => await OrderItem.find({}),
        ediOrders: async () => await EdiOrder.find({}),


        
        

        suppliers: async () => {
          // Fetch suppliers and populate products
          return await Supplier.find().populate('products');
        },
        supplier: async (_, { id }) => {
          // Fetch a single supplier by ID and populate products
          return await Supplier.findById(id).populate('products');
        },
        products: async () => {
          // Fetch all products and populate supplier
          return await Product.find().populate('supplier');
        },
        product: async (_, { id }) => {
          // Fetch a single product by ID and populate supplier
          // return await Product.findById(id).populate('supplier');
          return await Product.findById(id);

        },

          //  ediOrders: async () => {
          //     try {
          //      const ediOrders = await EdiOrder.find()
          //      console.log("ediOrder1" , ediOrders);
          //       return ediOrders.map(ediOrder => ({
          //         ...ediOrder._doc,
          //         ediOrderItems: ediOrderItems.bind(this, ediOrder._doc.ediOrderItems),
          //       },
          //       console.log("ediOrder2" , ediOrders)

          //       ),

          //       )
          //     } catch (err) {
          //       throw err
          //      }
          //  },



        ediOrderItemsByNumber: async (_, {ediOrder}) => await EdiOrderItem.find({ediOrder: ediOrder}),

        authors: async () => {
          try {
            const authors = await Author.find()
            return authors.map(author => ({
              ...author._doc,
              books: books.bind(this, author._doc.books)
            }))
          } catch (err) {
            throw err
          }
        },

        // suppliers: async () => {
        //   try {
        //     const suppliers = await Supplier.find()
        //     return suppliers.map(supplier => ({
        //       ...supplier._doc,
        //       products: products.bind(this, supplier._doc.products)
        //     }))
        //   } catch (err) {
        //     throw err
        //   }
        // },


        books: async () => {
          try {
            const books = await Book.find()
            return books.map(book => ({
              ...book._doc,
              author: author.bind(this, book._doc.author)
            }))
          } catch (err) {
            throw err
          }
        },

        // products: async () => {
        //   try {
        //     const products = await Product.find()
        //     return products.map(product => ({
        //       ...product._doc,
        //       supplier: Supplier.bind(this, product._doc.supplier)
        //     }))
        //   } catch (err) {
        //     throw err
        //   }
        // },

        ediOrderItems: async () => {
          try {
            const ediOrderItems = await EdiOrderItem.find()
            return ediOrderItems.map(ediOrderItem => ({
              ...ediOrderItem._doc,
              ediOrder: ediOrder.bind(this, ediOrderItem._doc.ediOrder)
            }))
          } catch (err) {
            throw err
          }
        }
      
    },
    
    Mutation: {

      addAlphaSupplier: async (_, { name, number ,  address, phone, email  }) => {
        try {
          const alphaSupplier = new AlphaSupplier({ name,number ,  address, phone, email });
          await alphaSupplier.save();
          console.log('alphaSupplier added success' , alphaSupplier)
          return alphaSupplier;
        } catch (error) {
          console.error('Error adding alphaSupplier:', error);
          throw error;
        }
      },

      addBetaSupplier: async (_, { name, number ,  address, phone, email  }) => {
        try {
           // Check if supplier with the given  name or number already exists
          const existingBetaSupplier =  await BetaSupplier.findOne({
            $or: [
              { name : name },
              { number: number }
            ]
          })
         
          if(!existingBetaSupplier){
          const betaSupplier = new BetaSupplier({ name ,number ,  address, phone, email });
          await betaSupplier.save();
          console.log('betaSupplier added success' , betaSupplier)
          return betaSupplier;
        }
        else{
        console.log(`supplier ${existingBetaSupplier.name} already exists`)
        }
        } catch (error) {
          console.error('Error adding betaSupplier:', error);
          throw error;
        }
      },

      // addAlphaSupplier: async (_, { name, address, phone, email }) => {
      //   const alphaSupplier = new AlphaSupplier({ name, address, phone, email });
      //   return alphaSupplier.save();
      // },
      addAlphaProduct:async (_, { name, price , inStock , quantityPerBox ,alphaSupplierId }) => {
        try {
          const alphaProduct = new AlphaProduct({ name, price , inStock, quantityPerBox, alphaSupplier: alphaSupplierId });
          await alphaProduct.save();
          console.log('alphaProduct added success' , alphaProduct)
          return alphaProduct;
        } catch (error) {
          console.error('Error adding alphaProduct:', error);
          throw error;
        }
      },
      addBetaProduct:async (_, { name,  quantityPerBox ,betaSupplierId}) => {
        try {
          const betaProduct = new BetaProduct({ name, quantityPerBox , betaSupplier:betaSupplierId });
          await betaProduct.save();
          console.log('betaProduct added success' , betaProduct)
          return betaProduct;
        } catch (error) {
          console.error('Error adding betaProduct:', error);
          throw error;
        }
       
      },
      addAlphaOrder: async (_, { alphaSupplierId, alphaEdi, alphaReference, alphaOrderDate, alphaProductId, alphaOrderId, alphaProducts, totalQuantity }) => {
        try {
          console.log('Checking for Alpha Order with reference:', alphaReference);
      
          if (!Array.isArray(alphaProducts) || alphaProducts.length === 0) {
            throw new Error('alphaProducts should be a non-empty array');
          }
      
          // Check if an order with the given alphaReference already exists
          const existingOrder = await AlphaOrder.findOne({ alphaReference });
          console.log('Existing Alpha Order:', existingOrder);
      
          if (!existingOrder) {
            const highestAlphaOrder = await AlphaOrder.findOne().sort({ alphaEdi: -1 }).exec();
            const newAlphaEdi = highestAlphaOrder ? highestAlphaOrder.alphaEdi + 1 : 1;
            console.log('New alphaEdi:', newAlphaEdi);
      
            let totalBoxes = 0;
            for (const { alphaProductId, quantity } of alphaProducts) {
              console.log(`Processing product with ID: ${alphaProductId}, quantity: ${quantity}`);
              const product = await AlphaProduct.findById(alphaProductId);
              if (product) {
                console.log(`Found product: ${product}`);
                const numberOfBoxes = Math.ceil(quantity / product.quantityPerBox);
                totalBoxes += numberOfBoxes;
              } else {
                throw new Error(`Product with ID ${alphaProductId} not found`);
              }
            }
      
            const totalQuantity = alphaProducts.reduce((sum, p) => sum + p.quantity, 0);
      
            const alphaOrderProducts = alphaProducts.map(p => ({
              alphaProduct: p.alphaProductId,
              quantity: p.quantity,
              quantityPerBox: p.quantityPerBox
            }));
      
            const newAlphaOrder = new AlphaOrder({
              alphaSupplier: alphaSupplierId,
              alphaProducts: alphaOrderProducts,
              alphaReference,
              alphaOrderDate,
              totalQuantity,
              totalBoxes
            });
      
            await newAlphaOrder.save();
            console.log('Alpha Order added successfully:', newAlphaOrder);
      
            return newAlphaOrder;
          } else {
            let totalBoxes = 0;
            for (const { alphaProductId, quantity } of alphaProducts) {
              console.log(`Processing product with ID: ${alphaProductId}, quantity: ${quantity}`);
              const existingProductIndex = existingOrder.alphaProducts.findIndex(p => p.alphaProduct && p.alphaProduct.toString() === alphaProductId);
      
              if (existingProductIndex > -1) {
                existingOrder.alphaProducts[existingProductIndex].quantity += quantity;
      
                const product = await AlphaProduct.findById(alphaProductId);
                if (product) {
                  console.log(`Found product: ${product}`);
                  const numberOfBoxes = Math.ceil(existingOrder.alphaProducts[existingProductIndex].quantity / product.quantityPerBox);
                  totalBoxes += numberOfBoxes;
                } else {
                  throw new Error(`Product with ID ${alphaProductId} not found`);
                }
              } else {
                existingOrder.alphaProducts.push({ alphaProduct: alphaProductId, quantity });
      
                const product = await AlphaProduct.findById(alphaProductId);
                if (product) {
                  console.log(`Found product: ${product}`);
                  const numberOfBoxes = Math.ceil(quantity / product.quantityPerBox);
                  totalBoxes += numberOfBoxes;
                } else {
                  throw new Error(`Product with ID ${alphaProductId} not found`);
                }
              }
            }
      
            existingOrder.totalQuantity = existingOrder.alphaProducts.reduce((sum, p) => sum + p.quantity, 0);
            existingOrder.totalBoxes = totalBoxes;
      
            const updatedOrder = await existingOrder.save();
            console.log('Alpha Order updated successfully:', updatedOrder);
      
            return updatedOrder;
          }
        } catch (error) {
          console.error('Error adding alpha order:', error);
          throw error;
        }
      },
      
      // addAlphaOrder : async (_, { alphaSupplierId, alphaEdi ,  alphaReference, alphaOrderDate, alphaProductId, alphaOrderId, alphaProducts, totalQuantity }) => {
      //   try {
      //     console.log('Checking for Alpha Order with reference:', alphaReference);
      
      //     // Check if an order with the given alphaReference already exists
      //     const existingOrder = await AlphaOrder.findOne({ alphaReference });
      //     console.log('Existing Alpha Order:', existingOrder);
      
      //     if (!existingOrder) {
      //       // Find the highest alphaReference and increment it
      //       const highestAlphaOrder = await AlphaOrder.findOne().sort({ alphaEdi: -1 }).exec();
      //       const newAlphaEdi = highestAlphaOrder ? highestAlphaOrder.alphaEdi + 1 : 1;
      //       console.log('New alphaEdi:', newAlphaEdi);
      
      //       // Fetch the quantityPerBox for each product and calculate the total number of boxes
      //       let totalBoxes = 0;
      //       for (const { alphaProductId, quantity } of alphaProducts) {
      //         const product = await AlphaProduct.findById(alphaProductId);
      //         if (product) {
      //           console.log(`Found product: ${product}`);
      //           const numberOfBoxes = Math.ceil(quantity / product.quantityPerBox);
      //           totalBoxes += numberOfBoxes;
      //         }
      //       }
      
      //       // Calculate the total amount
      //       const totalQuantity = alphaProducts.reduce((sum, p) => sum + p.quantity, 0);
      
      //       // Create and save a new order with the incremented alphaReference
      //       const alphaOrderProducts = alphaProducts.map(p => ({
      //         alphaProduct: p.alphaProductId,
      //         quantity: p.quantity,
      //         quantityPerBox:p.quantityPerBox
      //       }));
      //       const newAlphaOrder = new AlphaOrder({
      //         alphaSupplier: alphaSupplierId,
      //         alphaProducts: alphaOrderProducts,
      //         alphaReference,
      //         alphaOrderDate,
      //         totalQuantity,
      //         totalBoxes
      //       });
      
      //       await newAlphaOrder.save();
      //       console.log('Alpha Order added successfully:', newAlphaOrder);
      
      //       return newAlphaOrder;
      //     } else {

      //       console.log(`Product with ID ${alphaProductId} not found`);
      //       // If the order exists, check if the product already exists in the order
      //       let totalBoxes = 0;
      //       for (const { alphaProductId, quantity } of alphaProducts) {
      //         const existingProductIndex = existingOrder.alphaProducts.findIndex(p => p.alphaProduct && p.alphaProduct.toString() === alphaProductId);
      
      //         if (existingProductIndex > -1) {
      //           // Update the quantity if the product already exists in the order
      //           existingOrder.alphaProducts[existingProductIndex].quantity += quantity;
      //         } else {
      //           // Add the new product to the order
      //           existingOrder.alphaProducts.push({ alphaProduct: alphaProductId, quantity });
      //         }
      
      //         const product = await AlphaProduct.findById(alphaProductId);
      //         if (product) {
      //           const numberOfBoxes = Math.ceil(existingOrder.alphaProducts[existingProductIndex].quantity / product.quantityPerBox);
      //           totalBoxes += numberOfBoxes;
      //         }
      //       }
      
      //       // Recalculate the total amount and total number of boxes
      //       existingOrder.totalQuantity = existingOrder.alphaProducts.reduce((sum, p) => sum + p.quantity, 0);
      //       existingOrder.totalBoxes = totalBoxes;
      
      //       const updatedOrder = await existingOrder.save();
      //       console.log('Alpha Order updated successfully:', updatedOrder);
      
      //       return updatedOrder;
      //     }
      //   } catch (error) {
      //     console.error('Error adding alpha order:', error);
      //     throw error;
      //   }
      // },

      addBetaOrder: async (_, { betaSupplierId, betaEdi, betaReference, betaOrderDate, betaProductId, betaOrderId, betaProducts, totalQuantity }) => {
        try {
          console.log('Checking for beta Order with reference:', betaReference);
      
          if (!Array.isArray(betaProducts) || betaProducts.length === 0) {
            throw new Error('betaProducts should be a non-empty array');
          }
      
          // Check if an order with the given betaReference already exists
          const existingOrder = await BetaOrder.findOne({ betaReference });
          console.log('Existing Beta Order:', existingOrder);
      
          if (!existingOrder) {
            const highestBetaOrder = await BetaOrder.findOne().sort({ betaEdi: -1 }).exec();
            const newBetaEdi = highestBetaOrder ? highestBetaOrder.betaEdi + 1 : 1;
            console.log('New betaEdi:', newBetaEdi);
      
            let totalBoxes = 0;
            for (const { betaProductId, quantity } of betaProducts) {
              console.log(`Processing product with ID: ${betaProductId}, quantity: ${quantity}`);
              const product = await BetaProduct.findById(betaProductId);
              if (product) {
                console.log(`Found product: ${product}`);
                const numberOfBoxes = Math.ceil(quantity / product.quantityPerBox);
                totalBoxes += numberOfBoxes;
              } else {
                throw new Error(`Product with ID ${betaProductId} not found`);
              }
            }
      
            const totalQuantity = betaProducts.reduce((sum, p) => sum + p.quantity, 0);
      
            const betaOrderProducts = betaProducts.map(p => ({
              betaProduct: p.betaProductId,
              quantity: p.quantity,
              quantityPerBox: p.quantityPerBox
            }));
      
            const newBetaOrder = new BetaOrder({
              betaSupplier: betaSupplierId,
              betaProducts: betaOrderProducts,
              betaReference,
              betaOrderDate,
              totalQuantity,
              totalBoxes
            });
      
            await newBetaOrder.save();
            console.log('Beta Order added successfully:', newBetaOrder);
      
            return newBetaOrder;
          } else {
            let totalBoxes = 0;
            for (const { betaProductId, quantity } of betaProducts) {
              console.log(`Processing product with ID: ${betaProductId}, quantity: ${quantity}`);
              const existingProductIndex = existingOrder.betaProducts.findIndex(p => p.betaProduct && p.betaProduct.toString() === betaProductId);
      
              if (existingProductIndex > -1) {
                existingOrder.betaProducts[existingProductIndex].quantity += quantity;
      
                const product = await BetaProduct.findById(betaProductId);
                if (product) {
                  console.log(`Found product: ${product}`);
                  const numberOfBoxes = Math.ceil(existingOrder.betaProducts[existingProductIndex].quantity / product.quantityPerBox);
                  totalBoxes += numberOfBoxes;
                } else {
                  throw new Error(`Product with ID ${betaProductId} not found`);
                }
              } else {
                existingOrder.betaProducts.push({ betaProduct: betaProductId, quantity });
      
                const product = await BetaProduct.findById(betaProductId);
                if (product) {
                  console.log(`Found product: ${product}`);
                  const numberOfBoxes = Math.ceil(quantity / product.quantityPerBox);
                  totalBoxes += numberOfBoxes;
                } else {
                  throw new Error(`Product with ID ${betaProductId} not found`);
                }
              }
            }
      
            existingOrder.totalQuantity = existingOrder.betaProducts.reduce((sum, p) => sum + p.quantity, 0);
            existingOrder.totalBoxes = totalBoxes;
      
            const updatedOrder = await existingOrder.save();
            console.log('Alpha Order updated successfully:', updatedOrder);
      
            return updatedOrder;
          }
        } catch (error) {
          console.error('Error adding alpha order:', error);
          throw error;
        }
      },
      

   
    //     try {
    //       const alphaOrder = await AlphaOrder.findById(alphaOrderId);
    //       // console.log('alphaOrder' , alphaOrder)
    //       if (!alphaOrder) {
    //          // Create a new order if it doesn't exist
    //          alphaOrder = new AlphaOrder({
    //           //alphaReference:null
    //         alphaSupplier: null, // or set a default supplier if needed
    //         alphaProducts: [{ alphaProduct: alphaProductId, quantity }],
    //         alphaOrderDate: new Date(),
    //         totalQuantity: 0 // Adjust as necessary based on your pricing logic
    //       });
    //       console.log('alphaOrder added succes' , alphaOrder)
    //         //throw new Error('Order not found');
    //       } else{
    //       const alphaProductExists = alphaOrder.alphaProducts.some(p => p.alphaProduct.toString() === alphaProductId);
    //       console.log("alphaProductExists",alphaProductExists)
    //       if (alphaProductExists) {
    //         // Update the quantity if the product already exists in the order
    //         alphaOrder.alphaProducts = alphaOrder.alphaProducts.map(p =>
    //           p.alphaProduct.toString() === alphaProductId ? { alphaProduct: p.alphaProduct, quantity: p.quantity + quantity } : p
    //         );
    //       } else {
    //         // Add the new product to the order
    //         alphaOrder.alphaProducts.push({ alphaProduct: alphaProductId, quantity });
    //       }
    //       return await alphaOrder.save();
    //     }
    //     } catch (error) {
    //       console.error('Error adding AlphaProductToAlphaOrder:', error);
    //       throw error;  
    //     }
       
    // },

      

      

    
      createAuthor: async (_, { name }) => {
        try {
          const author = new Author({ name })
          await author.save()
          return author;
        } catch (err) {
          throw err
        }
      },

      // createSupplier: async (_, { supplier_name  ,  supplier_number}) => {
      //   try {
      //     const supplier = new Supplier({ supplier_name  ,  supplier_number })
      //     await supplier.save()
      //     return supplier;
      //   } catch (err) {
      //     throw err
      //   }
      // },

      createSupplier: async (_, { name,number, email }) => {
        const supplier = new Supplier({ name,number, email });
        await supplier.save();
        return supplier;
      },

      createDepartment: async (_, { title }) => {
        try {
          const department = new Department({ title })
          await department.save()
          return department;
        } catch (err) {
          throw err
        }
      },

      createRedstamp: async (_, { title }) => {
        try {
          const redstamp = new Redstamp({ title })
          await redstamp.save()
          return redstamp;
        } catch (err) {
          throw err
        }
      },

      createItemReason: async (_, { title }) => {
        try {
          const itemReason = new ItemReason({ title })
          await itemReason.save()
          return itemReason;
        } catch (err) {
          throw err
        }
      },

      createEdiOrder: async (_, {supplier,supplierNumber,edi,orderNumber,boxes,quantity,date }) => {
        try {
          const ediOrder = new EdiOrder({supplier,supplierNumber,edi,orderNumber,boxes,quantity,date})
          await ediOrder.save()
          return ediOrder;
        } catch (err) {
          throw err
        }
      },

      createBook: async (_, { title, pages, author: authorId }) => {
        const book = new Book({ title, pages, author: authorId })
        try {
          const savedBook = await book.save()
          const authorRecord = await Author.findById(authorId)
          authorRecord.books.push(book)
          await authorRecord.save()
          return {
            ...savedBook._doc,
            author: author.bind(this, authorId)
          }
        } catch (err) {
          throw err
        }
      },

      // createProduct: async (_, {product_name ,barcode , image }) => {
      //   try {
      //     const product = new Product({ product_name ,barcode , image })
      //     await product.save()
      //     return product;
      //   } catch (err) {
      //     throw err
      //   }
      // },

      
     
      createProduct: async (_, { name,
                                 barcode ,
                                 image ,
                                 price,
                                 description, 
                                 quantityPerBox ,
                                  supplierId,
                                  quantityInStock }) => {
        const product = new Product({ name, barcode , image, price, description,quantityPerBox ,quantityInStock, supplier: supplierId });
        await product.save();
        
        // Add product to supplier's products array
        await Supplier.findByIdAndUpdate(supplierId, { $push: { products: product._id } });
  
        return product;
      },
      
    
      // createProduct: async (_, { product_name, barcode,image, supplier: supplierId }) => {
      //   const product = new Product({product_name, barcode,image, supplier: supplierId })
      //   try {
      //     const savedProduct = await product.save()
      //     const supplierRecord = await Supplier.findById(supplierId)
      //     supplierRecord.products.push(product)
      //     await supplierRecord.save()
      //     return {
      //       ...savedProduct._doc,
      //       supplier: supplier.bind(this, supplierId)
      //     }
      //   } catch (err) {
      //     throw err
      //   }
      // },

      createEdiOrderItem: async (_, { code, product,quantity ,  ediOrder: ediOrderId }) => {
        const ediOrderItem = new EdiOrderItem({ code, product,quantity ,  ediOrder: ediOrderId })
        try {
          const savedEdiOrderItem = await ediOrderItem.save()
          const ediOrderRecord = await EdiOrder.findById(ediOrderId)
          ediOrderRecord.ediOrderItems.push(ediOrderItem)
          await ediOrderRecord.save()
          return {
            ...savedEdiOrderItem._doc,
            ediOrder: ediOrder.bind(this, ediOrderId)
          }
        } catch (err) {

          throw err
        }
      
      }
    },

    AlphaSupplier: {
      alphaProducts: async(alphaSupplier) => await AlphaProduct.find({ alphaSupplier: alphaSupplier.id })
    },

    BetaSupplier: {
      betaProducts: async(betaSupplier) => await BetaProduct.find({ betaSupplier: betaSupplier.id })
    },

    AlphaProduct: {
      alphaSupplier: async (alphaProduct) => {
        const  asp = await AlphaSupplier.findById(alphaProduct.alphaSupplier)
        console.log("asp" , asp)
        return asp
      }
    }, 

    BetaProduct: {
      betaSupplier: async (betaProduct) => {
        const  asp = await BetaSupplier.findById(betaProduct.betaSupplier)
        console.log("asp" , asp)
        return asp
      }
    }, 


    

    AlphaOrder: {
      alphaSupplier: async (alphaOrder) => {
        const alphaSupplier = await AlphaSupplier.findById(alphaOrder.alphaSupplier)
        if (!alphaSupplier) {
          throw new Error(`AlphaSupplier with id ${alphaOrder.alphaSupplier} not found`);
        }
        if (alphaSupplier.number == null) {
          throw new Error(`AlphaSupplier number is null for id ${alphaOrder.alphaSupplier}`);
        }
        return alphaSupplier;
      },

      alphaProducts: async (alphaOrder) => {
        const populatedProducts = await Promise.all(alphaOrder.alphaProducts.map(async (op) => {
          console.log("op" , op)
          const alphaProduct = await AlphaProduct.findById(op.alphaProduct);
          alphaProduct.quantity = op.quantity

                    console.log("op" , op)

         
          //  if (alphaProduct) {
          //    alphaProduct.quantity = op.quantity;  // Add the quantity to the product object
          //    console.log("alphaProduct" , alphaProduct)
          //  }
           return { alphaProduct, quantity: op.quantity , boxes:op.boxes };
          //return alphaProduct
        }));
        return populatedProducts;
      },
    },

    BetaOrder: {
      betaSupplier: async (betaOrder) => {
        const betaSupplier = await BetaSupplier.findById(betaOrder.betaSupplier)
        if (!betaSupplier) {
          throw new Error(`BetaSupplier with id ${betaOrder.betaSupplier} not found`);
        }
        if (betaSupplier.number == null) {
          throw new Error(`BetaSupplier number is null for id ${betaOrder.betaSupplier}`);
        }
        return betaSupplier;
      },

      betaProducts: async (betaOrder) => {
        const populatedProducts = await Promise.all(betaOrder.betaProducts.map(async (op) => {
          console.log("op" , op)
          const betaProduct = await BetaProduct.findById(op.betaProduct);
          betaProduct.quantity = op.quantity

                    console.log("op" , op)

         
          //  if (alphaProduct) {
          //    alphaProduct.quantity = op.quantity;  // Add the quantity to the product object
          //    console.log("alphaProduct" , alphaProduct)
          //  }
           return { betaProduct, quantity: op.quantity , boxes:op.boxes };
          //return alphaProduct
        }));
        return populatedProducts;
      },
    }
   
  
  }

    // Supplier: {
    //   products: async (supplier) => {
    //     // Fresh query for products related to the supplier
    //     return await Product.find({ _id: { $in: supplier.products } })
    //   }
    
