import React from 'react'
import { Col, Row } from 'antd'
import NavLeft from './components/NavLeft'
import BreadCrumb from './components/BreadCrumb'
import Header from './components/Header'
import Fonter from './components/Footer'
import Util from './utils/utils'
import './style/common.less'

class Admin extends React.Component {
  constructor (props) {
    super(props)
    this.state = {

    }
  }

  // 验证是否登录了
  componentDidMount () {
    if (Util.getStorage("userInfo") == "") {
      window.location.href = ('/')
    }
  }

  render () {
    return (
      <div className="container">
        <Header />
        <div className="main">

          <div className="nav-left">
            <NavLeft />
          </div>
          <div className="content" justify="center">
            <BreadCrumb />
            <div className="mainContent">{this.props.children}</div>
            <div className="footer"><Fonter /></div>
          </div>


        </div>
      </div>
    )
  }
}

export default Admin