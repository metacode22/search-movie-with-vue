import { createRouter, createWebHistory} from 'vue-router'
import Home from './Home'
import MovieDetail from './MovieDetail'
import NotFound from './NotFound'

export default createRouter({
  history: createWebHistory(),
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { top: 0, behavior: 'smooth' }
    }
  },
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/movie-detail/:id',
      name: 'movieDetail',
      component: MovieDetail
    },
    {
      path: '/:notFound(.*)',
      component: NotFound
    },
    {
      path: '/not-found',
      name: 'notFound',
      component: NotFound
    }
  ]
})