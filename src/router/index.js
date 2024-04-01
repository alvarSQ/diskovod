import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import CategoryView from '@/views/CategoryView.vue'
import ProductView from '@/views/ProductView.vue'
import NotFoundView from "@/views/notFound.vue"


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/category/:slug',
      name: 'category',
      component: CategoryView
    },
    {
      path: '/product/:slug',
      name: 'product',
      component: ProductView
    },
    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (About.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   // component: () => import('../views/AboutView.vue')
    // },
    {
      path: "/:CatchAll(.*)",
      name: "404",
      component: NotFoundView,
    },
  ],
  scrollBehavior() {
    return { top: 0 }
  },
})

export default router
