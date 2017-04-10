import LoginView from './components/Login'
import DashboardView from './components/Dashboard'
import ArticleUploadView from './components/ArticleUpload'
import CardsView from './components/Cards'
import CategoryView from './components/Category'

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
        path: 'upload',
        component: ArticleUploadView
      },
      {
        path: 'cards',
        component: CardsView
      },
      {
        path: 'category',
        component: CategoryView
      }
    ]
  }
];

export default routes
