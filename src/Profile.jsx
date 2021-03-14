import React from 'react';
import Button from '@material-ui/core/Button';

function Profile(){
    return(
        <>
        
        <div className='container-fluid'>
    <div className="card-content center social" style={{margin: '40px 10px'}}>
                <h3 className="grey-text text-lighten-3">
                   JOHN DOE
                </h3>
                <h6 className="grey-text text-lighten-1">Full Stack Web Developer|problem Solver|</h6>
                <h6 className="grey-text text-lighten-1">Algorithm Trainer</h6>
                <p className="grey-text text-lighten-3 text-align-left pt">
                Lorem ipsum dolor sit
                <br></br>
                Bangladesh. 500+ connections</p>

                <Button variant="contained" color="primary" href="#contained-buttons"style={{borderRadius: '50px',
                color:'#fff',background:'blue',fontWeight:'bold'}}>connect</Button>
                <Button variant="outlined" color="primary" style={{borderRadius: '50px' ,border:'2px solid blue',
                color:'blue',fontWeight:'bold',margin:'0 10px'}}
          href="#outlined-buttons">Message</Button>
            </div>

            <div className="border"style={{margin: '10px 10px',width:'100%',border:' 1px solid grey'}}></div>
        
        </div>
        </>
    )
}
export default Profile