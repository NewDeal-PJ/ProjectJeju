
const routes = [
  {
    path: '',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/IndexPage.vue') },
    ]
  },
  {
    path: '/login',
    component: () => import('layouts/MainLayout.vue'),
    children: [
<<<<<<< HEAD
      { path: '', component: () => import('pages/Login/LogIn.vue') }
=======
      { path: '', component: () => import('pages/LogIn.vue') }
>>>>>>> 1bd70085fa073c413944d85adcbf72d6c536570d
    ]
  },
  {
    path: '/signup',
    component: () => import('layouts/MainLayout.vue'),
    children: [
<<<<<<< HEAD
      { path: '', component: () => import('pages/Login/SignUp.vue') }
=======
      { path: '', component: () => import('pages/SignUp.vue') }
>>>>>>> 1bd70085fa073c413944d85adcbf72d6c536570d
    ]
  },
  {
    path: '/findpassword',
    component: () => import('layouts/MainLayout.vue'),
    children: [
<<<<<<< HEAD
      { path: '', component: () => import('pages/Login/FindPassword.vue') }
=======
      { path: '', component: () => import('pages/FindPassword.vue') }
>>>>>>> 1bd70085fa073c413944d85adcbf72d6c536570d
    ]
  },
  {
    path: '/settingpassword',
    component: () => import('layouts/MainLayout.vue'),
    children: [
<<<<<<< HEAD
      { path: '', component: () => import('pages/Login/SettingPassword.vue') }
=======
      { path: '', component: () => import('pages/SettingPassword.vue') }
>>>>>>> 1bd70085fa073c413944d85adcbf72d6c536570d
    ]
  },
  {
    path: '/mypage',
    component: () => import('layouts/MainLayout.vue'),
    children: [
<<<<<<< HEAD
      { path: '', component: () => import('pages/MyPage/MyPage.vue') }
    ]
  },
  {
    path: '/userInfo',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/MyPage/UserInfo.vue') }
    ]
  },


  {
    path: '/orderInfo',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/MyPage/OrderInfo.vue') }
    ]
  },
  {
    path: '/writinginfo',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/MyPage/WritingInfo.vue') }
    ]
  },
  {
    path: '/likeinfo',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/MyPage/LikeInfo.vue') }
    ]
  },
  
  {
    path: '/shop',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Shop/Shop.vue') }
=======
      { path: '', component: () => import('pages/MyPage.vue') }
    ]
  },
  {
    path: '/shop',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Shop.vue') }
>>>>>>> 1bd70085fa073c413944d85adcbf72d6c536570d
    ]
  },
  {
    path: '/register',
    component: () => import('layouts/MainLayout.vue'),
    children: [
<<<<<<< HEAD
      { path: '', component: () => import('pages/Shop/Register.vue') }
=======
      { path: '', component: () => import('pages/Register.vue') }
>>>>>>> 1bd70085fa073c413944d85adcbf72d6c536570d
    ]
  },

  {
    path: '/cart1',
    component: () => import('layouts/MainLayout.vue'),
    children: [
<<<<<<< HEAD
      { path: '', component: () => import('pages/Cart/Cart1.vue') }
=======
      { path: '', component: () => import('pages/Cart1.vue') }
>>>>>>> 1bd70085fa073c413944d85adcbf72d6c536570d
    ]
  },
  {
    path: '/cart2',
    component: () => import('layouts/MainLayout.vue'),
    children: [
<<<<<<< HEAD
      { path: '', component: () => import('pages/Cart/Cart2.vue') }
=======
      { path: '', component: () => import('pages/Cart2.vue') }
>>>>>>> 1bd70085fa073c413944d85adcbf72d6c536570d
    ]
  },
  {
    path: '/cart3',
    component: () => import('layouts/MainLayout.vue'),
    children: [
<<<<<<< HEAD
      { path: '', component: () => import('pages/Cart/Cart3.vue') }
    ]
  },
  {
    path: '/detail',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/FoodDetail.vue') }
    ]
  },

=======
      { path: '', component: () => import('pages/Cart3.vue') }
    ]
  },
>>>>>>> 1bd70085fa073c413944d85adcbf72d6c536570d
  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes
