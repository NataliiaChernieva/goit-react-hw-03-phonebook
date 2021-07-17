import PropTypes from 'prop-types';
import ContactListItem from '../ContactListItem/ContactListItem';

export default function ContactList({contacts, onDeleteContact}) {
    return (
        <ul>
            {contacts.map(({id, name, number }) => (
                <ContactListItem
                    key={id}
                    name={name}
                    number={number}
                    handleDelete={()=>onDeleteContact(id)}
                />
            ))} 
        </ul>
    );
}

ContactList.propTypes = {
    contacts: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        number: PropTypes.number.isRequired,
    })),
    onDeleteContact: PropTypes.func.isRequired,
}

