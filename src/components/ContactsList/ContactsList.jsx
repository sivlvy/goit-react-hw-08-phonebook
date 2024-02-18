import { useSelector } from 'react-redux';
import ContactsItem from './ContactsItem';
import { ContactsListStyled } from './ContactsList.styled';
import { selectFilteredContacts } from '../../redux/selectors';

const ContactsList = () => {
    const filteredContacts = useSelector(selectFilteredContacts);

    return (
        <>
            {filteredContacts?.length > 0 ? (
                <ContactsListStyled>
                    {filteredContacts.map(({ id, name, number }) => (
                        <ContactsItem key={id} id={id} name={name} number={number} type="button" />
                    ))}
                </ContactsListStyled>
            ) : (
                <p>No contacts found</p>
            )}
        </>
    );
};

export default ContactsList;
