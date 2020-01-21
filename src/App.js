import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import { Link } from 'react-router-dom';
// import logo from './logo.svg';
import './App.css';
import About from "./about";

  // function App() {
  //   return (
  //     <div className="App">
  //       <header className="App-header">
  //         <img src={logo} className="App-logo" alt="logo" />
  //         <p>
  //           Edit <code>src/App.js</code> and save to reload.
  //         </p>
  //         <a
  //           className="App-link"
  //           href="https://reactjs.org"
  //           target="_blank"
  //           rel="noopener noreferrer"
  //         >
  //           Learn React
  //         </a>
  //       </header>
  //     </div>
  //   );
  // }
  
  class App extends Component {
    constructor(props) {
      super(props);

      this.state = {
        active: "Home",
      };
    }

    clicked(menu) {
      this.setState({
        active: menu,
      });
    }

    render() {
      return (
        <div id="app">
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

          <div className="jumbroton">
			      <h2>Hello Girls</h2>
              <h4>~ Welcome to My Homepage ~</h4>
          </div>

          <div className="thumbnail1">
			      <h2>Favourite MakeUp in 2019</h2>
          </div>

          <div className="thumbnail2">
			      <h2>The Best MakeUp in 2019</h2>
          </div>

          <div className="thumbnail3">
			      <h2>Favourite Skincare in 2019</h2>
			    </div>
        </div>
      );
    }
  }

// ReactDOM.render(
//     <Router>
//         <Route path = "/" component = {App}>
//           <Route path = "/about" component= {About}/>
//         </Route>
//     </Router>,
//     document.getElementById('root')
// );

 export default App;
