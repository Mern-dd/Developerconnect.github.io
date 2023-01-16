import React from 'react'
import { Alert, Avatar, Card, CardActions, CardContent, Grid, CardHeader,Snackbar, IconButton, Tooltip, Typography,Button,Rating, DialogTitle, DialogContent, DialogContentText, DialogActions,Dialog} from '@mui/material'
import FavoriteIcon from '@mui/icons-material/Favorite';
import SendIcon from '@mui/icons-material/Send';
import LoginIcon from '@mui/icons-material/Login';
import { Stack } from '@mui/system';
import Dialogbox from './Dialogbox';
import CloseIcon from '@mui/icons-material/Close';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import Datas from './Data';
import UserList from './UserList';
import UserdataForm from './UserdataForm';
import EditdataForm from './EditdataForm';


const handleLogin =()=>{
   console.log('Hi');
    return(
        <Dialogbox/>
    )
}

function UserlistDesign(parentcomp) {

   
 
  const defaultValues ={
    name:parentcomp.name,
    image:parentcomp.image,
    content:parentcomp.content,
    email:parentcomp.email
   }


   const[props,setProps]=React.useState(defaultValues); 
 
   const[openSnack,setopenSnack]=React.useState(false);
   const[openconnect,setOpenconnect]=React.useState(false);
   const[openedit,setOpenedit]=React.useState(false);
   const number = '9385705274';
   const message = 'Hi ' + props.name + ' ! I would like to connect with you, to learn more about technologies';
   
   let datas=props; 
  
   const handleButton=()=>{
    setOpenconnect(true);
        
   }
   const handleClose=(e)=>{
    
    e.target.
    setOpenconnect(false);
   }

   const handleEdit=()=>{
        setOpenedit(true);
   }
    
  const handleclosefromchild=(dialogdata,snackdata)=>{
    setOpenedit(dialogdata)
    setopenSnack(snackdata)
  }

  const UpdateState=()=>{

  }
  const Edituserprops= {
    props : props,
    handleclosefromchild:handleclosefromchild,
    UpdateState:UpdateState
   
    
    
}
const handleEditClose=()=>{
    setOpenedit(false)
    
}
const handlesnackclose =()=>{
    setopenSnack(false);
  }

  const handleConnect =()=>{
    const URL = 'https://wa.me';
    let url = `${URL}/${number}?text=${encodeURI(message)}`;
    window.open(url)
  }
 

    return (
        <div class='userlist' style={{ marginBottom: 25 }}>
             
             
            <Card sx={{width:300,height:240}}>
      
                <CardHeader avatar={<Avatar src={props.image}></Avatar>} title={props.name} subheader={props.email} ></CardHeader>
                <CardContent>
                    <Typography variant='body2'>{props.content} </Typography>
                </CardContent>
                <CardActions style={{alignItems:'center'}}>
                    <Tooltip title='Favourite'><IconButton ><FavoriteIcon id='fav'></FavoriteIcon></IconButton></Tooltip>
                    <Tooltip title='Edit'><IconButton onClick={handleEdit}><EditIcon/></IconButton></Tooltip>
                   <Tooltip title='Remove'><IconButton><DeleteIcon></DeleteIcon></IconButton></Tooltip>
                  {/* // <Tooltip title='Connect'><Button>Connect</Button></Tooltip> */}
                <Button style={{right:"-50px"}} color='primary' onClick={handleConnect}>  Connect </Button>
                </CardActions>
              
                <Dialog open={openconnect} onClose={handleClose}>
                    <DialogTitle>
                        Connect
                        <IconButton style={{right:"0px"}}><CloseIcon onClick={handleClose}></CloseIcon></IconButton>
                        </DialogTitle>
                    <DialogContent>
                        <DialogContentText>Connect with {props.name} ( {props.email} )
                        </DialogContentText>
                        {/* <UserdataForm  {...datas}></UserdataForm> */}
                        <UserdataForm  {...datas}></UserdataForm>
                    </DialogContent>
                    <DialogActions>
                        <IconButton><CloseIcon onClick={handleClose}></CloseIcon></IconButton>
                    </DialogActions>
                </Dialog>

                <Dialog open={openedit}>
                    <DialogTitle>
                        <b>Edit Users</b>
                        <IconButton style={{float:'right'}}><CloseIcon onClick={handleEditClose}></CloseIcon></IconButton>
                        </DialogTitle>
                    <DialogContent>
                        
                        {/* <EditdataForm {...datas} ></EditdataForm> */}
                        <EditdataForm {...Edituserprops}></EditdataForm>
                    </DialogContent>
                   
                </Dialog>
                <Snackbar open={openSnack} onClose={handlesnackclose} autoHideDuration={2000}>
                    <Alert severity='success' variant='filled'>Edited Successfully</Alert>
            </Snackbar>
                
               
            </Card>
         
            
            
            
            
        </div>
        
        
    );
    
};

export default UserlistDesign;
