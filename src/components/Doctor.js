import React, { Component } from 'react';
import './App.js'
import Web3 from 'web3';
import Navbar from './Navbar'
import Dialog from './Dialog'
import {Link} from 'react-router-dom';

// import ipfs from './ipfs';
// const ipfsClient = require('ipfs-http-client')
// const ipfs = ipfsClient({ host: 'ipfs.infura.io', port: 5001, protocol: 'https' })


class Doctor extends Component{
  constructor(props) {
    super(props)
    this.state = {
      error:'You can\'t access doctor\'s page'  
    }
  }
	render(){
	  return(
	    <React.Fragment>
        {this.props.account=="0x89fae8e8a7e50Dc5abcebF9f6e26635061CefAC4"?
           this.props.images.map((image, key) => {
                  return(
                    <div className="card mb-4" key={key} >
                      <ul id="imageList" className="list-group list-group-flush">
                        <li className="list-group-item">
                          <p class="text-center"><img src={`https://ipfs.infura.io/ipfs/${image.hash}`} style={{ maxWidth: '420px'}}/></p>
                          <p>{image.description}</p>
                          <p>{image.date}</p>
                        </li>    
                      </ul>
                    </div>
                  )
                })
          :<Dialog err={this.state.error}/>

      }

	  	
	    </React.Fragment>
	    )
	}

}

export default Doctor