import gql from 'graphql-tag';



// GraphQL Schema
export const typeDefs = gql`
  scalar Date


  type Query {
    alphaProducts: [AlphaProduct]
    betaProducts: [BetaProduct]

    alphaSuppliers:[AlphaSupplier!]
    betaSuppliers:[BetaSupplier!]

    alphaSupplier(id: ID!): AlphaSupplier
    betaSupplier(id: ID!): BetaSupplier

    alphaProduct(id: ID!): AlphaProduct
    betaProduct(id: ID!): BetaProduct

    alphaOrders: [AlphaOrder]
    alphaOrder(id: ID!): AlphaOrder

    warehouses: [Warehouse!]
    departments: [Department!]
    redstamps: [Redstamp!]
    itemReasons: [ItemReason!]
    arrivals:[Arrival!]
    orders:[Order!]
    openOrders:[Order!]
    closedOrders: [Order!]
    orderItems: [OrderItem!]
    authors: [Author!]
    books: [Book!]
    products: [Product!]
    product(id: ID!): Product
    ediOrders:[EdiOrder!]
    ediOrderItems:[EdiOrderItem!]
    ediOrderItemsByNumber(ediOrder: String):[EdiOrderItem!]
    suppliers:[Supplier!]
    supplier(id: ID!): Supplier

    

    
  }

  type Mutation {
    addAlphaProduct(name: String!, price:Float!, inStock:Float!,quantityPerBox:Float!, alphaSupplierId: ID!): AlphaProduct
    addBetaProduct(name: String!, price:Float, inStock:Float,quantityPerBox:Int! , betaSupplierId:ID!): BetaProduct

    addAlphaSupplier(name: String!,number:Int! address: String, phone: String, email: String): AlphaSupplier
    addBetaSupplier(name: String!,number:Int! address: String, phone: String, email: String): BetaSupplier

    addAlphaOrder(alphaSupplierId: ID!,alphaEdi:Int,alphaReference:Int!, alphaProducts: [AlphaOrderProductInput]!, alphaOrderDate:Date, totalQuantity: Float): AlphaOrder
    addAlphaProductToAlphaOrder(alphaOrderId: ID, alphaProductId: ID!, quantity: Int!): AlphaOrder
  
    createAuthor(name: String!): Author!
    createBook(title: String!, pages: Int!, author: String!): Book!

    createDepartment(title:String!): Department!
    createRedstamp(title:String!): Redstamp!
    createItemReason(title:String!): ItemReason!


    createEdiOrder(supplier:String!,supplierNumber:Int!,edi:Int!,orderNumber: String!,boxes:Int!,quantity:Int!,date: String!): EdiOrder!
    createEdiOrderItem(code: String, product: String!,quantity:Int! ,  ediOrder: String!): EdiOrderItem!
    createSupplier(name: String!,
                   email: String! ,
                   number:String!): Supplier!

    createProduct(name: String!,
                  barcode:String!,
                  image:String!,
                  price: Float!,
                  description: String,
                  quantityPerBox:Int!,
                  supplierId: ID!,
                  quantityInStock:Float!): Product
  }

  input AlphaOrderProductInput {
    alphaProductId: ID!
    quantity: Float!
    totalBoxes:Float
    
    

  }



  type AlphaSupplier {
    id: ID!
    name: String!
    number:Int!
    address: String
    phone: String
    email: String
    alphaProducts: [AlphaProduct]
  }

  type BetaSupplier {
    id: ID!
    name: String!
    number:Int!
    address: String
    phone: String
    email: String
    betaProducts:[BetaProduct]
  }

  type AlphaProduct {
    id: ID!
    name: String!
    price: Float!
    inStock:Float!
    quantityPerBox:Int!
    alphaSupplier: AlphaSupplier!
  }

  type BetaProduct {
    id: ID!
    name: String!
    price: Float
    inStock:Float
    quantityPerBox:Int!
    betaSupplier: BetaSupplier!

  }

  type AlphaOrderProduct {
    alphaProduct: AlphaProduct
    quantity: Int!
    totalBoxes: Int
  }

  type AlphaOrder {
    id: ID!
    alphaEdi:Int
    alphaReference:Int!
    alphaSupplier: AlphaSupplier!
    alphaProducts: [AlphaOrderProduct]!
    alphaOrderDate: Date!
    totalQuantity: Float!
  }



  
  type Author {
  id: ID!
  name: String!
  books: [Book!] 
}

type Book {
  id: ID!
  title: String!
  pages: Int
  author: Author!
}

type EdiOrder {
  id: ID!
  supplier:String!
  supplierNumber:String!
  edi:Int!,
  orderNumber:String!
  boxes:Int!,
  quantity:Int!,
  date: String!
  
  
}

type EdiOrderItem {
     id: ID!,
     code: String,
      product: String,
      quantity: Int!
      ediOrder: EdiOrder!
      }

  

  type Warehouse {
        id: ID,
        title: String
      
    }

    type Department {
        id: ID,
        title: String
      
    }

    type Redstamp {
      id: ID,
      title: String
    
  }

  type ItemReason {
    id: ID,
    title: String
  
}

    type Arrival {
        id: ID,
        title: String
      
    }

    

    type Supplier {
      id: ID!
      name: String!
      number: String!
      email: String!
      products: [Product]
    }

    

    type Product {
      id: ID!
      name: String!
      barcode:String!
      image:String!
      price: Float!
      description: String
      quantityPerBox :Int
      quantityInStock :Int

    }

    type Order {
        id: ID,
        reference:String,
        date:Date,
        supplierId:ID!,
        rows:Int,
        quantity:Int,
        supplied:Int
        isOpen:Boolean 
        #orderItems:[OrderItem]
        
    }

    type OrderItem {
     id: ID,
     code: String,
      product_name: String,
      quantity: Int,
      boxes: Int,
      isOpen: Boolean,
      isFull: Boolean,
      ReasonOfRefund: String,
      orderReference: String
      }
`;

//console.log("typeDefs" , typeDefs)



