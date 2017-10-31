import Vue from 'vue'
import Router from 'vue-router'
import LandingPage from '../components/LandingPage' 
import LoadingPage from '../components/LoadingPage' 

Vue.use(Router)

export default new Router({
  routes: [
    // {
    //   path: '/',
    //   name: 'loading-page',
    //   component: LoadingPage 
    // },
    {
      path: '/',
      name: 'landing-page',
      component: LandingPage //require('@/components/LandingPage').default
    },
    {
      path: '*',
      redirect: '/'
    }
  ]
})
