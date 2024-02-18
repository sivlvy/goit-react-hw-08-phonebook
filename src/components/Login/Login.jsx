import { useDispatch } from 'react-redux';
import { logIn } from '../../redux/auth/operations';
import { Button, Form, Input, Label } from 'components/Register/Register.styled';
const Login = () => {
    const dispatch = useDispatch();

    const handleSubmit = e => {
        e.preventDefault();

        const form = e.currentTarget;

        dispatch(
            logIn({
                email: form.elements.email.value,
                password: form.elements.password.value,
            })
        );
    };

    return (
        <Form autoComplete="off" onSubmit={handleSubmit}>
            <Label>
                Email
                <Input type="email" name="email" />
            </Label>
            <Label>
                Password
                <Input type="password" name="password" />
            </Label>
            <Button type="submit">Register</Button>
        </Form>
    );
};

export default Login;
