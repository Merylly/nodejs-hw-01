import { PATH_DB } from '../constants/contacts.js';
import fs from 'node:fs/promises';

import { createFakeContact } from '../utils/createFakeContact.js';

export const addOneContact = async () => {
  const data = await fs.readFile(PATH_DB, 'utf-8');
  const contacts = JSON.parse(data);

  const addedContact = createFakeContact();
  contacts.push(addedContact);

  await fs.writeFile(PATH_DB, JSON.stringify(contacts));
  console.log('New contact is added.');
};

await addOneContact();
