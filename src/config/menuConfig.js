const menuList = [
  {
    title: "首页",
    key: '/admin/home'
  },
  {
    title: "追溯起源",
    key: "/admin/publish_articles"
  },
  {
    title: "日漫",
    key: "/admin/manage_blog",
    children: [
      {
        title: "经典动漫",
        key: "/admin/manage_blog/manage_articles"
      },
      {
        title: "热血",
        key: "/admin/manage_blog/manage_comment"
      },
      {
        title: "校园",
        key: "/admin/manage_blog/manage_column"
      },
      {
        title: "魔法",
        key: "/admin/manage_blog/subscribe_column"
      },
    ]
  },
  {
    title: "国漫",
    key: "/admin/statistics",
    children: [
      {
        title: "经典动漫",
        key: "/admin/manage_blog/manage_articles"
      },
      {
        title: "热血",
        key: "/admin/manage_blog/manage_comment"
      },
      {
        title: "校园",
        key: "/admin/manage_blog/manage_column"
      },
      {
        title: "魔法",
        key: "/admin/manage_blog/subscribe_column"
      },
    ]
  },
  {
    title: "周边手办",
    key: "/admin/manage_download"
  },
  {
    title: "创作活动",
    key: "/admin/activities"
  },
  {
    title: "用户中心",
    key: "/admin/user_info"
  },
  {
    title: "留言中心",
    key: "/admin/manage_user"
  },
  {
    title: "图表数据",
    key: "/admin/manage_echarts",
    children: [
      {
        title: "柱形图",
        key: "/admin/manage_echarts/bar"
      },
      {
        title: "饼图",
        key: "/admin/manage_echarts/pie"
      },
      {
        title: "折线图",
        key: "/admin/manage_echarts/line"
      }
    ]
  },
  {
    title: "富文本编辑器",
    key: "/admin/rich"
  },
  {
    title: '权限设置',
    key: "/admin/permission"
  }
]

export default menuList