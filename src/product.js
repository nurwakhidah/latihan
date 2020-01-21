// import React, { Component } from "react";
// import List from "./list";
// import { render } from "react-dom";


// class Product extends Component {
//     constructor(props) {
//         super(props);

//         this.state = {
//             layout: "list",
//         };

//         this.switchLayout = this.switchLayout.bind(this);

//         this.switchLayout(layout) {
//             this.setState({
//                 layout,
//             });
//         }

//         render() {
//             const {layout} = this.state;
//             const {Products} = this.props;

//             return (
//                 <div className = "product">
//                     <div className = "controls">
//                         <ControlItem
//                         layout = "list"
//                         activeLayout = {layout}
//                         onDepressed = {this.switchLayout}
//                         />
//                     </div>

//                     <List
//                         layout = {layout}
//                         products = {products}
//                     />
//                 </div>
//             );
//         }

//     }
// }

// export default Product;