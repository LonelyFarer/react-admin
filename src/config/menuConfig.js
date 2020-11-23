const menuList = [
  {
    title: "首页",
    key: '/admin/home'
  },
  {
    title: "追溯起源",
    key: "/admin/history"
  },
  {
    title: "日漫",
    key: "/admin/manage_blog",
    children: [
      {
        title: "经典动漫",
        key: "/admin/manage_blog/classic"
      },
      {
        title: "热血",
        key: "/admin/manage_blog/warmBlood"
      },
      {
        title: "校园",
        key: "/admin/manage_blog/campus"
      },
      {
        title: "魔法",
        key: "/admin/manage_blog/magic"
      },
    ]
  },
  {
    title: "国漫",
    key: "/admin/statistics",
    children: [
      {
        title: "经典动漫",
        key: "/admin/statistics/classic"
      },
      {
        title: "热血",
        key: "/admin/statistics/warmBlood"
      },
      {
        title: "校园",
        key: "/admin/statistics/campus"
      },
      {
        title: "魔法",
        key: "/admin/statistics/magic"
      },
    ]
  },
  {
    title: "周边手办",
    key: "/admin/periphery"
  },
  {
    title: "创作活动",
    key: "/admin/createActivity"
  },
  {
    title: "用户中心",
    key: "/admin/user"
  },
  {
    title: "留言中心",
    key: "/admin/leavingMessage"
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