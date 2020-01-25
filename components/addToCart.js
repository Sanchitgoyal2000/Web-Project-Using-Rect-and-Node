import React,{Component} from 'react';
import '../addToCart.css';

export default class AddToCart extends Component{
    constructor(){
        super();
        
      this.getCart=this.getCart.bind(this);
    }
    state = {
        cartEvents:[],
        events:[]
    }
    componentDidMount(){
        var userId=JSON.parse(localStorage.getItem("jwt")).user.id;
        fetch(`http://localhost:5000/user/getCart?userId=${userId}`)
      .then(res => {return res.json()})
      .then(res => {
           console.log(JSON.stringify(res));  
           this.setState({cartEvents:res.cart});
                    }
          )
          var obj={id:this.props.eve._id};
          this.state.cartEvents.push(obj);
          this.setState({cartEvents:[...this.state.cartEvents]});
          const url = `http://localhost:5000/user/addToCart?userId=${userId}`;
          console.log(JSON.parse(localStorage.getItem("jwt")).token );
          fetch(url,
          {
              method: "PUT",
              headers:{  "Content-Type":"application/json",
              "x-auth-token":JSON.parse(localStorage.getItem("jwt")).token  },
              body:JSON.stringify(this.state.cartEvents),
          } )
         .then( res => {
             if(res.ok)
                return res.json()
              } )
          .then( res => {
              console.log(JSON.stringify(res));
              } )
              this.getCart(userId);
    }
      getCart(id){
        fetch(` http://localhost:5000/user/getCart?userId=${id}`)
      .then(res => {return res.json()})
      .then(res => {
            console.log(res.cart);
           this.setState({cartEvents:res.cart},()=>{
            console.log(`The cart events are : ${this.state.cartEvents}`)
            this.state.cartEvents.map((eveId)=>
                fetch(`http://localhost:5000/event/getEve?eveId=${eveId}`)
                .then(res=>res.json())
                .then(res=>{
                    console.log(res)
                    this.state.events.push(res);
                    this.setState({
                        
                        events: [...this.state.events],
                    })
                //    this.state.events.push(res)
                   console.log(this.state.events);
                })
            )

           });
                    }
          )
           

    }
    render(){
        // console.log("++");
        // console.log(this.props.eve);
        // this.state.cartEvents.push(this.props.eve);
  
        return(
            <div>
                {
                this.state.events.map((event)=>
                   <div style={{backgroundColor: "#ffff80"}}>
                         <div className="card text-center">
                             <div className="card-header">
                                My Cart
                             </div>
                             <div className="card-body">
                                 <h5 className="card-title">{event.fname}</h5>
                                 <img style={{height:"20vw",width:"20vw"}}src={event.imgUrl} alt="not available"></img>
                                 <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                                 <a href="#" className="btn btn-primary">Go somewhere</a>
                             </div>
                             <div className="card-footer text-muted">
                                2 days ago
                             </div>
                         </div>
                    </div>
                    )     }
            </div>
        )
    }
}