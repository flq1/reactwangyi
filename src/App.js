import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'
import Footer from './components/Footer/index'
import Home from './components/Home/index'
import Classification from './components/Classification/index'
import Buy from './components/Buy/index'
import Cart from './components/Cart/index'
import Personal from './components/Personal/index'

class App extends Component {
  render () {
    return <div className="cls">
      <Router>
        <Switch>
          <Route path="/home" component={Home} />
          <Route path="/buy" component={Buy} />
          <Route path="/classification" component={Classification} />
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