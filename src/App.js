import React, { Component } from 'react';
import './App.css';
import { Route } from 'react-router-dom';
import Home from './Pages/Home'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer';
import MovieDetail from './Pages/MovieDetail';
import LoginPage from './Pages/Login';
import Register from './Pages/Register';
import { connect } from 'react-redux';
import Axios from 'axios';
import { API_URL } from './support/API_URL';
import { Login } from './Redux/Action'
import SeatReservation from './Pages/SeatReservation';
import Admin from './Pages/Admin';


class App extends Component {
  componentDidMount(){
    let username = localStorage.getItem('username')
    if(username){
      Axios.get(API_URL + `/users?username=${username}`)
      .then((res) => {
        this.props.Login(res.data[0])
      })
    }
  }
  render(){
    return (
      <div>
      <Navbar/>
      <Route path='/' component={Home} exact/>
      <Route path='/movie-detail' component={MovieDetail}/>
      <Route path='/login' component={LoginPage} />
      <Route path='/register' component={Register} />
      <Route path='/reservation' component={SeatReservation} />
      <Route path='/admin' component={Admin} />
      <Footer/>
    </div>
  );
}
}

export default connect(null, { Login })(App);
