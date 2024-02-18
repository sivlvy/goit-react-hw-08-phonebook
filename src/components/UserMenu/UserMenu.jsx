import { useAuth } from 'hooks';
import { useDispatch } from 'react-redux';
import { logOut } from '../../redux/auth/operations';
import { Button, Wrapper } from './UserMenu.styled';

const UserMenu = () => {
    const dispatch = useDispatch();

    const {
        user: { email },
    } = useAuth();

    return (
        <Wrapper>
            <p>{email}</p>
            <Button onClick={() => dispatch(logOut())}>Logout</Button>
        </Wrapper>
    );
};

export default UserMenu;
