import ResetPasswordForm from "../../components/ResetPasswordForm/ResetPasswordForm"
import { Container, InfoContainer } from "./ResetPasswordScreen.styled"

/* Authentication reset password screen */
const ResetPasswordScreen = () => {
    return (
        <Container>
            <InfoContainer>
                <h1>Reset Password</h1>
                <p>Create a new password to reset your forgotten one.</p>
            </InfoContainer>
            <ResetPasswordForm />
        </Container>
    )
}

export default ResetPasswordScreen