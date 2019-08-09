import React, {Component } from 'react';


class FileElement extends Component {
  render(){
    return (
    <li >
      <span>{this.props.name}</span>
    </li>
    );
  }
}

class ListFiles extends React.Component {

  constructor(props){
		super(props)

		this.state={
			files: [],
		}
	}

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

        <div className ="header-menu">
            <ul>
            {this.state.files.map(({
                    key,
                    name,
                    extension,
	          	      fileSizeInBytes
                  }) => (
                    <FileElement
                      key={key}
                      name={name}
                      extension = {extension}
                      fileSizeInBytes = {fileSizeInBytes}

                      >
                    </FileElement>
                    ))}
                  
            </ul>
        </div>
    );
  }
}

export default ListFiles;
