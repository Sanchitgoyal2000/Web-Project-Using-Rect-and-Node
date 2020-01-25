import React,{Component} from 'react';
import Navbar from './components/navbar.js'
import './App.css';
import Addevent from './components/addEvents.js'
import {Switch,BrowserRouter,Route, Redirect} from 'react-router-dom';
import Main from './components/mainPage.js';
import Booking from './components/booking.js';
import Hotels from './components/hotels.js';
import AddToCart from './components/addToCart.js';
import Reviews from './components/reviews.js';
import SignUp from './components/signUp.js';
import Login from './components/login.js';
import  MapContainer  from './components/map.js';
import  FooterPage from './components/Footer.js';
import  Eventfilter from './components/eventfilter.jsx';
import  About from './components/About.jsx';
class App extends Component
{
  constructor()
  {
    super();
    this.state=(
      {
        events:[],
        cityEvents:[],
        loggedIn:false
      }
    )
    this.add=this.add.bind(this);
    this.selectEve=this.selectEve.bind(this);
    this.addToCart=this.addToCart.bind(this);
  }

  componentDidMount()
  {
      fetch(' http://localhost:5000/event/')
      .then(res => {return res.json()})
      .then(res => {
          //  console.log(JSON.stringify(res));
           this.setState({events:res});
                    }
          )
  }
  selectEve(event){
    // console.log(event);
    this.setState({selectedEvent:event})
  }
  addToCart(event){
    //console.log("++++");
    //console.log(event);
    this.setState({carteve:event})
  //  this.setState(
  //    {
  //      cityEvents : this.state.cityEvents.push(event),
  //    }
  //  )
  // console.log(this.state.cityEvents);
  }
  add(data)
  {
    // console.log(data);
      this.state.events.push(data);
      fetch('http://localhost:5000/event/add',
      {
        method: "POST",
          headers:{  "Content-Type":"application/json",  },
            body:JSON.stringify(data),
      } )
      .then( res => {
            if(res.ok)
              return res.json() 
        } )
      .then( res => {
            console.log(JSON.stringify(res));
        } )
  }

  render()
  {
    return (
    <div>
      <BrowserRouter>
         
             <div className="row">
                <div className="col">
                   <Navbar/>
                </div>
             </div>
        <Switch>
        <Route exact path = "/" render={()=><Main events={this.state.events} selectEvent={this.selectEve}/>}/> 
        {/* <Route path = "/add" render={ () => this.state.loggedIn?(<Addevent onAdd = { this.add }> </Addevent>):
              (<Redirect to="/login"></Redirect>)
              }/> */}
        <Route path = "/add" render={ () => <Addevent onAdd = { this.add }> </Addevent>}/>
        <Route path="/booking" render={()=><Booking event={this.state.selectedEvent} cartEve={this.addToCart}></Booking>}/>
        <Route path="/hotel" render={()=><Hotels></Hotels>}/>
        <Route path="/reviews" render={()=><Reviews></Reviews>}/>
        <Route path="/goToCart" render={()=><AddToCart eve={this.state.carteve}></AddToCart>}/>
         <Route path="/signUp" render={()=><SignUp></SignUp>}/>
         <Route path="/login" render={()=><Login logIn={(e)=>this.state.loggedIn=e}></Login>}/>  
         <Route path="/maps" render={()=><MapContainer></MapContainer>}/>
         <Route path="/filter" render={()=><Eventfilter></Eventfilter>}/>
         <Route path="/about" render={()=><About></About>}/>
        </Switch>
        <Route path="/footer" render={()=><FooterPage></FooterPage>}/>
      </BrowserRouter>
      <FooterPage/>
    </div>
  )
  }
}


export default App;
