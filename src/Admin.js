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
      <Row className="container">
        <Header />
        <Row className="main">

          <Col span={4} className="nav-left">
            <NavLeft />
          </Col>
          <Col span={20} className="content" justify="center">
            <BreadCrumb />
            {this.props.children}
          </Col>

          <Fonter />
        </Row>
      </Row>
    )
  }
}

export default Admin