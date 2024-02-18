import { List, ListItem, ListLink } from "components/Navigation/Navigation.styled";

const AuthNav = () => {
    return (
        <List>
            <ListItem>
                <ListLink to="/register">Register</ListLink>
            </ListItem>
            <ListItem>
                <ListLink to="/login">Login</ListLink>
            </ListItem>
        </List>
    );
};

export default AuthNav;
