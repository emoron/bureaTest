import React from 'react';

class HeaderWin extends React.Component {
  /*
  This component must render with the following parameters:
    *logo - string
  */
  render(){
    return(

        <div
          className ="header-menu"
          style={{
            backgroundColor:"#ff2d2d",
            height: 45,
            zIndex: 100,
            width: "100%",
            position: "absolute",
            top: 0}}>


        </div>
    );
  }
}

export default HeaderWin;
