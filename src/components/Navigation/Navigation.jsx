import { useAuth } from 'hooks';
import { List, ListItem, ListLink } from './Navigation.styled';

const Navigation = () => {
    const { isLoggedIn } = useAuth();
    return (
        <List>
            <ListItem>
                <ListLink to="/">Home</ListLink>
            </ListItem>

            {isLoggedIn && (
                <ListItem>
                    <ListLink to="/contacts">Contacts</ListLink>
                </ListItem>
            )}
        </List>
    );
};

export default Navigation;
