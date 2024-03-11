import {
  PhonebookList,
  PhonebookListElements,
  PhonebookDeleteButton,
} from './ContactList.styled';
import { useSelector, useDispatch } from 'react-redux';
import { deleteContact } from 'reduxStore/contactsSlice';
import { getContacts, getFilter } from 'reduxStore/selectors';

export const ContactList = () => {
  const { contacts } = useSelector(getContacts);
  const { filter } = useSelector(getFilter);
  const dispatch = useDispatch();

  const filterContacts = () => {
    return contacts.filter(({ name }) => {
      return name.toLowerCase().includes(filter.toLowerCase());
    });
  };
  const list = filter.length > 0 ? filterContacts() : contacts;

  const handleDeleteContact = id => {
    dispatch(deleteContact(id));
  };
  return (
    <PhonebookList>
      {list.map(({ id, name, number }) => {
        return (
          <PhonebookListElements key={id}>
            {name}: {number}
            <PhonebookDeleteButton onClick={() => handleDeleteContact(id)}>
              Delete
            </PhonebookDeleteButton>
          </PhonebookListElements>
        );
      })}
    </PhonebookList>
  );
};
