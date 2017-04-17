import LoginView from './components/Login'
import DashboardView from './components/Dashboard'
import ArticleUploadView from './components/ArticleUpload'
import ArticlesView from './components/Articles'
import CategoriesView from './components/Categories'
// import OauthView from './components/Oauth'

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
        path: 'articles',
        component: ArticlesView
      },
      {
        path: 'categories',
        component: CategoriesView,
        meta: { requiresAuth: true }
      },
      // {
      //   path: 'oauth',
      //   component: OauthView
      // }
    ]
  }
];

export default routes
