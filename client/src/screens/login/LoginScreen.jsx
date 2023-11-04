import {
  Container,
  FormContainer,
  InfoContainer,
  FormCheckboxAndLinkContainer,
  FormButton,
  FormButtonIcon,
  OrContainer,
  BottomContainer
} from "./LoginScreen.styled.js"
import InputField from '../../components/InputField/InputField.jsx'
import PasswordField from '../../components/PasswordField/PasswordField.jsx'

/* Authentication login screen */
const LoginScreen = () => {
  return (
    <Container>
      <InfoContainer>
        <h1>Login</h1>
        <p>Enter your login credentials to start chatting.</p>
      </InfoContainer>
      <FormContainer>
        <InputField label={"Email*"} type={"email"} name={"email"} id={"email"} placeholder={"johnjohnson@gmail.com"} />
        <PasswordField />
        <FormCheckboxAndLinkContainer>
          <label htmlFor="rememberMe">
            <input type="checkbox" name="rememberMe" id="rememberMe" />
            <span>&#10003;</span>
            Remember me for 30 days
          </label>
          <a href="/login">Forgot Password?</a>
        </FormCheckboxAndLinkContainer>
        <FormButton type="submit">
          <FormButtonIcon />
          Login
        </FormButton>
      </FormContainer>
      <OrContainer>- Or -</OrContainer>
      <BottomContainer>
        <span>Don't have an account yet?</span>
        <a href="#">Create one now!</a>
      </BottomContainer>
    </Container>
  )
}

export default LoginScreen