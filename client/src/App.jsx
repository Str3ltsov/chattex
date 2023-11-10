import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import AuthLayout from './screens/layouts/AuthLayout.jsx'
import LoginScreen from './screens/LoginScreen/LoginScreen.jsx'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<AuthLayout />}>
      <Route index path='/login' element={<LoginScreen />} />
    </Route>
  )
)

const App = () => {
  return <RouterProvider router={router} />
}

export default App