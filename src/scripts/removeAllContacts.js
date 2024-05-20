import { PATH_DB } from '../constants/contacts.js';
import fs from 'node:fs/promises';

export const removeAllContacts = async () => {
  const data = await fs.readFile(PATH_DB, 'utf-8');
  const contacts = JSON.parse(data);

  if (contacts.length === 0) {
    console.log('Contacts file is empty.');
    return;
  }

  contacts.splice(0, contacts.length);
  await fs.writeFile(PATH_DB, JSON.stringify(contacts));
  console.log('All contacts are deleted.');
};

await removeAllContacts();
