import { Outlet } from 'react-router-dom'
import { AuthContainer, AuthMain, AuthLogo } from './AuthLayout.styled.js'
// import useGuest from '../../hooks/useGuest.js'

/* Layout for authentication screens */
const AuthLayout = () => {
  // An error occures when enabled, because the route '/' does exist yet.
  // useGuest()

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