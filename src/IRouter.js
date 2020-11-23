import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import App from './App'
import Admin from './Admin'
import Home from './pages/home'
import NotMatch from './pages/NotMatch'
import Login from './pages/login'
import User from './pages/user'
import Bar from './pages/echarts/bar'
import Pie from './pages/echarts/pie'
import Line from './pages/echarts/line'
import Rich from './pages/rich'
import Permission from './pages/permission'
import LeavingMessage from './pages/leavingMessage'
import Periphery from './pages/periphery'
import CreateActivity from './pages/createActivity'
import History from './pages/history'
import Classic from './pages/jpAnime/classic'
import Campus from './pages/jpAnime/campus'
import WarmBlood from './pages/jpAnime/warmBlood'
import Magic from './pages/jpAnime/magic'

import Cnclassic from './pages/cnAnime/classic'
import Cncampus from './pages/cnAnime/campus'
import CnwarmBlood from './pages/cnAnime/warmBlood'
import Cnmagic from './pages/cnAnime/magic'
class IRouter extends React.Component {
  constructor (props) {
    super(props)
    this.state = {

    }
  }
  render () {
    return (
      <BrowserRouter>
        <App>
          <Route exact path="/">
            <Login />
          </Route>
          <Route path="/admin" render={() =>
            <Admin>
              <Switch>
                <Route path="/admin/home">
                  <Home />
                </Route>
                <Route path="/admin/user">
                  <User />
                </Route>
                <Route path="/admin/periphery">
                  <Periphery />
                </Route>
                <Route path="/admin/createActivity">
                  <CreateActivity />
                </Route>
                <Route path="/admin/history">
                  <History />
                </Route>
                <Route path="/admin/leavingMessage">
                  <LeavingMessage />
                </Route>

                <Route path="/admin/manage_blog/classic">
                  <Classic />
                </Route>
                <Route path="/admin/manage_blog/magic">
                  <Magic />
                </Route>
                <Route path="/admin/manage_blog/campus">
                  <Campus />
                </Route>
                <Route path="/admin/manage_blog/warmBlood">
                  <WarmBlood />
                </Route>

                <Route path="/admin/statistics/classic">
                  <Cnclassic />
                </Route>
                <Route path="/admin/statistics/magic">
                  <Cnmagic />
                </Route>
                <Route path="/admin/statistics/campus">
                  <Cncampus />
                </Route>
                <Route path="/admin/statistics/warmBlood">
                  <CnwarmBlood />
                </Route>

                <Route path="/admin/manage_echarts/bar">
                  <Bar />
                </Route>
                <Route path="/admin/manage_echarts/pie">
                  <Pie />
                </Route>
                <Route path="/admin/manage_echarts/line">
                  <Line />
                </Route>
                <Route path="/admin/rich">
                  <Rich />
                </Route>
                <Route path="/admin/permission">
                  <Permission />
                </Route>
                <Route >
                  <NotMatch />
                </Route>
              </Switch>
            </Admin>
          }>
          </Route>
        </App>
      </BrowserRouter>
    )
  }
}

export default IRouter