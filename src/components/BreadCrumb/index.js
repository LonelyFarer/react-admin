import React from 'react'
import './index.less'
import { Link, withRouter } from "react-router-dom"
import { Breadcrumb, Col, Row } from "antd"
const breadcrumbNameMap = {//跟路由路径保持一致
  '/admin/home': "首页",
  "/admin/history": "追溯起源",
  "/admin/manage_blog": "日漫",
  "/admin/manage_blog/classic": "经典动漫",
  "/admin/manage_blog/warmBlood": "热血",
  "/admin/manage_blog/campus": "校园",
  "/admin/manage_blog/magic": "魔法",
  "/admin/manage_blog/move_blog": "博客搬家",
  "/admin/manage_blog/reward_blog": "博客打赏",
  "/admin/manage_blog/setting_blog": "博客设置",
  "/admin/manage_blog/card": "博客名片",
  "/admin/statistics": "国漫",
  "/admin/statistics/classic": "经典动漫",
  "/admin/statistics/warmBlood": "热血",
  "/admin/statistics/campus": "校园",
  "/admin/statistics/magic": "魔法",
  "/admin/periphery": "周边手办",
  "/admin/createActivity": "创作活动",
  "/admin/user": "用户中心",
  "/admin/leavingMessage": "留言中心",
  "/admin/manage_echarts": "图表数据",
  "/admin/manage_echarts/bar": "柱形图",
  "/admin/manage_echarts/pie": "饼图",
  "/admin/manage_echarts/line": "折线图",
  "/admin/rich": "富文本编辑器",
  "/admin/permission": '权限设置',

}

const Nav = withRouter((props) => {
  const { location } = props
  const pathSnippets = location.pathname.split("/").filter((i) => i)

  const extraBreadcrumbItems = pathSnippets.map((_, index) => {
    const url = `/${pathSnippets.slice(0, index + 1).join("/")}`
    return (
      <Breadcrumb.Item key={url}>
        <Link to={url}></Link>
        {breadcrumbNameMap[url]}
      </Breadcrumb.Item>
    )
  })
  var eArr = extraBreadcrumbItems.slice(1)
  const breadcrumbItems = [
    <Breadcrumb.Item key="home"></Breadcrumb.Item>
  ].concat(eArr)
  return (
    <div className="demo">
      <Breadcrumb>
        {breadcrumbItems}
      </Breadcrumb>
    </div>
  )
})

class index extends React.Component {
  render () {
    return (

      <div className="breadcrumb">
        <div className="breadcrumb-title">
          <Nav></Nav>
        </div>
      </div>

    )
  }

}
export default index