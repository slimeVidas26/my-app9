import gql from 'graphql-tag';



// GraphQL Schema
export const typeDefs = gql`
  scalar Date


  type Query {
    products: [Product]
    product(id: ID!): Product
    suppliers:[Supplier!]
    supplier(id: ID!): Supplier
    orders: [Order]
    order(id: ID!): Order
    warehouses: [Warehouse!]
    warehouse(id:ID!): Warehouse

    departments: [Department!]
    redstamps: [Redstamp!]
    itemReasons: [ItemReason!]
    arrivals:[Arrival!] 
  }

  type Mutation {
    addProduct(name: String!,code:Int! price:Float, inStock:Float, quantityPerBox:Int! , supplierId:ID!): Product
    addSupplier(name: String!,number:Int! address: String, phone: String, email: String): Supplier
    addOrder(supplierId: ID!,edi:Int,reference:Int!, products: [OrderProductInput]!,date:Date, totalQuantity: Float): Order
    addWarehouse(title:String!): Warehouse!

    addDepartment(title:String!): Department!
    addRedstamp(title:String!): Redstamp!
    addItemReason(title:String!): ItemReason!

  }
  
  

  type Supplier {
    id: ID!
    name: String!
    number:Int!
    address: String
    phone: String
    email: String
    products:[Product]
  }

  type Product {
    id: ID!
    name: String!
    code:String!
    category:String
    picture:String
    price: Float
    inStock:Float
    quantityPerBox:Int!
    supplier: Supplier!

  }


  input OrderProductInput {
    productId: ID!
    quantity: Int!
    boxes:Float
  }

  type OrderProduct {
    product: Product
    quantity: Int!
    totalBoxes: Int
  }

  type Order {
    id: ID!
    edi:Int
    reference:Int!
    supplier: Supplier!
    products: [OrderProduct]!
    date: Date!
    totalQuantity: Float!
    totalBoxes: Int
  }

  type Warehouse {
        id: ID
        title: String
    }

    type Department {
        id: ID
        title: String
      
    }

    type Redstamp {
      id: ID
      title: String
    
  }

  type ItemReason {
    id: ID
    title: String
  
}

    type Arrival {
        id: ID
        title: String
    }`;




