import gql from 'graphql-tag';



// GraphQL Schema
export const typeDefs = gql`
  scalar Date


  type Query {
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

    testSuppliers: [TestSupplier]
    testSupplier(id: ID!): TestSupplier

    testProducts: [TestProduct]
    testProduct(id: ID!): TestProduct

    testOrders: [TestOrder]
    testOrder(id: ID!): TestOrder

    
  }

  type Mutation {
    addTestOrder(testProducts: [ID!]!,testSupplierId: ID!, totalAmount: Float!): TestOrder
    addTestProduct(name: String!, price: Float!, testSupplierId: ID!): TestProduct
    addTestSupplier(name: String!, address: String, phone: String, email: String): TestSupplier
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
                  quantityInStock:Int!): Product
  }


  type TestSupplier {
    id: ID!
    name: String!
    address: String
    phone: String
    email: String
    testProducts: [TestProduct]
  }

  type TestProduct {
    id: ID!
    name: String!
    price: Float!
    testSupplier: TestSupplier!
  }

  type TestOrder {
    id: ID!
    testProducts: [TestProduct]!
    testSupplier: TestSupplier!
    orderDate: String!
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

