import { Filter } from './Phonebook/Filter/Filter';
import { Section } from './Phonebook/Section/Section';
import { ContactForm } from './Phonebook/ContactForm/ContactForm';
import { ContactList } from './Phonebook/ContactList/ContactList';
import { useSelector } from 'react-redux';
import { getContacts } from 'reduxStore/selectors';

export const App = () => {
  const { contacts } = useSelector(getContacts);

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
