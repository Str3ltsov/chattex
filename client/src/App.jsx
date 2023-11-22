import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import AuthLayout from './screens/layouts/AuthLayout.jsx'
import LoginScreen from './screens/LoginScreen/LoginScreen.jsx'
import RegisterScreen from './screens/RegisterScreen/RegisterScreen.jsx'
import ForgotPasswordScreen from './screens/ForgotPasswordScreen/ForgotPasswordScreen.jsx'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<AuthLayout />}>
      <Route index path='/login' element={<LoginScreen />} />
      <Route path='/register' element={<RegisterScreen />} />
      <Route path='/forgot-password' element={<ForgotPasswordScreen />} />
    </Route>
  )
)

const App = () => {
  return <RouterProvider router={router} />
}

export default App