import { Outlet } from 'react-router-dom'
import { AuthContainer, AuthMain, AuthLogo } from './AuthLayout.styled.js'

const AuthLayout = () => {
  return (
    <AuthMain>
      <AuthContainer>
        <AuthLogo>Chattex</AuthLogo>
        <Outlet />
      </AuthContainer>
    </AuthMain>
  )
}

export default AuthLayout