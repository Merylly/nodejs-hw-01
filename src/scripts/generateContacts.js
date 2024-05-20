import { PATH_DB } from '../constants/contacts.js';
import fs from 'node:fs/promises';

import { createFakeContact } from '../utils/createFakeContact.js';

const generateContacts = async (number) => {
  fs.readFile(PATH_DB, 'utf-8')
    .then((data) => {
      const contacts = JSON.parse(data);

      for (let index = 0; index < number; index++) {
        const addedContact = createFakeContact();
        contacts.push(addedContact);
      }

      fs.writeFile(PATH_DB, JSON.stringify(contacts));
    })
    .catch((error) => {
      console.error(error);
    });
};

await generateContacts(5);
