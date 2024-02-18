import { Route, Routes } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { useAuth } from 'hooks';
import { refreshUser } from '../redux/auth/operations';

import SharedLayout from 'components/SharedLayout';
import ContactsPage from 'pages/ContactsPage';
import HomePage from 'pages/HomePage';
import RegisterPage from 'pages/RegisterPage';
import LoginPage from 'pages/LoginPage';
import RestrictedRoute from './RestrictedRoute';
import PrivateRoute from './PrivateRoute';

const App = () => {
    const { isRefreshing } = useAuth();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(refreshUser());
    }, [dispatch]);

    return (
        <>
            {!isRefreshing && (
                <Routes>
                    <Route path="/" element={<SharedLayout />}>
                        <Route index element={<HomePage />} />
                        <Route
                            path="register"
                            element={
                                <RestrictedRoute
                                    redirectTo="/contacts"
                                    component={<RegisterPage />}
                                />
                            }
                        />
                        <Route
                            path="login"
                            element={
                                <RestrictedRoute redirectTo="/contacts" component={<LoginPage />} />
                            }
                        />
                        <Route path="contacts" element={<PrivateRoute redirectTo="/login" component={<ContactsPage />} />} />
                    </Route>
                </Routes>
            )}
        </>
    );
};

export default App;
