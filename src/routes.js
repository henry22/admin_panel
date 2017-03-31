import LoginView from './components/Login'
import CategoryView from './components/Category'

const routes = [
  {
    path: '/login',
    component: LoginView
  },
  {
    path: '/',
    component: CategoryView
  }
];

export default routes
