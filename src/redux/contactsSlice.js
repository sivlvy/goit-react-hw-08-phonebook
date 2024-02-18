import { createSlice } from '@reduxjs/toolkit';
import { addContact, deleteContact, fetchContacts } from '../redux/operations';

const handlePending = state => {
    state.isLoading = true;
};

const handleRejected = (state, action) => {
    state.isLoading = false;
    state.error = action.payload;
};

const contactsSlice = createSlice({
    name: 'contacts',
    initialState: {
        contacts: [],
        filter: '',
        isLoading: false,
        error: null,
    },

    reducers: {
        setFilter(state, action) {
            state.filter = action.payload.value;
        },
    },

    extraReducers: builder => {
        builder
            .addCase(fetchContacts.pending, handlePending)
            .addCase(fetchContacts.fulfilled, (state, action) => {
                state.isLoading = false;
                state.error = null;
                state.contacts = action.payload;
            })
            .addCase(fetchContacts.rejected, handleRejected)

            .addCase(addContact.pending, handlePending)
            .addCase(addContact.fulfilled, (state, action) => {
                state.isLoading = false;
                state.error = null;
                console.log(action.payload)
                state.contacts.push({
                    id: action.payload.id,
                    name: action.payload.name,
                    number: action.payload.number,
                });
            })
            .addCase(addContact.rejected, handleRejected)

            .addCase(deleteContact.pending, handlePending)
            .addCase(deleteContact.fulfilled, (state, action) => {
                state.isLoading = false;
                state.error = null;
                state.contacts = state.contacts.filter(contact => contact.id !== action.payload.id);
            })
            .addCase(deleteContact.rejected, handleRejected);
    },
});

export const { setFilter } = contactsSlice.actions;

export default contactsSlice.reducer;
