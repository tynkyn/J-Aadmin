import Vue from 'vue'
import Router from 'vue-router'

const _import = require('./_import_' + process.env.NODE_ENV)
// in development-env not use lazy-loading, because lazy-loading too many pages will cause webpack hot update too slow. so only in production use lazy-loading;
// detail: https://panjiachen.github.io/vue-element-admin-site/#/lazy-loading

Vue.use(Router)

/* Layout */
import Layout from '../views/layout/Layout'

/** note: submenu only apppear when children.length>=1
 *   detail see  https://panjiachen.github.io/vue-element-admin-site/#/router-and-nav?id=sidebar
 **/

/**
 * hidden: true                   if `hidden:true` will not show in the sidebar(default is false)
 * alwaysShow: true               if set true, will always show the root menu, whatever its child routes length
 *                                if not set alwaysShow, only more than one route under the children
 *                                it will becomes nested mode, otherwise not show the root menu
 * redirect: noredirect           if `redirect:noredirect` will no redirct in the breadcrumb
 * name:'router-name'             the name is used by <keep-alive> (must set!!!)
 * meta : {
    roles: ['admin','editor']     will control the page roles (you can set multiple roles)
    title: 'title'               the name show in submenu and breadcrumb (recommend set)
    icon: 'svg-name'             the icon show in the sidebar,
    noCache: true                if true ,the page will no be cached(default is false)
  }

   //当设置 true 的时候该路由不会再侧边栏出现 如401，login等页面(默认 false)
   hidden: true

   //当设置 noredirect 的时候该路由不会在面包屑导航中出现
   redirect: noredirect

   //当设置 true 的时候永远会显示根菜单，不设置的情况下只有当子路由个数大于一个时才会显示根菜单
   //当你一个路由下面的 children 声明的路由大于1个时，自动会变成嵌套的模式。只有一个时会将那个子路由当做根路由
   alwaysShow: true

   name:'router-name'            //设定路由的名字，一定要填写不然 使用 <keep-alive> 时会出现各种问题
   meta : {
    roles: ['admin','editor']   //设置该路由进入的权限，支持多个权限叠加
    title: 'title'              //设置该路由在侧边栏和面包屑中展示的名字
    icon: 'svg-name'            //设置该路由的图标
    noCache: true               //如果设置为true ,则不会被 <keep-alive> 缓存(默认 false)
  }
 **/
export const constantRouterMap = [
  { path: '/login', component: _import('login/index'), hidden: true },
  { path: '/authredirect', component: _import('login/authredirect'), hidden: true },
  { path: '/404', component: _import('errorPage/404'), hidden: true },
  { path: '/401', component: _import('errorPage/401'), hidden: true },
  {
    path: '/',
    component: Layout,
    redirect: '/dashboard',
    name: '首页',
    hidden: true,
    children: [{
      path: 'dashboard',
      component: _import('dashboard/index')
    }]
  },
  {
    path: '/introduction',
    component: Layout,
    redirect: '/introduction/index',
    icon: 'form',
    noDropdown: true,
    children: [{
      path: 'index',
      component: _import('introduction/index'),
      name: '简述'
    }]
  }
]

export default new Router({
  // mode: 'history', // require service support
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRouterMap
})

export const asyncRouterMap = [
  // {
  //   path: '/permission',
  //   component: Layout,
  //   redirect: '/permission/index',
  //   meta: { roles: ['admin'] }, // you can set roles in root nav
  //   authority: 'permission',
  //   children: [{
  //     path: 'index',
  //     component: _import('permission/index'),
  //     name: 'permission',
  //     authority: 'index',
  //     meta: {
  //       title: 'permission',
  //       icon: 'lock',
  //       roles: ['admin'] // or you can only set roles in sub nav
  //     }
  //   }]
  // },

  {
    path: '/baseManager',
    component: Layout,
    name: '基础配置管理',
    icon: 'setting',
    authority: 'baseManager',
    children: [{
      path: 'userManager',
      icon: 'fa-user',
      component: _import('admin/user/index'),
      name: '用户管理',
      authority: 'userManager'
    }, {
      path: 'menuManager',
      icon: 'category',
      component: _import('admin/menu/index'),
      name: '菜单管理',
      authority: 'menuManager'
    }, {
      path: 'groupManager',
      icon: 'group_fill',
      component: _import('admin/group/index'),
      name: '角色权限管理',
      authority: 'groupManager'
    }, {
      path: 'groupTypeManager',
      icon: 'fa-users',
      component: _import('admin/groupType/index'),
      name: '角色类型管理',
      authority: 'groupTypeManager'
    }, {
      path: 'gateLogManager',
      icon: 'viewlist',
      component: _import('admin/gateLog/index'),
      name: '操作日志管理',
      authority: 'gateLogManager'
    }]
  },

  {
    path: '/icon',
    component: Layout,
    name: '图标管理',
    icon: 'icon',
    authority: 'iconManager',
    children: [{
      path: 'index',
      component: _import('svg-icons/index'),
      noCache: true,
      title: '图标管理',
      authority: 'iconManager'
    }]
  }
  /*
    {
      path: '/components',
      component: Layout,
      redirect: 'noredirect',
      name: 'component-demo',
      meta: {
        title: 'components',
        icon: 'component'
      },
      children: [
        { path: 'tinymce', component: _import('components-demo/tinymce'), name: 'tinymce-demo', meta: { title: 'tinymce' }},
        {
          path: 'markdown',
          component: _import('components-demo/markdown'),
          name: 'markdown-demo',
          meta: { title: 'markdown' }
        },
        {
          path: 'json-editor',
          component: _import('components-demo/jsonEditor'),
          name: 'jsonEditor-demo',
          meta: { title: 'jsonEditor' }
        },
        { path: 'dnd-list', component: _import('components-demo/dndList'), name: 'dndList-demo', meta: { title: 'dndList' }},
        {
          path: 'splitpane',
          component: _import('components-demo/splitpane'),
          name: 'splitpane-demo',
          meta: { title: 'splitPane' }
        },
        {
          path: 'avatar-upload',
          component: _import('components-demo/avatarUpload'),
          name: 'avatarUpload-demo',
          meta: { title: 'avatarUpload' }
        },
        {
          path: 'dropzone',
          component: _import('components-demo/dropzone'),
          name: 'dropzone-demo',
          meta: { title: 'dropzone' }
        },
        { path: 'sticky', component: _import('components-demo/sticky'), name: 'sticky-demo', meta: { title: 'sticky' }},
        { path: 'count-to', component: _import('components-demo/countTo'), name: 'countTo-demo', meta: { title: 'countTo' }},
        {
          path: 'mixin',
          component: _import('components-demo/mixin'),
          name: 'componentMixin-demo',
          meta: { title: 'componentMixin' }
        },
        {
          path: 'back-to-top',
          component: _import('components-demo/backToTop'),
          name: 'backToTop-demo',
          meta: { title: 'backToTop' }
        }
      ]
    },

    {
      path: '/charts',
      component: Layout,
      redirect: 'noredirect',
      name: 'charts',
      meta: {
        title: 'charts',
        icon: 'chart'
      },
      children: [
        {
          path: 'keyboard',
          component: _import('charts/keyboard'),
          name: 'keyboardChart',
          meta: { title: 'keyboardChart', noCache: true }
        },
        { path: 'line', component: _import('charts/line'), name: 'lineChart', meta: { title: 'lineChart', noCache: true }},
        {
          path: 'mixchart',
          component: _import('charts/mixChart'),
          name: 'mixChart',
          meta: { title: 'mixChart', noCache: true }
        }
      ]
    },

    {
      path: '/example',
      component: Layout,
      redirect: '/example/table/complex-table',
      name: 'example',
      meta: {
        title: 'example',
        icon: 'example'
      },
      children: [
        {
          path: '/example/table',
          component: _import('example/table/index'),
          redirect: '/example/table/complex-table',
          name: 'Table',
          meta: {
            title: 'Table',
            icon: 'table'
          },
          children: [
            {
              path: 'dynamic-table',
              component: _import('example/table/dynamicTable/index'),
              name: 'dynamicTable',
              meta: { title: 'dynamicTable' }
            },
            {
              path: 'drag-table',
              component: _import('example/table/dragTable'),
              name: 'dragTable',
              meta: { title: 'dragTable' }
            },
            {
              path: 'inline-edit-table',
              component: _import('example/table/inlineEditTable'),
              name: 'inlineEditTable',
              meta: { title: 'inlineEditTable' }
            },
            {
              path: 'tree-table',
              component: _import('example/table/treeTable/treeTable'),
              name: 'treeTableDemo',
              meta: { title: 'treeTable' }
            },
            {
              path: 'custom-tree-table',
              component: _import('example/table/treeTable/customTreeTable'),
              name: 'customTreeTableDemo',
              meta: { title: 'customTreeTable' }
            },
            {
              path: 'complex-table',
              component: _import('example/table/complexTable'),
              name: 'complexTable',
              meta: { title: 'complexTable' }
            }
          ]
        },
        { path: 'tab/index', icon: 'tab', component: _import('example/tab/index'), name: 'tab', meta: { title: 'tab' }}
      ]
    },

    {
      path: '/form',
      component: Layout,
      redirect: 'noredirect',
      name: 'form',
      meta: {
        title: 'form',
        icon: 'form'
      },
      children: [
        {
          path: 'create-form',
          component: _import('form/create'),
          name: 'createForm',
          meta: { title: 'createForm', icon: 'table' }
        },
        { path: 'edit-form', component: _import('form/edit'), name: 'editForm', meta: { title: 'editForm', icon: 'table' }}
      ]
    },

    {
      path: '/error',
      component: Layout,
      redirect: 'noredirect',
      name: 'errorPages',
      meta: {
        title: 'errorPages',
        icon: '404'
      },
      children: [
        { path: '401', component: _import('errorPage/401'), name: 'page401', meta: { title: 'page401', noCache: true }},
        { path: '404', component: _import('errorPage/404'), name: 'page404', meta: { title: 'page404', noCache: true }}
      ]
    },

    {
      path: '/error-log',
      component: Layout,
      redirect: 'noredirect',
      children: [{
        path: 'log',
        component: _import('errorLog/index'),
        name: 'errorLog',
        meta: { title: 'errorLog', icon: 'bug' }
      }]
    },

    {
      path: '/excel',
      component: Layout,
      redirect: '/excel/export-excel',
      name: 'excel',
      meta: {
        title: 'excel',
        icon: 'excel'
      },
      children: [
        {
          path: 'export-excel',
          component: _import('excel/exportExcel'),
          name: 'exportExcel',
          meta: { title: 'exportExcel' }
        },
        {
          path: 'export-selected-excel',
          component: _import('excel/selectExcel'),
          name: 'selectExcel',
          meta: { title: 'selectExcel' }
        },
        { path: 'upload-excel', component: _import('excel/uploadExcel'), name: 'uploadExcel', meta: { title: 'uploadExcel' }}
      ]
    },

    {
      path: '/zip',
      component: Layout,
      redirect: '/zip/download',
      alwaysShow: true,
      meta: { title: 'zip', icon: 'zip' },
      children: [{ path: 'download', component: _import('zip/index'), name: 'exportZip', meta: { title: 'exportZip' }}]
    },

    {
      path: '/theme',
      component: Layout,
      redirect: 'noredirect',
      children: [{ path: 'index', component: _import('theme/index'), name: 'theme', meta: { title: 'theme', icon: 'theme' }}]
    },

    {
      path: '/clipboard',
      component: Layout,
      redirect: 'noredirect',
      children: [{
        path: 'index',
        component: _import('clipboard/index'),
        name: 'clipboardDemo',
        meta: { title: 'clipboardDemo', icon: 'clipboard' }
      }]
    },

    {
      path: '/i18n',
      component: Layout,
      children: [{
        path: 'index',
        component: _import('i18n-demo/index'),
        name: 'i18n',
        meta: { title: 'i18n', icon: 'international' }
      }]
    },*/

]
