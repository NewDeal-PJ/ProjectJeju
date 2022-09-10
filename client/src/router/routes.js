
const routes = [
  {
    path: '',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/IndexPage.vue') },
    ]
  },
  {
    path: '/api/login',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Login/LogIn.vue') }
    ]
  },
  {
    path: '/api/logout',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/IndexPage.vue') }
    ]
  },
  {
    path: '/api/signup',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Login/SignUp.vue') }
    ]
  },
  {
    path: '/api/findpassword',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Login/FindPassword.vue') }
    ]
  },
  {
    path: '/api/settingpassword',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Login/SettingPassword.vue') }
    ]
  },
  {
    path: '/api/mypage/:id',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/MyPage/MyPage.vue') }
    ]
  },
  {
    path: '/api/userInfo',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/MyPage/UserInfo.vue') }
    ]
  },


  {
    path: '/api/orderInfo',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/MyPage/OrderInfo.vue') }
    ]
  },
  {
    path: '/api/writinginfo',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/MyPage/WritingInfo.vue') }
    ]
  },
  {
    path: '/api/likeinfo',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/MyPage/LikeInfo.vue') }
    ]
  },

  {
    path: '/api/shop/:id',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Shop/Shop.vue') }
    ]
  },
  {
    path: '/api/shop/register',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Shop/Register.vue') }
    ]
  },

  {
    path: '/api/cart1',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Cart/Cart1.vue') }
    ]
  },
  {
    path: '/api/cart2',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Cart/Cart2.vue') }
    ]
  },
  {
    path: '/api/cart3',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Cart/Cart3.vue') }
    ]
  },
  {
    path: '/detail/:id',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/FoodDetail.vue') }
    ]
  },
  {

    path: '/api/customerservice',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/CustomerService.vue') }
    ]
    },
  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes
