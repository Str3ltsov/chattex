import {
    FormContainer,
    FormCheckboxAndLinkContainer,
    FormButton,
    FormButtonIcon,
} from "./LoginForm.styled.js"
import InputField from '../../components/InputField/InputField.jsx'
import PasswordField from '../../components/PasswordField/PasswordField.jsx'

/* Form for login authentication */
const LoginForm = () => {
    return (
        <FormContainer>
            <InputField label={"Email*"} type={"email"} name={"email"} id={"email"} placeholder={"johnjohnson@gmail.com"} />
            <PasswordField />
            <FormCheckboxAndLinkContainer>
                <label htmlFor="rememberMe">
                    <input type="checkbox" name="rememberMe" id="rememberMe" />
                    <span>&#10003;</span>
                    Remember me for 30 days
                </label>
                <a href="/forgot-password">Forgot Password?</a>
            </FormCheckboxAndLinkContainer>
            <FormButton type="submit">
                <FormButtonIcon />
                Login
            </FormButton>
        </FormContainer>
    )
}

export default LoginForm