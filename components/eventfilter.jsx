import React from 'react'
import {Component} from 'react';
import App from '../App.js'


class Eventfilter extends Component
{
    constructor()
    {
        super();
        this.state = {
            filter1:[],
            filter2:[],
            p:1
        }
        this.onFilter=this.onFilter.bind(this);
    }
    onFilter(e)
    {                     //removes functionality of submission (refresh)                           
       var temp = document.getElementById(""+e);
       var temp1 = document.getElementById(""+e).value;

       this.setState(
           {
               filter1: this.props.eventsf,
           }
       );
       if(temp1=='all')
       {
           this.setState (
               {
                   filter2: this.state.filter1,
               }
           )
       }
       if(temp.checked===true)
       {
         this.setState ( 
             { 
                  filter2:  this.state.filter1.filter( eve => { return eve.fest == temp1 } )
             }  );  
       }
       else
       {
           this.setState ( 
               {
                   filter2:this.state.filter1,
               }  );
       }     
       console.log(this.state.filter2);
    }
    render()
    {
        if(this.state.filter2.length==0)
        return ( 
            <div>
              <input type = "radio" id="1" name="filter" value="cultural" onClick = { () => this.onFilter('1') } ></input> 
              <label>CULTURAL</label>

              <input  type = "radio" id="2" name="filter" value="technical" onClick = { () =>  this.onFilter('2')}></input> 
              <label><b>TECHNICAL</b></label>

              <input  type = "radio" id="3" name="filter" value="sports" onClick = { () => this.onFilter('3')}></input> 
              <label>SPORTS</label>

              <input  type = "radio" id="4" name="filter"  value="management" onClick = { () => this.onFilter('4')}></input> 
              <label>MANAGEMENT</label>

              <input  type = "radio" id="5" name="filter"  value="all"  onClick = { () => this.onFilter('5')}></input> 
              <label>All Events</label>

              <table>
                    <thead>
                        <tr>
                            <th>campus</th>
                            <th>Fest Type</th>
                            <th>Event Type</th>
                        </tr>
                    </thead>
                    <tbody>
                    {
                        this.props.eventsf.map( (eve) =>
                        {
                            return  <tr>
                                       <td>{eve.ambas}</td>
                                       <td>{eve.fest}</td>
                                       <td>{eve.ename}</td>
                                    </tr>
                         } )

                        // input field empty -> props 
                        // input feils -> localevents   event.charcode for pressing enter  evnt.keycode for entering omkeypress and onkeyup
                        // input - clear, set state
                    
                    }
                   </tbody>
                </table>
          </div>
        );
        else return ( 
            <div>
              <input type = "radio" id="1" name="filter" value="cultural" onClick = { () => this.onFilter('1') } ></input> 
              <label>CULTURAL</label>

              <input  type = "radio" id="2" name="filter" value="technical" onClick = { () =>  this.onFilter('2')}></input> 
              <label><b>TECHNICAL</b></label>

              <input  type = "radio" id="3" name="filter"  value="sports" onClick = { () => this.onFilter('3')}></input> 
              <label>SPORTS</label>

              <input  type = "radio"id="4" name="filter"  value="management" onClick = { () => this.onFilter('4')}></input> 
              <label>MANAGEMENT</label>

              <input  type = "radio" id="5" name="filter"  value="all"  onClick = { () => this.onFilter('5')}></input> 
              <label>All Events</label>
              
                <table>
                    <thead>
                        <tr>
                            <th>campus</th>
                            <th>Fest Type</th>
                            <th>Event Type</th>
                        </tr>
                    </thead>
                    <tbody>
                    {
                        this.state.filter2.map( (eve) =>
                        {
                            return  <tr>
                                       <td>{eve.ambas}</td>
                                       <td>{eve.fest}</td>
                                       <td>{eve.ename}</td>
                                    </tr>
                         } )
                        // input field empty -> props 
                        // input feils -> localevents   event.charcode for pressing enter  evnt.keycode for entering omkeypress and onkeyup
                        // input - clear, set state
                    }
                   </tbody>
                </table>
          </div>
        );
    }
}
export default Eventfilter;