import { Contact } from './connectors';

const seedContacts = [
  Contact({
    id: 'dominic-chambers',
    name: 'Dominic Chambers',
    company: 'Publicis.Sapient',
    email: 'dominic@gmail.com',
    phone: '+44 (0)12 345-6789',
    street: '100 High Road',
    city: 'London',
    state: null,
    zip: 'EC1 1AB',
    dob: '01/01/2000',
    notes: null,
  }),
  Contact({
    id: 'naresh-bhatia',
    name: 'Naresh Bhatia',
    company: 'Publicis.Sapient',
    email: 'naresh@gmail.com',
    phone: '+1 (123) 456-7890',
    street: '100 Main Street',
    city: 'Boston',
    state: 'MA',
    zip: '02112',
    dob: '01/01/2000',
    notes: null,
  }),
  Contact({
    id: 'pavan-podila',
    name: 'Pavan Podila',
    company: 'Publicis.Sapient',
    email: 'pavan@gmail.com',
    phone: '+1 (123) 456-7890',
    street: '100 Federal Street',
    city: 'New York',
    state: 'NY',
    zip: '10001',
    dob: '12/31/2001',
    notes: 'JavaScript expert',
  }),
];

Contact.find().then((contacts) => {
  if (contacts.length > 0) {
    console.log('Database already populated so leaving as is.');
    process.exit();
  }

  seedContacts.forEach((contact) => {
    contact.save((err) => {
      if (err) throw err;
      console.log(`Contact '${contact.id}' created!`);
    });
  });
});
