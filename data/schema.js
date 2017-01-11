const typeDefinitions = `
scalar Date

type Contact {
  id: String
  name: String
  company: String
  email: String
  phone: String
  street: String
  city: String
  state: String
  zip: String
  dob: Date
  notes: String
}

type Query {
  contact(id: String): Contact
  contacts: [Contact]
}

type Mutation {
  createContact(id: String, name: String, company: String, email: String,
    phone: String, street: String, city: String, state: String, zip: String,
    dob: Date, notes: String): Contact

  updateContact(id: String, name: String, company: String, email: String,
    phone: String, street: String, city: String, state: String, zip: String,
    dob: Date, notes: String): Contact
}

schema {
  query: Query
  mutation: Mutation
}
`;

export default [typeDefinitions];
