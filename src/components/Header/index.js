import React from 'react'
import { Col, Row } from 'antd'
import './index.less'
import Util from '../../utils/utils'
import axios from '../../axios'

class index extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      userName: Util.getStorage("userInfo").username || ''
    }
  }

  // 退出登录
  onLogout = () => {
    Util.removeStorage("userInfo")
    window.location.href = ('/')
  }

  render () {
    return (
      <div className="header">
        <Row className="header-top">
          <Col span="24">
            <div className="logo">
              <img src="/assets/logo-ant.svg" alt="" />
              <h1>动漫人生</h1>
            </div>

            <span>欢迎，{this.state.userName}</span>
            <a onClick={this.onLogout}>退出</a>
          </Col>
        </Row>


      </div>
    )
  }
}

export default index