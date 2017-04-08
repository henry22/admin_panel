import LoginView from './components/Login'
import DashboardView from './components/Dashboard'
import CategoryView from './components/Category'
import CardsView from './components/Cards'

const routes = [
  {
    path: '/login',
    component: LoginView
  },
  {
    path: '/',
    component: DashboardView,
    children: [
      {
        path: 'category',
        component: CategoryView
      },
      {
        path: 'cards',
        component: CardsView
      }
    ]
  }
];

export default routes
