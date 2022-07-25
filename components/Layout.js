import React from "react";
 
const Layout = (props) => {
  return(<div>
    <h1>I am a header</h1>
    {props.children}
    <h1>I am footer</h1>
  </div>)
};
export default Layout;