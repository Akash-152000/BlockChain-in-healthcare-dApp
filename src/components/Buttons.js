import React, { Component,useState} from 'react'
import Button from 'react-bootstrap/Button'
import 'bootstrap/dist/css/bootstrap.min.css'
import Upload from './Upload'
import Doctor from './Doctor'
import Patient from './Patient'
import Box from '@material-ui/core/Box';
import './App.css'

class Buttons extends Component {

  constructor(props) {
      super(props)
      this.state = {
        bool:"one" 

      }
      this.handleClick1 = this.handleClick1.bind(this);
      this.handleClick2 = this.handleClick2.bind(this);
    }

    handleClick1 = () =>{
      this.setState({ bool:"two" });
  }
    handleClick2 = () =>{
      this.setState({ bool:"three" });
  }

  render() {

    return (
    <div>
      {console.log(this.state.bool)}
      <button type="button" class="btn btn-outline-primary" data-mdb-ripple-color="dark" onClick={this.handleClick1}>
        Upload
      </button>
      <button type="button" class="btn btn-outline-secondary" data-mdb-ripple-color="dark" onClick={this.handleClick2}>
        History 
      </button>

      {
          (() => {
             if (this.state.bool=="one")
                return( 
                  <div style={{ marginLeft: '30%', marginTop: '60px', width: '30%' }}>
                    <Box className="buttonBox"  border={1} p={1}></Box>
                  </div>)
             if (this.state.bool=="two")
                return (
                    <div style={{ marginLeft: '30%', marginTop: '60px', width: '30%' }}>
                        <Box className="buttonBox" border={1} p={1}><Upload account={this.props.account} images={this.props.images}
                          captureFile={this.props.captureFile}
                          uploadImage={this.props.uploadImage}
                          tipImageOwner={this.props.tipImageOwner}/></Box>
                    </div>
                  )
             else
                return (
                  <div style={{ marginLeft: '30%', marginTop: '60px', width: '30%' }}>
                      <Box className="buttonBox" border={1} p={1}> <Doctor images={this.props.images} account={this.props.account} />
                      </Box>
                  </div>
                  )
          })()
      }


    </div>
    );
  }
}

export default Buttons;


      
     /// {
      //     (() => {
      //        if (this.state.bool=="one")
      //           return( 
      //             <div style={{ marginLeft: '40%', marginTop: '60px', width: '30%' }}>
      //               <Box color="black" bgcolor="white" border={1} p={1}></Box>
      //             </div>)
      //        if (this.state.bool=="two")
      //           return (
      //               <div style={{ marginLeft: '35%', marginTop: '60px', width: '30%' }}>
      //                   <Box color="black" bgcolor="white" border={1} p={1}><Upload account={this.props.account} images={this.props.images}
      //                     captureFile={this.props.captureFile}
      //                     uploadImage={this.props.uploadImage}
      //                     tipImageOwner={this.props.tipImageOwner}/></Box>
      //               </div>
      //             )
      //        else
      //           return (
      //             <div style={{ marginLeft: '40%', marginTop: '60px', width: '30%' }}>
      //                 <Box color="black" bgcolor="white" border={1} p={1}> <Doctor images={this.props.images} account={this.props.account} />
      //                 </Box>
      //             </div>
      //             )
      //     })()
      // }


      




/// import React from 'react';
// import { makeStyles } from '@material-ui/core/styles';
// import Button from '@material-ui/core/Button';
// import Doctor from './Doctor'
// import './App.css';


// const useStyles = makeStyles((theme) => ({
//   root: {
//     '& > *': {
//       margin: theme.spacing(1),
//     },
//   },
// }));

// export default function ContainedButtons() {
//   const classes = useStyles();

//   return (
//     <div className={classes.root}>
//       <Button variant="contained" color="primary">
//         <a className="anchor" href="/Upload" style={{color:"white"}}>Upload data</a>
//       </Button>
//       <Button variant="contained" color="secondary">
//         View history
//       </Button>
//     </div>
//   );
// }
// {this.state.bool=="one"?
  //         <div style={{ marginLeft: '40%', marginTop: '60px', width: '30%' }}>
  //           <Box color="black" bgcolor="red" border={1} p={1}></Box>
  //         </div>
//         :this.state.bool="two"?
//           <div style={{ marginLeft: '35%', marginTop: '60px', width: '30%' }}>
//             <Box color="black" bgcolor="blue" border={1} p={1}><Upload account={this.props.account} images={this.props.images}
//                   captureFile={this.props.captureFile}
//                   uploadImage={this.props.uploadImage}
//                   tipImageOwner={this.props.tipImageOwner}/></Box>
//           </div>
//       :this.state.bool="three"?
//           <div style={{ marginLeft: '40%', marginTop: '60px', width: '30%' }}>
//               <Box color="black" bgcolor="green" border={1} p={1}> <Doctor images={this.props.images} account={this.props.account} />
//               </Box>
//           </div>
//       :<div style={{ marginLeft: '40%', marginTop: '60px', width: '30%' }}>
//           <Box color="black" bgcolor="yellow" border={1} p={1}></Box>
//         </div>
//       } 