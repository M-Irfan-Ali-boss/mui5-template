import React from 'react'
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import Logo from '../../images/Vector.png'
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
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
        <Typography sx={{fontSize:24,mt:3,fontWeight: 500}} variant="h1">
        Hi Kate
        </Typography>
        <Box sx={{ background:'#CFD8DC',borderRadius:20 ,width:180,height:35,mt:3,display:'flex',alignItems:'center'}}>
          <Avatar alt="Logo" src={personImg} sx={{mx:1,width:25,height:25}} />
          <Typography sx={{fontSize:14,color:'#000000',opacity:'87%'}} variant="h6">
              kate@gmail.com
          </Typography>
          <KeyboardArrowDownIcon sx={{color:'#000000',opacity:'60%'}}/>
        </Box>
        <Typography sx={{fontSize:16,fontWeight:500,mt:3}} variant="h6">
        To continue, first verify it’s you
            </Typography>
        <TextField
          id="outlined-basic"
          id="outlined-error-helper-text" label="Password" size="medium" variant="outlined" sx={{width:323,mt:3}}
          type='password'
          InputProps={{
            endAdornment: <InputAdornment position="end"><RemoveRedEyeIcon/></InputAdornment>,
          }}
        />
        <Box sx={{mt:3,display:'flex',justifyContent:'space-between'}}>
            <Button sx={{borderRadius:'20px',fontWeight:'bold',color:"#0A56A3"}}>FORGOT PASSWORD?</Button>
            <Button variant="contained" sx={{borderRadius:'20px',fontWeight:'bold'}} style={{backgroundColor:"#0A56A3"}}>NEXT<ArrowForwardIcon sx={{ml:1,fontSize:16}}/></Button>
        </Box>
      </CardContent>
    </React.Fragment>
  );
  const footerLinks=(
    <Box sx={{display:'flex',justifyContent:'end' ,color:'#000000',opacity:'60%',pt:3}}>    
        <Typography sx={{fontSize:14,fontWeight:"bold",display:'flex',ml:3,alignItems:'center',}} variant="h6">
        HELP
        </Typography>
        <Typography sx={{fontSize:14,fontWeight:"bold",display:'flex',ml:3,alignItems:'center',}} variant="h6">
        PRIVACY
        </Typography>
        <Typography sx={{fontSize:14,fontWeight:"bold",display:'flex',ml:3,alignItems:'center',}} variant="h6">
        TERMS
        </Typography>
        </Box>
  );

function passEnter() {
    return (
        <Box sx={{ minWidth: 275,display: 'flex',justifyContent: 'center',alignItems: 'center',pt:6 }}>
        <Box>
        <Card variant="outlined" sx={{pl:3,pr:5}}>{card}</Card>
        <Box sx={{pr:2}}>{footerLinks}</Box>
            </Box>
    </Box>
    )
}

export default passEnter
