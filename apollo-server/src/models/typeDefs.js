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
    department(id:ID!): Department

    redstamps: [Redstamp!]
    redstamp(id:ID!): Redstamp

    itemReasons: [ItemReason!]
    itemReason(id:ID!): ItemReason

    arrivals:[Arrival!] 
  }

  type Mutation {
    addProduct(name: String!,
               code:Int! ,
               category:String
               picture:String ,
               price:Float,
               inStock:Float,
               quantityPerBox:Int! , 
               supplierId:ID!): Product

    addSupplier(name: String!,
                number:Int!,
                supplierDetails: [SupplierDetailsInput]!,
                products:[ProductInput],
                ): Supplier

    addOrder(supplierId: ID!,
             edi:Int,
             reference:Int!, 
             date:Date, 
             totalQuantity: Float
             products: [OrderProductInput]!,): Order

    addWarehouse(title:String!): Warehouse!
    addDepartment(title:String!): Department!
    addRedstamp(title:String!): Redstamp!
    addItemReason(title:String!): ItemReason!
    updateOrderProductStatus(orderId: ID!,quantityAfter:Int!, productId: ID!, isOpen: Boolean!): Order  # New mutation to update product status

  }
  

  type Supplier {
    id: ID!
    name: String!
    number:Int!
    supplierDetails: [SupplierDetails]!
    products:[Product]
  }

  type SupplierDetails {
    # supplier: Supplier
    address: String
    phone: String
    email: String
  }

  input SupplierDetailsInput {
    # supplierId: ID!
    address: String
    phone: String
    email: String
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

  type OrderProduct {
    product: Product
    quantityBefore: Int!
    quantityAfter: Int
    totalBoxes: Int
    isOpen: Boolean!
  }

  input OrderProductInput {
    productId: ID!
    quantityBefore: Int!
    quantityAfter: Int
    boxes:Float
    isOpen: Boolean
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

  input ProductInput {
    productId: ID!
    
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




