import React  from 'react';
import About  from './About';
import Profile  from './Profile';
import List from './List';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Image from "./Image"
import Experience from './Experience'

// import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';


  
// eslint-disable-next-line react-hooks/rules-of-hooks


function App1() {
    
   return (
           <>
             <Image/>,
             <List/>,
             <Profile/>,
             <About/>,
             <Experience/>
           </>
          );

}
export default App1;