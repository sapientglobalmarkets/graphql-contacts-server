import { Contact } from './connectors';
import DateResolver from './DateResolver';

const returnUpdatedDoc = {
  new: true,
};

const resolvers = {
  Date: DateResolver,
  Query: {
    contact(root, args) {
      return Contact.findOne({ id: args.id });
    },
    contacts() {
      return Contact.find();
    },
  },
  Mutation: {
    createContact(root, args) {
      const newContact = Contact({
        id: args.id,
        name: args.name,
        company: args.company,
        email: args.email,
        phone: args.phone,
        street: args.street,
        city: args.city,
        state: args.state,
        zip: args.zip,
        dob: args.dob,
        notes: args.notes,
      });
      return newContact.save();
    },
    updateContact(root, args) {
      return Contact.findOneAndUpdate({ id: args.id },
        {
          name: args.name,
          company: args.company,
          email: args.email,
          phone: args.phone,
          street: args.street,
          city: args.city,
          state: args.state,
          zip: args.zip,
          dob: args.dob,
          notes: args.notes,
        }, returnUpdatedDoc);
    },
  },
};

export default resolvers;
