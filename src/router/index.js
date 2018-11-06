import Vue from 'vue'
import Router from 'vue-router'
import container from '../components/container'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/index'
    },
    {
      path: '/login',
      component: resolve => require(['../pages/login.vue'], resolve),
      meta: { title: '登录' },
      collapse:false,
      visible:true,
    },
    {
      path: '/',
      component: container,
      collapse:false,
      visible:true,
      meta: { title: '首页' },
      children:[
        {
          path: 'index',
          component: resolve => require(['../pages/Index.vue'], resolve),
          meta: { title: '首页' },
          visible:false,
         },
//       {
//        path: 'message',
//        component: resolve => require(['../pages/message.vue'], resolve),
//        meta: { title: '消息中心' },
//        visible:false,
//       },
      ]
    },
    {
      path: '/',
      component: container,
      collapse:true,
      visible:false,
      meta: { title: '新财税管理' },
      children:[
        {
          path: 'accOrderList',
          component: resolve => require(['../pages/account/accOrderList.vue'], resolve),
          meta: { title: '新财税订单管理' },
          visible:false,
        },
        {
          path: 'accOrderDetail',
          component: resolve => require(['../pages/account/accOrderDetail.vue'], resolve),
          meta: { title: '新财税订单详情' },
          visible:false,
        },
        {
          path: 'accDispatchList',
          component: resolve => require(['../pages/account/accDispatchList.vue'], resolve),
          meta: { title: '新财税派单列表' },
          visible:false,
        },
        {
          path: 'accDispatchExamine',
          component: resolve => require(['../pages/account/accDispatchExamine.vue'], resolve),
          meta: { title: '新财税派单审核' },
          visible:false,
        },
        {
          path: 'accDispatchDetail',
          component: resolve => require(['../pages/account/accDispatchDetail.vue'], resolve),
          meta: { title: '新财税派单详情' },
          visible:false,
        },
        {
          path: 'accDispatchChange',
          component: resolve => require(['../pages/account/accDispatchChange.vue'], resolve),
          meta: { title: '新财税改派单详情' },
          visible:false,
        },
      ]
    },
    {
      path: '/',
      component: container,
      collapse:true,
      visible:false,
      meta: { title: '渠道管理' },
      children:[
        {
          path: 'chaChannelDealer',
          component: resolve => require(['../pages/channel/chaChannelDealer.vue'], resolve),
          meta: { title: '渠道管理渠道商列表' },
          visible:false,
        },
        {
          path: 'chaMerchantDetail',
          component: resolve => require(['../pages/channel/chaMerchantDetail.vue'], resolve),
          meta: { title: '渠道管理商户档案' },
          visible:false,
        },
        {
          path: 'chaMerchantList',
          component: resolve => require(['../pages/channel/chaMerchantList.vue'], resolve),
          meta: { title: '渠道管理商户列表' },
          visible:false,
        },
        {
          path: 'chaOrderDetail',
          component: resolve => require(['../pages/channel/chaOrderDetail.vue'], resolve),
          meta: { title: '渠道管理订单详情' },
          visible:false,
        },
        {
          path: 'chaOrderList',
          component: resolve => require(['../pages/channel/chaOrderList.vue'], resolve),
          meta: { title: '渠道管理订单列表' },
          visible:false,
        },
        {
          path: 'chaUserBlack',
          component: resolve => require(['../pages/channel/chaUserBlack.vue'], resolve),
          meta: { title: '渠道管理用户黑名单' },
          visible:false,
        },
        {
          path: 'chaUserBrowse',
          component: resolve => require(['../pages/channel/chaUserBrowse.vue'], resolve),
          meta: { title: '渠道管理用户浏览记录' },
          visible:false,
        },
        {
          path: 'chaUserCollection',
          component: resolve => require(['../pages/channel/chaUserCollection.vue'], resolve),
          meta: { title: '渠道管理用户收藏' },
          visible:false,
        },
        {
          path: 'chaUserDetail',
          component: resolve => require(['../pages/channel/chaUserDetail.vue'], resolve),
          meta: { title: '渠道管理用户档案' },
          visible:false,
        },
        {
          path: 'chaUserIntegral',
          component: resolve => require(['../pages/channel/chaUserIntegral.vue'], resolve),
          meta: { title: '渠道管理用户积分流水' },
          visible:false,
        },
        {
          path: 'chaUserList',
          component: resolve => require(['../pages/channel/chaUserList.vue'], resolve),
          meta: { title: '渠道管理用户列表' },
          visible:false,
        },
        {
          path: 'chaUserRecommend',
          component: resolve => require(['../pages/channel/chaUserRecommend.vue'], resolve),
          meta: { title: '渠道管理用户推荐的人' },
          visible:false,
        },
        {
          path: 'chaYkList',
          component: resolve => require(['../pages/channel/chaYkList.vue'], resolve),
          meta: { title: '渠道管理查看员工查看客户' },
          visible:false,
        },
      ]
    },
    {
      path: '/',
      component: container,
      collapse:true,
      visible:false,
      meta: { title: '客户管理' },
      children:[
        {
          path: 'customerDetail',
          component: resolve => require(['../pages/customer/customerDetail.vue'], resolve),
          meta: { title: '客户管理用户详情' },
          visible:false,
        },
        {
          path: 'customerIntegralDetail',
          component: resolve => require(['../pages/customer/customerIntegralDetail.vue'], resolve),
          meta: { title: '客户管理用户积分详情页' },
          visible:false,
        },
        {
          path: 'customerIntegralList',
          component: resolve => require(['../pages/customer/customerIntegralList.vue'], resolve),
          meta: { title: '客户管理客户积分列表' },
          visible:false,
        },
        {
          path: 'customerList',
          component: resolve => require(['../pages/customer/customerList.vue'], resolve),
          meta: { title: '用户列表' },
          visible:false,
        },
        {
          path: 'customerRecommend',
          component: resolve => require(['../pages/customer/customerRecommend.vue'], resolve),
          meta: { title: '客户管理用户推荐的人' },
          visible:false,
        },
      ]
    },
    {
      path: '/',
      component: container,
      collapse:true,
      visible:false,
      meta: { title: '伙伴管理' },
      children:[
        {
          path: 'addPartner',
          component: resolve => require(['../pages/partner/addPartner.vue'], resolve),
          meta: { title: '伙伴管理新增伙伴' },
          visible:false,
        },
        {
          path: 'business',
          component: resolve => require(['../pages/partner/business.vue'], resolve),
          meta: { title: '商户业务管理' },
          visible:false,
        },
        {
          path: 'customerList',
          component: resolve => require(['../pages/partner/customerList.vue'], resolve),
          meta: { title: '伙伴管理伙伴查看客户' },
          visible:false,
        },
        {
          path: 'staffList',
          component: resolve => require(['../pages/partner/staffList.vue'], resolve),
          meta: { title: '伙伴管理伙伴查看员工' },
          visible:false,
        },
        {
          path: 'frozenPartnerList',
          component: resolve => require(['../pages/partner/frozenPartnerList.vue'], resolve),
          meta: { title: '伙伴管理冻结伙伴管理' },
          visible:false,
        },
        {
          path: 'partnerDetail',
          component: resolve => require(['../pages/partner/partnerDetail.vue'], resolve),
          meta: { title: '伙伴管理伙伴详情' },
          visible:false,
        },
        {
          path: 'partnerList',
          component: resolve => require(['../pages/partner/partnerList.vue'], resolve),
          meta: { title: '伙伴管理伙伴列表' },
          visible:false,
        },
        {
          path: 'partnerMoney',
          component: resolve => require(['../pages/partner/partnerMoney.vue'], resolve),
          meta: { title: '伙伴管理伙伴余额' },
          visible:false,
        },
        {
          path: 'partnerMoneyRecord',
          component: resolve => require(['../pages/partner/partnerMoneyRecord.vue'], resolve),
          meta: { title: '伙伴管理伙伴退款、体现' },
          visible:false,
        },
        {
          path: 'partnerReturnList',
          component: resolve => require(['../pages/partner/partnerReturnList.vue'], resolve),
          meta: { title: '伙伴管理伙伴退网记录' },
          visible:false,
        },
        {
          path: 'RetuenDetail',
          component: resolve => require(['../pages/partner/RetuenDetail.vue'], resolve),
          meta: { title: '伙伴管理退网详情（申请、已退）' },
          visible:false,
        },
        {
          path: 'returnCustomer',
          component: resolve => require(['../pages/partner/returnCustomer.vue'], resolve),
          meta: { title: '伙伴管理查看客户' },
          visible:false,
        },
        {
          path: 'returnStaff',
          component: resolve => require(['../pages/partner/returnStaff.vue'], resolve),
          meta: { title: '伙伴管理查看员工' },
          visible:false,
        },
      ]
    },
    {
      path: '/',
      component: container,
      collapse:true,
      visible:false,
      meta: { title: '系统设置' },
      children:[
        {
          path: 'adminManage',
          component: resolve => require(['../pages/setting/adminManage.vue'], resolve),
          meta: { title: '系统设置管理员管理' },
          visible:false,
        },
        {
          path: 'IntegralDetail',
          component: resolve => require(['../pages/setting/IntegralDetail.vue'], resolve),
          meta: { title: '系统设置用户积分详情列表'},
          visible:false,
        },
        {
          path: 'IntegralRecord',
          component: resolve => require(['../pages/setting/IntegralRecord.vue'], resolve),
          meta: { title: '系统设置积分记录' },
          visible:false,
        },
        {
          path: 'IntegralRule',
          component: resolve => require(['../pages/setting/IntegralRule.vue'], resolve),
          meta: { title: '系统设置积分规则' },
          visible:false,
        },
        {
          path: 'roleManage',
          component: resolve => require(['../pages/setting/roleManage.vue'], resolve),
          meta: { title: '系统设置角色管理' },
          visible:false,
        },
        {
          path: 'systemLog',
          component: resolve => require(['../pages/setting/systemLog.vue'], resolve),
          meta: { title: '系统日志' },
          visible:false,
        },
      ]
    },
  ]
})

