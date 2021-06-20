import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import './styles/main.scss'
import Header from './components/Header'
import HomePage from './pages/HomePage'
import Workout from './pages/Workout'
import Footer from './components/Footer'

function App() {
  return (
    <>
      <Header />
      <Router>
        <Switch>
          <Route path='/workout' component={Workout} exact />
          <Route path='/' component={HomePage} exact />
        </Switch>
      </Router>
      <Footer />
    </>
  )
}

export default App
