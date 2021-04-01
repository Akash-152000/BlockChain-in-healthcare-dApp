import React, { Component,useState} from 'react';
import Navbar from './Navbar'
import Dialog from './Dialog'
import DataTable from 'react-data-table-component';


// const [columns, setColumns] = useState([]);
// const [data, setData] = useState([]);
class Main extends Component {
  constructor(props) {
    super(props)
    this.state = {
      error:'You can\'t access User\'s page'  
    }
  }

  render() {

    return (
    <div>
      {
        this.props.account=="0x784aD800e1E913dd265664D76ab29609334E6D0C"?
        <div className="container-fluid mt-5">
        <div className="row">
          <main role="main" className="col-lg-12 ml-auto mr-auto" style={{ maxWidth: '500px' }}>
            <div className="content mr-auto ml-auto">
              <p>&nbsp;</p>
              <h2>PATIENT REPORT Image</h2>
              <form onSubmit={(event) => {
                event.preventDefault()
                const description = this.imageDescription.value
                this.props.uploadImage(description)
            
              }} >
                <input type='file' accept=".csv,.xlsx,.xls" onChange={this.props.captureFile} />

                  <div className="form-group mr-sm-2">
                    <br></br>
                      <textarea
                        id="imageDescription"
                        row="4"
                        type="text"
                        ref={(input) => { this.imageDescription = input }}
                        className="form-control"
                        placeholder="Patient Details.."
                        required />
                  </div>
                <button type="submit" className="btn btn-primary btn-block btn-lg">Upload!</button>
              </form>
              <p>&nbsp;</p>
              {/* { this.props.images.map((image, key) => {
                return(
                  <div className="card mb-4" key={key} >
                    <ul id="imageList" className="list-group list-group-flush">
                      <li className="list-group-item">
                        <p class="text-center"><img src={`https://ipfs.infura.io/ipfs/${image.hash}`} style={{ maxWidth: '420px'}}/></p>
                        <p>{image.description}</p>
                      </li>    
                    </ul>
                  </div>
                )
              })} */}
            </div>
          </main>
        </div>
      </div>
      :<Dialog err={this.state.error}/>
      }
      
    </div>  
    );
  }
}

export default Main;