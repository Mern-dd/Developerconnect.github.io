import React ,{props,useRef as inpel,useEffect} from 'react'
import { Avatar,Grid,IconButton,Stack,Box, useThemeProps, Card, CardHeader, CardContent, CardActions,Typography,Dialog, DialogActions, DialogContent, DialogTitle, TextField, DialogContentText, Button,Fab, Snackbar, Alert, InputLabel, InputAdornment,Input, Divider } from '@mui/material';
import { deepOrange, deepPurple } from '@mui/material/colors';
import UserdataForm from './UserdataForm';
import FavoriteIcon from '@mui/icons-material/Favorite';
import SendIcon from '@mui/icons-material/Send';
import LoginIcon from '@mui/icons-material/Login';
import AddIcon from '@mui/icons-material/Add';
import UserlistDesign from './UserlistDesign';
import Datas from './Data';
import { Form } from 'formik';
import Header from './Header';
import Routers from './Router';
import Addnewuser from './Addnewuser';
import CloseIcon from '@mui/icons-material/Close';
import { FormControl } from 'react-bootstrap';
import Search from "@mui/icons-material/Search";
import { Link } from "react-router-dom";
import ReactWhatsapp from 'react-whatsapp';
import { display } from '@mui/system';




function UserList() {
    
  
    const defaultValues = {
        name: "",
        image:"https://i.pinimg.com/originals/e3/94/47/e39447de921955826b1e498ccf9a39af.png",      
        email: "",
        content: ""
      };
      const initialValues = {
        name: " ",
        image:" ",      
        email: " ",
        content: " "
      };
    const[open,setOpen]=React.useState(false);
    const[inputs,setInputs]=React.useState(Datas)
        
    // const[temp,setTemp]=React.useState(defaultValues);
    const[opensnack,setOpensnack] =React.useState(false);
    const [searchtext, setSearchtext] = React.useState(null)
    const[openerrorsnack,setOpenerrorsnack]=React.useState(false);

    const onSubmit = values => {
        console.log('Form Data',values)
       // alert('\nForm Data Values : \n ' + values.name +"\n " )
    }

    const handleClick =()=>{
        setOpen(true);
    }
    const handleClose=()=>{
        setOpen(false);
    }

    const UpdateState=(temp)=>{
        
      //alert(temp)
       let tempuserdata=[...inputs]
       tempuserdata.push({
        name:temp.name,
        email:temp.email,
        content:temp.content,
        image:temp.image,
       })
       setInputs(tempuserdata)
       

    }
    // const handleChange=(e)=>{
    //     const name = e.target.id;
    //     const value = e.target.value;
    //     console.log(e.target.id+" value:"+value);
    //     setTemp(values=>({...values,[name]:value})) 
        
    // }
    const HandleDialog=(dialogdata,snackdata)=>{
        setOpen(dialogdata);
        setOpensnack(snackdata);
    }
    const Tochild={
        inputs : inputs,
        setOpenerrorsnack : setOpenerrorsnack,
        HandleDialog : HandleDialog,
        UpdateState : UpdateState,
        
    }
    
    
    
    return(
        <React.Fragment>
          
            
       
                 {/* <Stack direction={{ xs: 'column', lg: 'row' }} spacing={{ xs: 1, sm: 2, md: 4 }}>  */}
            
                <div id='searchbox' >
                    <Grid container spacing={3} >
                      <Grid item sm={8} style={{float:'left'}}>
                            <InputLabel htmlFor='searchdev'>Search Developer Here</InputLabel>
                            <Input  id='searchdev' onChange={e=>setSearchtext(e.target.value)} startAdornment={
                            <InputAdornment position='start'>
                            <Search></Search>
                            </InputAdornment>} ></Input>
                      </Grid> 
                      <Grid item sm={4} sx={{ alignSelf: 'end'}}>
                        
                            
                            <Link to='/register' aria-label="registerbutton" style={{textDecoration:'none',color:'inherit'}}> <Button variant='contained' sx={{marginTop:'10px'}}>Register</Button></Link>
                        
                      </Grid> 
                    </Grid>
                   
                 
                    
                </div>
                

                <div className='listinguser' data-test="users-list"  >
                {/* {searchTerm.length >1 ? inputs : searchResults} */}
                     {/* <Userlistcard data={inputs}></Userlistcard>  */}
                     
                { inputs.map((item)=>{
                    //If search text box has a no text then iterate all
                    //If serch text box has 
                    if (!searchtext || item.name.toLocaleLowerCase().indexOf(searchtext.toLocaleLowerCase()) > -1) {
                    console.log(item.name);
                    console.log(item.content);
                    return(
                        
                        <UserlistDesign name={item.name} image={item.image} email={item.email} content={item.content}></UserlistDesign>
                    );
                
               }
                }
            )
            }

                    <div className='Adduser'style={{ marginBottom: 25 }}>
                        <Card  sx={{width:300,height:240}} style={{alignItems:'center',textAlign: 'center'}}>
                        <CardContent sx={{marginTop:'50px'}}>
                                <Fab id='addnewuser' data-test='addnewuser' onClick={()=>setOpen(true)} color="primary" aria-label="add" style={{}}><AddIcon></AddIcon></Fab><br/><br/>
                                <Typography variant='body2' sx={{padding:'3px'}}>Add New User</Typography>
                            </CardContent>
                        </Card>
                    </div>

          

                </div>
        <div>
        

        <Dialog open={open}>
            <DialogTitle>Developer Details
            <IconButton style={{float:'right'}}><CloseIcon onClick={handleClose}></CloseIcon></IconButton>
            </DialogTitle>
            <DialogContent>
                <DialogContentText>
                    Please enter all the datas to add developer to this website
                </DialogContentText>      
                <Addnewuser {...Tochild}></Addnewuser>
          
            </DialogContent>


        </Dialog>

        <Snackbar open={opensnack} autoHideDuration={2000} onClose={()=>setOpensnack(false)}>
            <Alert severity='success' variant='filled'>
                Added new developer Successfully
            </Alert>
        </Snackbar>
        <Snackbar open={openerrorsnack} autoHideDuration={2000} onClose={()=>setOpenerrorsnack(false)}>
            <Alert severity='error' variant='filled'>
                Developer already exists
            </Alert>
        </Snackbar>

        <div  style={{position:"fixed",bottom:"100px",right:"100px"}}>
            <Fab id='fab' onClick={()=>setOpen(true)} color="primary" aria-label="mobileaddnewuser" style={{position:"fixed"}}>
                <AddIcon />
            </Fab>
          
        </div>

        
    </div>
    </React.Fragment>
       
        
    );
    
    
}


export default UserList 
 