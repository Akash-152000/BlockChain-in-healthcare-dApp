import Decentragram from '../abis/Decentragram.json'
import React, { Component } from 'react';
import Navbar from './Navbar'
import Main from './Main'
import Home from './Home'
import Web3 from 'web3';
import Upload from './Upload'
import Patient from './Patient'
import './App.css';
import {BrowserRouter as Router,Route} from 'react-router-dom'
import Doctor from './Doctor'
import XLSX from 'xlsx'



const ipfsClient = require('ipfs-http-client')
const ipfs = ipfsClient({ host: 'ipfs.infura.io', port: 5001, protocol: 'https' }) // leaving out the arguments will default to these values

class App extends Component {

  async componentWillMount() {
    await this.loadWeb3()
    await this.loadBlockchainData()
  }

  async loadWeb3() {
    if (window.ethereum) {
      window.web3 = new Web3(window.ethereum)
      await window.ethereum.enable()
    }
    else if (window.web3) {
      window.web3 = new Web3(window.web3.currentProvider)
    }
    else {
      window.alert('Non-Ethereum browser detected. You should consider trying MetaMask!')
    }
  }

  async loadBlockchainData() {
    const web3 = window.web3
    // Load account
    const accounts = await web3.eth.getAccounts()
    this.setState({ account: accounts[0] })
    // Network ID
    const networkId = await web3.eth.net.getId()
    const networkData = Decentragram.networks[networkId]

    if(accounts[0]=="0x566D4d760194EC916098cbF2acd77e6699EBBFd0"){
      console.log("accounts",this.state.account)
    }
    else{
      console.log("Phewww")
    }

    if(networkData) {
      const decentragram = new web3.eth.Contract(Decentragram.abi, networkData.address)
      this.setState({ decentragram })
      const imagesCount = await decentragram.methods.imageCount().call()
      this.setState({ imagesCount })
      // Load images
      for (var i = imagesCount; i >= 1; i--) {
        const image = await decentragram.methods.images(i).call()
        this.setState({
          images: [...this.state.images, image]
        })
      }
      // Sort images. Show highest tipped images first
      this.setState({
        images: this.state.images.sort((a,b) => b.tipAmount - a.tipAmount )
      })
      this.setState({ loading: false})
    } else {
      window.alert('Decentragram contract not deployed to detected network.')
    }
  }

  captureFile = (event)=>{ 
    event.preventDefault()
    //process the file in IPFS
    const file =  event.target.files[0]
    const reader  = new window.FileReader()
    reader.readAsArrayBuffer(file)
    reader.onloadend = () =>{
      this.setState({buffer: Buffer(reader.result)

      })
    } 
  }


  uploadImage = description => {
    console.log("Submitting file to ipfs...")

    //adding file to the IPFS
    ipfs.add(this.state.buffer, (error, result) => {
      console.log('Ipfs result', result)
      if(error) {
        console.error(error)
        return
      }

      this.setState({ loading: true })
      this.state.decentragram.methods.uploadImage(result[0].hash,description).send({ from: this.state.account }).on('transactionHash', (hash) => {
        this.setState({ loading: false })
      })
    })
  }


// this.state.maxVal,this.state.minVal,this.state.maxCount,this.state.minCount,
  constructor(props) {
    super(props)
    this.state = {
      account: '',
      decentragram: null,
      images: [],
      // data:[],
      loading: true
      
    }

    this.uploadImage = this.uploadImage.bind(this)
    this.captureFile = this.captureFile.bind(this)
  }

  render() {
    console.log(this.state.maxVal)
    return (
      <div>
      <Navbar account={this.state.account}/>      
        <Router>
          <Route path = "/" exact render = {(props) =>(
            <>
              <Home/>
            </>
          )} />

          <Route path='/Patient'><Patient
                account={this.state.account}
                images={this.state.images}
                captureFile={this.captureFile}
                uploadImage={this.uploadImage}
                tipImageOwner={this.tipImageOwner} /></Route>

          <Route path='/Upload'>
                <Upload
                account={this.state.account} 
                images={this.state.images}
                captureFile={this.captureFile}
                uploadImage={this.uploadImage}
                tipImageOwner={this.tipImageOwner}/></Route>
          <Route path='/Doctor'><Doctor images={this.state.images} account={this.state.account} /></Route>
        </Router>
        
      </div>
    );
  }
}

export default App; 
