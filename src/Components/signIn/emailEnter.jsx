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

const card = (
    <React.Fragment>
      <CardContent sx={{width:688,}}>
        <Typography sx={{ fontSize: 18,fontWeight: 'bold' ,display:'flex',alignItems:'center',color:'#212121'}} variant="h4" color="text.secondary" gutterBottom>
        <Avatar alt="Logo" src={Logo} sx={{mr:1}} />
          streamify
        </Typography>
        <Typography sx={{fontSize:24,mt:3,fontWeight: 500}} variant="h1">
        Sign in
        </Typography>
        <Typography sx={{fontSize:16,mt:3}}>
        Use your Streamify account
        </Typography>
        <Box sx={{mt:3}}>
        <TextField id="outlined-basic" fullWidth label="Email address" size="medium" variant="outlined"/>
        </Box>
        <Button sx={{borderRadius:'20px',fontWeight:'bold',color:"#0A56A3",mt:3,ml:1}}>FORGOT PASSWORD?</Button>
        <Box sx={{display:'flex',alignItems:'center',justifyContent:'space-between',mt:3}}>
            <Typography sx={{fontSize:16,fontWeight:500}} variant="h6">
             Not your computer? Use Guest mode to sign in privately.
            </Typography>
            <Button sx={{borderRadius:'20px',fontWeight:'bold',color:"#0A56A3"}}>LEARN MORE</Button>
        </Box>
        
        <Box sx={{mt:4,display:'flex',justifyContent:'space-between'}}>
            <Button sx={{borderRadius:'20px',fontWeight:'bold',color:"#0A56A3"}}>CREATE ACCOUNT</Button>
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

function signin() {
    return (
        <Box sx={{ minWidth: 275,display: 'flex',justifyContent: 'center',alignItems: 'center',pt:6 }}>
        <Box>
        <Card variant="outlined" sx={{pl:3,pr:5}}>{card}</Card>
        <Box sx={{pr:2}}>{footerLinks}</Box>
            </Box>
    </Box>
    )
}

export default signin
