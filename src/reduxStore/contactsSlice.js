import { createSlice } from '@reduxjs/toolkit';
import { v1 as uuidv1 } from 'uuid';

const initialState = { contacts: [] };

const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    addContact: {
      reducer: (state, { payload }) => {
        state.contacts.push(payload);
      },
      prepare: ({ name, number }) => {
        const id = uuidv1();
        return { payload: { id, name, number } };
      },
    },
    deleteContact: (state, { payload }) => {
      state.contacts = state.contacts.filter(person => person.id !== payload);
    },
  },
});

export const contactsReducer = contactsSlice.reducer;

export const { addContact, deleteContact } = contactsSlice.actions;
