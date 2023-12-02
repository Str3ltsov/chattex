import {
  Container,
  InfoContainer,
  OrContainer,
  BottomContainer
} from "./LoginScreen.styled.js"
import LoginForm from "../../components/LoginForm/LoginForm.jsx"

/* Authentication login screen */
const LoginScreen = () => {
  return (
    <Container>
      <InfoContainer>
        <h1>Login</h1>
        <p>Enter your login credentials to start chatting.</p>
      </InfoContainer>
      <LoginForm />
      <OrContainer>- Or -</OrContainer>
      <BottomContainer>
        <span>Don't have an account yet?</span>
        <a href="/register">Create one now!</a>
      </BottomContainer>
    </Container>
  )
}

export default LoginScreen