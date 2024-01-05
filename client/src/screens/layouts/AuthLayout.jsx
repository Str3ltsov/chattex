import { Outlet } from 'react-router-dom'
import { AuthContainer, AuthMain, AuthLogo } from './AuthLayout.styled.js'
import SessionMessage from '../../components/SessionMessage/SessionMessage.jsx'
// import useGuest from '../../hooks/useGuest.js'

/* Layout for authentication screens */
const AuthLayout = () => {
  // An error occures when enabled, because the route '/' does exist yet.
  // useGuest()

  return (
    <>
      <AuthMain>
        <AuthContainer>
          <AuthLogo>Chattex</AuthLogo>
          <Outlet />
        </AuthContainer>
      </AuthMain>
      <SessionMessage status={'Error'} message={'This is an error message.'} />
    </>
  )
}

export default AuthLayout