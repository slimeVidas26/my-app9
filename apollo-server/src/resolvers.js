import {Warehouse} from './models/Warehouse.js';
import {Department} from './models/Department.js';
import { Redstamp } from './models/Redstamp.js';
import { ItemReason } from './models/ItemReason.js';
import {Arrival} from './models/Arrival.js';
import {Supplier} from './models/Supplier.js';
import {Author} from './models/Author.js';
import {Book} from './models/Book.js';
import {Product} from './models/Product.js';

import { EdiOrder } from './models/EdiOrder.js';
import { EdiOrderItem } from './models/EdiOrderItem.js';

import {Order} from './models/Order.js';
import {OrderItem} from './models/OrderItem.js'
import { GraphQLScalarType, Kind } from 'graphql';


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

  const products = async productIds => {
    try {
      const products = await Product.find({_id: { $in: productIds }})
      return products.map(product => ({
        ...product._doc,
        supplier: Supplier.bind(this, product._doc.supplier)
      }))
    } catch {
      throw err
    }
  }

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

  const supplier = async supplierId => {
    try {
      const supplier = await Supplier.findById(supplierId)
      return {
        ...supplier._doc,
        products: products.bind(this, supplier._doc.products)
      }
    } catch (err) {
      throw err
    }
  }


// GraphQL Resolvers
export const resolvers = {
    
    Date: dateScalar,
    // Query: {
    //     hello: () => "Hello from Apollo Server"
    // }
    Query: {
        hello:  (_, {name}) =>  `Hello ${name}`,
        warehouses: async () => await Warehouse.find({}),
        departments: async () => await Department.find({}),
        redstamps: async () => await Redstamp.find({}),
        itemReasons: async () => await ItemReason.find({}),


        arrivals: async () => await Arrival.find({}),
        // suppliers: async () => await Supplier.find({}),
        suppliers: () => Supplier.find().populate('products'),
        supplier: (_, { id }) => Supplier.findById(id).populate('products'),
        // authors: async () => await Author.find({}),
        // books: async () => await Book.find({}),
        //  products: async () => await Product.find({}),
         products: () => Product.find(),
         product: (_, { id }) => Product.findById(id),

        orders: async () => await Order.find({supplierNumber : Supplier.number}),
        orderItems: async () => await OrderItem.find({}),
        openOrders: async () => await Order.find({isOpen:true}),
        closedOrders: async () => await Order.find({isOpen:false}),
        orderItems: async () => await OrderItem.find({}),
        ediOrders: async () => await EdiOrder.find({}),

        

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

        suppliers: async () => {
          try {
            const suppliers = await Supplier.find()
            return suppliers.map(supplier => ({
              ...supplier._doc,
              products: products.bind(this, supplier._doc.products)
            }))
          } catch (err) {
            throw err
          }
        },


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

        products: async () => {
          try {
            const products = await Product.find()
            return products.map(product => ({
              ...product._doc,
              supplier: Supplier.bind(this, product._doc.supplier)
            }))
          } catch (err) {
            throw err
          }
        },

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


      // createAuthor: async (_, { name }) => {
      //   const author = new Author({ name });
      //   await author.save();
      //   return author;
      // },
      // createBook: async (_, { name, pages, author }) => {
      //   const book = new Book({ name, pages, author });
      //   await book.save();
      //   return book;
      // }
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

      createSupplier: async (_, { name, email , number }) => {
        const supplier = new Supplier({ name, email , number });
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

      
     
        createProduct: async (_, { name, barcode , image ,  price, description, supplierId }) => {
          const product = new Product({ name,barcode , image ,  price, description });
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
    //  Supplier: {
    //    products: (supplier) => Product.find({ _id: { $in: supplier.products } }),
    //  },
};

