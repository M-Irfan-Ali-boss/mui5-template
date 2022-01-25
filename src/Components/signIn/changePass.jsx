import React from 'react'
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import Logo from '../../images/Vector.png'
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import personImg from '../../images/Avatar.png'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

const card = (
    <React.Fragment>
      <CardContent sx={{width:688,}}>
        <Typography sx={{ fontSize: 18,fontWeight: 'bold' ,display:'flex',alignItems:'center',color:'#212121'}} variant="h4" color="text.secondary" gutterBottom>
        <Avatar alt="Logo" src={Logo} sx={{mr:1}} />
          streamify
        </Typography>
        <Typography sx={{fontSize:24,mt:3,fontWeight: 600}} variant="h1">
        Change password
        </Typography>
        <Box sx={{ background:'#CFD8DC',borderRadius:20 ,width:180,height:35,mt:3,display:'flex',alignItems:'center'}}>
          <Avatar alt="Logo" src={personImg} sx={{mx:1,width:25,height:25}} />
          <Typography sx={{fontSize:14,color:'#000000',opacity:'87%'}} variant="h6">
              kate@gmail.com
          </Typography>
          <KeyboardArrowDownIcon sx={{color:'#000000',opacity:'60%'}}/>
        </Box>
        <Typography sx={{fontSize:16,fontWeight:700,mt:3}} variant="h6">
        Create a strong password
            </Typography>
        <Typography sx={{fontSize:16,fontWeight:500,mt:2}} variant="h6">
            Create a new, strong password that you don’t use for other websites.
            </Typography>
            <Box>
        <TextField
          id="outlined-basic"
          id="outlined-error-helper-text" label="Create password" size="medium" variant="outlined" sx={{width:323,mt:3}}
          type='password'
          InputProps={{
            endAdornment: <InputAdornment position="end"><RemoveRedEyeIcon/></InputAdornment>,
          }}
        />
        </Box>
        <Box>
        <TextField
          id="outlined-basic"
          id="outlined-error-helper-text" label="Confirm" size="medium" variant="outlined" sx={{width:323,mt:3}}
          type='password'
          InputProps={{
            endAdornment: <InputAdornment position="end"><RemoveRedEyeIcon/></InputAdornment>,
          }}
        />
        </Box>
        <Box sx={{mt:3,display:'flex',justifyContent:'space-between'}}>
            <Button sx={{borderRadius:'20px',fontWeight:'bold',color:"#0A56A3"}}>SKIP</Button>
            <Button variant="contained" sx={{borderRadius:'20px',fontWeight:'bold'}} style={{backgroundColor:"#0A56A3"}}>SAVE PASSWORD</Button>
        </Box>
      </CardContent>
    </React.Fragment>
  );

function changePass() {
    return (
        <Box sx={{ minWidth: 275,display: 'flex',justifyContent: 'center',alignItems: 'center',pt:6 }}>
        <Box>
        <Card variant="outlined" sx={{pl:3,pr:5}}>{card}</Card>
            </Box>
    </Box>
    )
}

export default changePass
