import LoginView from './components/Login'
import DashboardView from './components/Dashboard'
import ArticleUploadView from './components/ArticleUpload'
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
        component: ArticleUploadView
      },
      {
        path: 'cards',
        component: CardsView
      }
    ]
  }
];

export default routes
