import { Filter } from './Phonebook/Filter/Filter';
import { Section } from './Phonebook/Section/Section';
import { ContactForm } from './Phonebook/ContactForm/ContactForm';
import { ContactList } from './Phonebook/ContactList/ContactList';

//import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { getContacts } from 'reduxStore/selectors';

export const App = () => {
  // const KEY_WORD = 'contacts';
  const { contacts } = useSelector(getContacts);

  //const [contacts, setContacts] = useState(
  //   () => JSON.parse(localStorage.getItem(KEY_WORD)) || []
  // );
  // const [filter, setFilter] = useState('');

  // useEffect(() => {
  //   localStorage.setItem(KEY_WORD, JSON.stringify(contacts));
  // }, [contacts]);

  // const addContact = ({ name: newName, number }) => {

  //   const newContact = {
  //     id: uuidv1(),
  //     name: newName,
  //     number: number,
  //   };

  //   setContacts(prevContacts => [...prevContacts, newContact]);
  // };

  return (
    <>
      <Section title="Phonebook">
        <ContactForm />
      </Section>
      {contacts.length > 0 && (
        <Section title="Contacts">
          <Filter />
          <ContactList />
        </Section>
      )}
    </>
  );
};
