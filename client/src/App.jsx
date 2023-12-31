import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import AuthLayout from './screens/layouts/AuthLayout.jsx'
import LoginScreen from './screens/LoginScreen/LoginScreen.jsx'
import RegisterScreen from './screens/RegisterScreen/RegisterScreen.jsx'
import ForgotPasswordScreen from './screens/ForgotPasswordScreen/ForgotPasswordScreen.jsx'
import ResetPasswordScreen from './screens/ResetPasswordScreen/ResetPasswordScreen.jsx'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route element={<AuthLayout />}>
        <Route index={true} path='/login' element={<LoginScreen />} />
        <Route path='/register' element={<RegisterScreen />} />
        <Route path='/forgot-password' element={<ForgotPasswordScreen />} />
        <Route path='/reset-password/:token' element={<ResetPasswordScreen />} />
      </Route>
    </Route>
  )
)

const App = () => <RouterProvider router={router} />


export default App