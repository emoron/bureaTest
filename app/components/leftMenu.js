import React from 'react';
const logo = require("../assets/image1.png");
const icono = require("../assets/image1.png");
const ReactMarkdown = require('react-markdown/with-html')

class LeftMenu extends React.Component {

  componentDidMount(){

    fetch('/list')
    .then(res => res.json())
    .then(files => {
      console.log(files);
        this.setState({ files:files });

    })
    .catch(error => {
      console.log("Err",error);
    });
  }
  render(){
    return(
      <nav className="navbar navbar-expand-sm navbar-default">
          <div className="navbar-header">

            <a className="navbar-brand" href="./" style={{zIndex:200, borderBottom:0}}>
              <img src="/assets/images/image1.png" alt="Logo"/>
            </a>
          </div>
          <div id="main-menu" className="main-menu collapse navbar-collapse">
              <ul className="nav navbar-nav">
                  <li>
                      <a id="menuToggle">
                        <div className="rotate-on-open">
                          <span className="menu-icons icon-menu-regresar"></span>
                        </div>
                        <span id="state-menu">
                          Ocultar
                        </span>
                      </a>
                  </li>
                  <li>
                      <a href="/new/">
                        <span className="menu-icons icon-menu-dashboard"></span> Save File
                      </a>
                  </li>
                  <li>
                      <a href="/save">
                        <span className="menu-icons icon-menu-edocuenta"></span> Drop File
                        </a>
                  </li>
                  <li>
                      <a href="/load">
                        <span className="menu-icons icon-menu-notifications"></span> New File
                        </a>
                  </li>

             </ul>


          </div>
      </nav>
    );
  }
}

export default LeftMenu;
