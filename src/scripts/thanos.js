import { PATH_DB } from '../constants/contacts.js';
import fs from 'node:fs/promises';

export const thanos = async () => {
  const data = await fs.readFile(PATH_DB, 'utf-8');
  const contacts = JSON.parse(data);

  const contactsToDelete = Math.ceil(contacts.length / 2);

  for (let index = 0; index < contactsToDelete; index++) {
    const randomIndex = Math.floor(Math.random() * contacts.length);
    contacts.splice(randomIndex, 1);
    await fs.writeFile(PATH_DB, JSON.stringify(contacts));
  }

  console.log('Thanos activated successfully :)');
};

await thanos();
