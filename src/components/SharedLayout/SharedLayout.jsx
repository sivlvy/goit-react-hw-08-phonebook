import AuthNav from 'components/AuthNav';
import Navigation from 'components/Navigation';
import UserMenu from 'components/UserMenu';
import { useAuth } from 'hooks';
import { Outlet } from 'react-router-dom';
import { Container, Header, Wrapper } from './SharedLayout.styled';

const SharedLayout = () => {
    const { isLoggedIn } = useAuth();

    return (
        <>
            <Header>
                <Container>
                    <Wrapper>
                        <Navigation />

                        {isLoggedIn ? <UserMenu /> : <AuthNav />}
                    </Wrapper>
                </Container>
            </Header>

            <main>
                <Container>
                    <Outlet />
                </Container>
            </main>
        </>
    );
};

export default SharedLayout;
