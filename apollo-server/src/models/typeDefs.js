import gql from 'graphql-tag';

//    ediOrders(input: EdiOrdersInputFilter): [EdiOrder!]


// // GraphQL Schema
// const typeDefs = gql`
//   type Query {
//     hello: String
//   }
// `;

// GraphQL Schema
export const typeDefs = gql`
  scalar Date


  type Query {
    hello(name: String): String!
    warehouses: [Warehouse!],
    departments: [Department!],
    arrivals:[Arrival!],
    orders:[Order!]
    openOrders:[Order!],
    closedOrders: [Order!],
    orderItems: [OrderItem!],
    authors: [Author!]
    books: [Book!]
    ediOrders:[EdiOrder!]
    ediOrderItems:[EdiOrderItem!]
    ediOrderItemsByNumber(ediOrder: String):[EdiOrderItem!]
    suppliers:[Supplier!]

    
  }

  type Mutation {
    createAuthor(name: String!): Author!
    createDepartment(title:String!): Department!
    createBook(name: String!, pages: Int, author: String!): Book!
    createEdiOrder(supplier:String!,supplierNumber:Int!,edi:Int!,orderNumber: String!,boxes:Int!,quantity:Int!,date: String!): EdiOrder!
    createEdiOrderItem(code: String, product: String!,quantity:Int! ,  ediOrder: String!): EdiOrderItem!
    createSupplier(supplier_name:String! , supplier_number:String!):Supplier!

  }

  type Author {
  id: ID!
  name: String!
  books: [Book!]
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

  type Book {
  id: ID!
  name: String!
  pages: Int
  author: Author!
}

  type Warehouse {
        id: ID,
        title: String
      
    }

    type Department {
        id: ID,
        title: String
      
    }

    type Arrival {
        id: ID,
        title: String
      
    }

    type Supplier {
        id: ID,
        supplier_name: String!,
        supplier_number: String!
        

        
      
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

