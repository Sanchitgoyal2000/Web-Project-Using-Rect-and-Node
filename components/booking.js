import React,{Component} from 'react';
import eveImg from './event.png'
import '../booking.css';
import {Link} from 'react-router-dom';
import AddToCart from './addToCart';
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';

export default class Booking extends Component{

     constructor(props) {
          super(props);
      
          this.state = {
            stores: [
                    {city:"ambala", latitude: 30.378180, longitude: 76.776695},
                    {city:"kanpur",latitude: 26.449923, longitude: 80.331871},
                    {city:"chandigarh",latitude: 30.741482, longitude: 76.768066 }
                  ]
          }
        }
       
        displayMarkers = () => {
          return this.state.stores.map((store, index) => {
            return <Marker key={index} id={index} position={{
             lat: store.latitude,
             lng: store.longitude
           }}
           onClick={() => console.log("You clicked me!")} />
          })
        }
    render(){
      //  console.log(this.props.event);
      const event=this.props.event;
      var desc=event.description.substring(0,40);
        return(
            <div className="container-fluid" id="div1">
                  <div className="row" >

                        <div className="col-5" style={{padding: "1vw"}} id="bookDiv2">
                            <img src={event.imgUrl} alt="not available" style={{width: "40vw",height: "25vw"}}></img>
                        </div>
                        <div className="col-7" id="bookDiv3">
                             <p className="fnameP">{event.fname}</p>
                             <p style={{fontSize: "1.5vw",fontWeight: "bold"}}>{event.university},{event.city},{event.state}</p>
                             <p style={{fontSize: "2vw",color: "#ffff00"}}>{event.estartdate}-{event.eenddate}</p>
                             <p style={{fontSize: "1.5vw",color: "#ffff00"}}>
                                  <img className="eveImg" src={eveImg} alt="not available" />&nbsp;{event.estarttime}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; -&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                  <img className="eveImg" src={eveImg} alt="not available" />&nbsp;{event.eendtime}
                             </p>
                        </div>
                   </div>

                   <div className="row">
                         <div className="col-7" id="">
                              <p style={{fontSize: "2vw",color: "black"}}>EVENT DESCRIPTION:</p>
                              <p style={{fontSize: "1.5vw",color:"black"}}>{event.description}</p>
                          </div>
                          <div className="col-5" id="" >
                                <p style={{fontSize: "1.5vw"}}>Location:</p>
                               <iframe  style={{width:"100%"}}  ng-src="https://maps.google.com/maps?f=q&amp;source=s_q&amp;hl=en&amp;geocode=&amp;q=IIM, INDORE, Rau - Pithampur Rd, Indore, Madhya Pradesh, India&amp;t=m&amp;z=16&amp;iwloc=A&amp;ll=22.625626,75.79096400000003&amp;output=embed"
                                    src="https://maps.google.com/maps?f=q&amp;source=s_q&amp;hl=en&amp;geocode=&amp;q=IIM, INDORE, Rau - Pithampur Rd, Indore, Madhya Pradesh, India&amp;t=m&amp;z=16&amp;iwloc=A&amp;ll=22.625626,75.79096400000003&amp;output=embed">
                               </iframe>
                               <button><Link to="/hotel" style={{fontSize:"1.5vw",color:"black"}}>Hotels near the location</Link></button>
                           </div>
                    </div>
                   <div className="row">
                         <div className="col p-2" style={{marginLeft: "20vw"}}>
                              <button className="but">BUY NOW</button>
                              <button className="but" onClick={()=>this.props.cartEve(event)}>
                              <Link to="/goToCart" style={{textDecoration:"none",color:"black",fontSize:"1vw"}}>
                               Add To Cart</Link></button>
                        </div>
                    </div>
                    {/* <Map
                              google={this.props.google}
                              zoom={8}
                              initialCenter={{ lat: 30.899148, lng: 75.817531}}
                         >
                              {this.displayMarkers()}
                   </Map> */}
                </div>
        )

    }
}

{/* <div>
   <img src={this.props.imgUrl} alt="image not available"></img>
        <iframe 
             ng-src="https://maps.google.com/maps?f=q&amp;source=s_q&amp;hl=en&amp;geocode=&amp;q=IIM, INDORE, Rau - Pithampur Rd, Indore, Madhya Pradesh, India&amp;t=m&amp;z=16&amp;iwloc=A&amp;ll=22.625626,75.79096400000003&amp;output=embed"
             src="https://maps.google.com/maps?f=q&amp;source=s_q&amp;hl=en&amp;geocode=&amp;q=IIM, INDORE, Rau - Pithampur Rd, Indore, Madhya Pradesh, India&amp;t=m&amp;z=16&amp;iwloc=A&amp;ll=22.625626,75.79096400000003&amp;output=embed">
        </iframe>
</div> */}