import LoginView from './components/LoginTwo'
import DashboardView from './components/Dashboard'
import ArticleUploadView from './components/ArticleUpload'
import ArticlesView from './components/Articles'
import CrawlerView from './components/Crawler'
import CategoriesView from './components/Categories'

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
        path: 'crawler',
        component: CrawlerView,
        meta: { requiresAuth: true }
      },
      {
        path: 'categories',
        component: CategoriesView,
        meta: { requiresAuth: true }
      }
    ]
  }
];

export default routes
