import mongoose from 'mongoose';

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/contacts');

const ContactSchema = mongoose.Schema({
  id: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  company: String,
  email: String,
  phone: String,
  street: String,
  city: {
    type: String,
    required: true,
  },
  state: String,
  zip: String,
  dob: Date,
});

const Contact = mongoose.model('contacts', ContactSchema);

export { Contact };
