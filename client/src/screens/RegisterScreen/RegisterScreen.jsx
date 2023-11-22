import RegisterForm from "../../components/RegisterForm/RegisterForm.jsx"
import { BottomContainer, Container, InfoContainer } from "./RegisterScreen.styled.js"

/* Authentication register screen */
const RegisterScreen = () => {
    return (
        <Container>
            <InfoContainer>
                <h1>Register</h1>
                <p>After creating your account, you will be able to login.</p>
            </InfoContainer>
            <RegisterForm />
            <BottomContainer>
                <span>Already have an account?</span>
                <a href="/login">Login</a>
            </BottomContainer>
        </Container>
    )
}

export default RegisterScreen