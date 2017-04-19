import LoginView from './components/LoginTwo'
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
    meta: { requiresAuth: true },
    children: [
      {
        path: 'upload',
        component: ArticleUploadView
      },
      {
        path: 'articles',
        component: ArticlesView,
        meta: { requiresAuth: true }
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
