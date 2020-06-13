export default [
  {
    path: "/about",
    component: () => import(/* webpackChunkName: "page--src--pages--about-vue" */ "/Users/jwolff/Documents/dev/learning-vue/gridsome-wordpress/yo/vue-gridsome-graphql-wordpress/src/pages/About.vue")
  },
  {
    name: "404",
    path: "/404",
    component: () => import(/* webpackChunkName: "page--node-modules--gridsome--app--pages--404-vue" */ "/Users/jwolff/Documents/dev/learning-vue/gridsome-wordpress/yo/vue-gridsome-graphql-wordpress/node_modules/gridsome/app/pages/404.vue")
  },
  {
    name: "home",
    path: "/:page(\\d+)?",
    component: () => import(/* webpackChunkName: "page--src--pages--index-vue" */ "/Users/jwolff/Documents/dev/learning-vue/gridsome-wordpress/yo/vue-gridsome-graphql-wordpress/src/pages/Index.vue"),
    meta: {
      data: true
    }
  },
  {
    path: "/category/:slug/:page(\\d+)?",
    component: () => import(/* webpackChunkName: "page--src--templates--word-press-category-vue" */ "/Users/jwolff/Documents/dev/learning-vue/gridsome-wordpress/yo/vue-gridsome-graphql-wordpress/src/templates/WordPressCategory.vue"),
    meta: {
      data: true
    }
  },
  {
    path: "/:year/:month/:day/:slug",
    component: () => import(/* webpackChunkName: "page--src--templates--word-press-post-vue" */ "/Users/jwolff/Documents/dev/learning-vue/gridsome-wordpress/yo/vue-gridsome-graphql-wordpress/src/templates/WordPressPost.vue"),
    meta: {
      data: true
    }
  },
  {
    name: "*",
    path: "*",
    component: () => import(/* webpackChunkName: "page--node-modules--gridsome--app--pages--404-vue" */ "/Users/jwolff/Documents/dev/learning-vue/gridsome-wordpress/yo/vue-gridsome-graphql-wordpress/node_modules/gridsome/app/pages/404.vue")
  }
]

