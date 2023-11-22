import ForgotPasswordForm from "../../components/ForgotPasswordForm/ForgotPasswordForm"
import { BottomContainer, Container, InfoContainer } from "./ForgotPasswordScreen.styled"

/* Authentication forgot password screen */
const ForgotPasswordScreen = () => {
    return (
        <Container>
            <InfoContainer>
                <h1>Forgot Password</h1>
                <p>After creating your account, you will be able to login.</p>
            </InfoContainer>
            <ForgotPasswordForm />
            <BottomContainer>
                <span>Remembered your password?</span>
                <a href="/login">Login</a>
            </BottomContainer>
        </Container>
    )
}

export default ForgotPasswordScreen