import { Dialog, DialogActions, DialogContent, DialogTitle, TextField } from '@mui/material';
import React from 'react'

function Dialogbox() {
    const[open,setOpen]=React.useState(false);

    const handleClick =()=>{
        setOpen(true);
    }
    const handleClose=()=>{
        setOpen(false);
    }
    return (
        <div>
            <button variant="outlined" onClick={handleClick}></button>
            <Dialog open={open}>
                <DialogTitle>Add new Developer</DialogTitle>
                <DialogContent>
                    <TextField variant="standard"></TextField>
                </DialogContent>
                <DialogActions></DialogActions>
            </Dialog>
        </div>
        
    )
}

export default Dialogbox
