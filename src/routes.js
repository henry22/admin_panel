import LoginView from './components/Login'
import NavbarView from './components/Navbar'

const routes = [
  {
    path: '/login',
    component: LoginView
  },
  {
    path: '/',
    component: NavbarView
  }
];

export default routes
