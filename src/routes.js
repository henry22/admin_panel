import LoginView from './components/Login'
import CategoryView from './components/Category'
import Cards from './components/Cards'

const routes = [
  {
    path: '/login',
    component: LoginView
  },
  {
    path: '/category',
    component: CategoryView
  },
  {
    path: '/cards',
    component: Cards
  }
];

export default routes
