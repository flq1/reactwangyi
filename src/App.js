import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'
import Footer from './components/Footer/index'
import Home from './components/Home/index'
import Classification from './components/Classification/index'
import Buy from './components/Buy/index'
import Cart from './components/Cart/index'
import Personal from './components/Personal/index'
import './index.stylus'
import './rem'
class App extends Component {
  render () {
    return <div className="cls">
      <Router>
        <Switch>
          <Route path="/home" component={Home} />
          <Route path="/buy" component={Classification} />
          <Route path="/classification" component={Buy} />
          <Route path="/cart" component={Cart} />
          <Route path="/personal" component={Personal} />
          <Redirect to="/home" />
        </Switch>
        <Footer />
      </Router>

    </div>

  }
}
export default App