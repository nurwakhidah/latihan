import React, { Component } from 'react';
import App from './App';
import { Link } from 'react-router-dom';
import './about.css';

class About extends Component {
    render (){
        return (
            <div className= "about">
                <div className="header">
                    <img src="icons8_online_store_48px_1.png"/>
                    <h1>Female Shop</h1>
                </div>
                <nav className="nav"> 
          {/* {this.props.items.map((menu, index) => {
              let style = "menu";

              if(this.state.active === menu) {
                style = '${style} is-active';
              }

              return <Link
                  className = {style}
                  onClick = {this.clicked.bind(this, menu)}
                  key = {index} 
                  to = {menu}
                >
                  {menu}
              </Link>

              // return <a
              //   className = {style}
              //   onClick = {this.clicked.bind(this, menu)}
              //   key = {index}
              //   >
              //     {menu}
              //   </a>;
            })} */}
            <div>
              {/* <Link
                  className = {style}
                  onClick = {this.clicked.bind(this, menu)}
                  key = {index}
                  to = {menu}
                >
                  {menu}
              </Link> */}

              <Link to = "/">Home</Link>&nbsp; &nbsp;
              <Link to = "./about">About</Link>
            </div>
          </nav>
                <div className="content">
			        <h2>!! Welcome to The About Page !!</h2>
                    <h4>This is a page about Female Shop.</h4>
                    <h4>Female shop is an online store that will sell a variety of women's needs, such as beauty, clothing, and others.</h4>
                    <h4>This online shop will be released in the coming year.</h4>
                    <h3>Welcome Next Year.....</h3>
                    <h5>by Lirinda's Company :)</h5>
                </div>
            </div>
        );
    }
}

export default About;