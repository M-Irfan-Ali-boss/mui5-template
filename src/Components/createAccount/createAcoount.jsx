import React from 'react'
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import Logo from '../../images/Vector.png'
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import InputAdornment from '@mui/material/InputAdornment';

const card = (
    <React.Fragment>
      <CardContent sx={{width:688,}}>
        <Typography sx={{ fontSize: 18,fontWeight: 'bold' ,display:'flex',alignItems:'center',color:'#212121'}} variant="h4" color="text.secondary" gutterBottom>
        <Avatar alt="Logo" src={Logo} sx={{mr:1}} />
          streamify
        </Typography>
        <Typography sx={{fontSize:24,mt:3,fontWeight: 500}} variant="h1">
        Create your Streamify Account
        </Typography>
        <Box sx={{mt:3}}>
        <TextField id="outlined-basic" label="First name" size="small" variant="outlined" defaultValue="Kate" sx={{width:323}}/>
        <TextField id="outlined-basic" defaultValue="Berkshire" label="Last name" size="small"  variant="outlined" sx={{width:323,ml:1}}/>
        </Box>
        <Box sx={{mt:3}}>
        <TextField id="outlined-basic" fullWidth label="fullWidth" label="Email address" size="small" defaultValue="kate@gmail.com" variant="outlined" />
        </Box>
        <Box sx={{mt:3}}>
        <TextField
          id="outlined-basic" error
          id="outlined-error-helper-text" label="Password" size="small" variant="outlined" sx={{width:323}}
          type='password'
          defaultValue="Value"
          helperText="Passwords must match"
          InputProps={{
            endAdornment: <InputAdornment position="end"><RemoveRedEyeIcon/></InputAdornment>,
          }}
        />
        <TextField id="outlined-basic" error
          id="outlined-error-helper-text" label="Password" size="small"  variant="outlined" sx={{width:323,ml:1}} defaultValue="Value"
          InputProps={{
            endAdornment: <InputAdornment position="end"><RemoveRedEyeIcon/></InputAdornment>,
          }}
          />
        </Box>
        <FormGroup sx={{mt:4}}>
      <FormControlLabel sx={{color:"#0A56A3"}} control={<Checkbox defaultChecked />} label=" I agree to the Terms of Service and Privacy Policy." />
      <FormControlLabel control={<Checkbox/>} label="I would like to receive emails about new features and news at Streamify." />
    </FormGroup>
        <Box sx={{mt:5,display:'flex',justifyContent:'space-between'}}>
            <Button sx={{borderRadius:'20px',fontWeight:'bold',color:"#0A56A3"}}>SIGN IN INSTEAD</Button>
            <Button variant="contained" sx={{borderRadius:'20px',fontWeight:'bold'}} style={{backgroundColor:"#0A56A3"}}>NEXT</Button>
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
  
function CreateAcoount() {
    return (
        <Box sx={{ minWidth: 275,display: 'flex',justifyContent: 'center',alignItems: 'center',pt:6 }}>
        <Box>
        <Card variant="outlined" sx={{pl:3,pr:5}}>{card}</Card>
        <Box sx={{pr:2}}>{footerLinks}</Box>
            </Box>
    </Box>
    )
}


export default CreateAcoount
