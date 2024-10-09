import gql from 'graphql-tag';



// GraphQL Schema
export const typeDefs = gql`
  scalar Date

  type Query {
    products: [Product]
    product(id: ID!): Product
    suppliers: [Supplier!]
    supplier(id: ID!): Supplier
    orders: [Order]
    order(id: ID!): Order
    warehouses: [Warehouse!]
    warehouse(id: ID!): Warehouse
    departments: [Department!]
    department(id: ID!): Department
    redstamps: [Redstamp!]
    redstamp(id: ID!): Redstamp
    itemReasons: [ItemReason!]
    itemReason(id: ID!): ItemReason
    arrivals: [Arrival!]
  }

  type Mutation {
    addProduct(
      name: String!,
      code: Int!,
      category: String,
      picture: String,
      price: Float,
      inStock: Float,
      quantityPerBox: Int!,
      supplierId: ID!,
      toto:String
    ): Product

    addSupplier(
      name: String!,
      number: Int!,
      supplierDetails: [SupplierDetailsInput]!,
      products: [ProductInput]
    ): Supplier

    addOrder(
      supplierId: ID!,
      edi: Int,
      reference: Int!,
      date: Date,
      totalQuantity: Float,
      orderProducts: [OrderProductInput]!
    ): Order

    addWarehouse(title: String!): Warehouse!
    addDepartment(title: String!): Department!
    addRedstamp(title: String!): Redstamp!
    addItemReason(title: String!): ItemReason!

    updateOrderProductStatus(
      orderId: ID!,
      finalQuantity: Int!,
      productId: ID!,
      isOpen: Boolean!
    ): Order
  }

  type Supplier {
    id: ID!
    name: String!
    number: Int!
    supplierDetails: [SupplierDetails]!
    products: [Product]
    orders: [Order]
  }

  type SupplierDetails {
    address: String
    phone: String
    email: String
  }

  input SupplierDetailsInput {
    address: String
    phone: String
    email: String
  }

  type Order {
    id: ID!
    edi: Int
    reference: Int!
    supplier: Supplier!
    orderProducts: [OrderProduct]!
    date: Date!
    totalQuantity: Float!
    totalBoxes: Int
  }

  type OrderProduct {
    product: Product
    initialQuantity: Int!
    finalQuantity: Int
    isOpen: Boolean
    totalBoxes: Int
  }

  input OrderProductInput {
    productId: ID!
    initialQuantity: Int!
    finalQuantity: Int  
    boxes: Float
    isOpen: Boolean
  }

  type Product {
    id: ID!
    name: String!
    code: String!
    category: String
    picture: String
    price: Float
    inStock: Float
    quantityPerBox: Int!
    supplier: Supplier!
    toto:String
  }

  input ProductInput {
    productId: ID!
  }

  type Warehouse {
    id: ID!
    title: String!
  }

  type Department {
    id: ID!
    title: String!
  }

  type Redstamp {
    id: ID!
    title: String!
  }

  type ItemReason {
    id: ID!
    title: String!
  }

  type Arrival {
    id: ID!
    title: String!
  }
`;





