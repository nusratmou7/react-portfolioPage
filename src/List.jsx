import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import MoreVertIcon from '@material-ui/icons/MoreVert';

const options = [
    'None',
    'Atria',
    'Callisto',
  ];
  
// eslint-disable-next-line react-hooks/rules-of-hooks

function List(){
    const [anchorEl, setAnchorEl] =  React.useState(null)
    const open = Boolean(anchorEl);

    const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
};

    const handleClose = () => {
    setAnchorEl(null);
};
    return(
        <>
        
        <div>
            <IconButton style={{marginLeft:'90%'}}
                  aria-label="more"
                  aria-controls="long-menu"
                  aria-haspopup="true"
                  onClick={handleClick} >
               <MoreVertIcon />
            </IconButton>
            <Menu
                id="long-menu"
                anchorEl={anchorEl}
                keepMounted
                open={open}
                onClose={handleClose}>
                {options.map((option) => (
                  <MenuItem key={option} selected={option === 'Pyxis'} onClick={handleClose}>
            {option}
          </MenuItem>
                ))}
            </Menu>
         </div>
      </>
    )
}
export default List;