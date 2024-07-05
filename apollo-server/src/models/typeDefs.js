import gql from 'graphql-tag';



// GraphQL Schema
export const typeDefs = gql`
  scalar Date


  type Query {
    alphaSuppliers:[AlphaSupplier!]
    alphaSupplier(id: ID!): AlphaSupplier
    alphaProducts: [AlphaProduct]
    alphaProduct(id: ID!): AlphaProduct
    alphaOrders: [AlphaOrder]
    alphaOrder(id: ID!): AlphaOrder

    hello(name: String): String!
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

    addAlphaSupplier(name: String!,number:Int! address: String!, phone: String, email: String): AlphaSupplier
    addAlphaProduct(name: String!, price:Float!, inStock:Float!,perBox:Int!, alphaSupplierId: ID!): AlphaProduct
    addAlphaOrder(alphaSupplierId: ID!,alphaReference:Int, alphaProducts: [AlphaOrderProductInput]!, alphaOrderDate:Date, totalAmount: Float): AlphaOrder
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
    quantity: Int!
    boxes: Int

  }



  type AlphaSupplier {
    id: ID!
    name: String!
    number:Int!
    address: String!
    phone: String
    email: String
    alphaProducts: [AlphaProduct]

  }

  type AlphaProduct {
    id: ID!
    name: String!
    price: Float!
    inStock:Float!
    perBox:Int!
    
    alphaSupplier: AlphaSupplier!
  }

  type AlphaOrderProduct {
    alphaProduct: AlphaProduct!
    quantity: Int!
    boxes: Int
  }

  type AlphaOrder {
    id: ID!
    alphaReference:Int
    alphaSupplier: AlphaSupplier!
    alphaProducts: [AlphaOrderProduct]!
    alphaOrderDate: Date!
    totalAmount: Float!
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



