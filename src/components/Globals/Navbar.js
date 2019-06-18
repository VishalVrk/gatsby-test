import React, { Component } from 'react'
import {Link} from 'gatsby'
import logo from '../../images/logo.svg'
import {FaCartArrowDown} from 'react-icons/fa'
import {FaApple} from 'react-icons/fa'

export default class Navbar extends Component {
    state={
        navbarOpen:false,
        css:'collapse navbar-collapse',
        links:[
            {
                id:1,
                path:'/',
                text:'home'
            },{
                id:2,
                path:'/about',
                text:'about'
            }
        ]
    }
    navbarHandler = ()=>{
        this.state.navbarOpen ? this.setState({navbarOpen:false, css:"collapse navbar-collapse"}):this.setState({navbarOpen:true,css:"collapse navbar-collapse show"})
    }
  render() {
   return(    
   
   <nav class="navbar navbar-expand-md navbar-light bg-light fixed-top">
   {/* <a class="navbar-brand" href="#">Navbar</a> */}
   <Link to="/" className="navbar-brand">
       <FaApple/>
   </Link>
   <button className="navbar-toggler" type="button" data-toggle="collapse" 
   data-target="#navbarsExampleDefault" aria-controls="navbarsExampleDefault" 
   aria-expanded="false" aria-label="Toggle navigation"
   onClick={this.navbarHandler}
   >
     <span className="navbar-toggler-icon"></span>
   </button>

   <div class={this.state.css}>
     <ul class="navbar-nav mx-auto">
         {this.state.links.map(link=>{
             return(<li key={link.id} >
                 <Link to={link.path} className="nav-link text-capitalize">
                     {link.text}
                 </Link>
             </li>)
         })}
         <li className="nav-item ml-sm-5">
         <FaCartArrowDown className="cart-icon"/>
         </li>
     </ul>
   </div>
 </nav>
 )
  }
}
