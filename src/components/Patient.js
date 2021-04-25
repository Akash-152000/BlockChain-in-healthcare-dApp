import React, { Component,useState} from 'react';
import Navbar from './Navbar'
import Dialog from './Dialog'
import Buttons from './Buttons'
import DataTable from 'react-data-table-component';


class Patient extends Component {

 
  render() {

    return (
    <div>
      <Buttons account={this.props.account} 
                images={this.props.images}
                captureFile={this.props.captureFile}
                uploadImage={this.props.uploadImage}
                buttonFunction={this.buttonFunction}
                tipImageOwner={this.props.tipImageOwner}/>

    </div>

    );
  }
}

export default Patient;