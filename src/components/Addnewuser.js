import { useFormik } from 'formik';
import React from 'react'
import * as yup from 'yup'
import { DialogTitle, DialogContent, DialogContentText, DialogActions,Dialog,TextField,Button} from '@mui/material'

const validationSchema = yup.object(
    {
        name:yup.string('Please enter name')
                .min(4,'Name should be atleast of 4 characters')
                .required('Name is required'),
        email : yup.string('Please enter email id')
                    .email('Enter valid email id')
                    .required('Email id id is required'),
        image : yup.string('Please enter image URL')
                    .required('Image URL is required'),
        content : yup.string('Please enter about')
                    .min(20,'About content should be above 20 characters')
                    .max(50,'About content should be lesser than 50 character ')
                    .required('About content is necessary')
   
    }
)

function Addnewuser({inputs,setOpenerrorsnack,HandleDialog,UpdateState}) {
   
    
    const[open,setOpen] = React.useState(false);
    const formik = useFormik({
        initialValues : {
            name: "",
            image:"https://i.pinimg.com/originals/e3/94/47/e39447de921955826b1e498ccf9a39af.png",      
            email: "",
            content: ""
        },
        validationSchema : validationSchema,
        onSubmit : (values)=>{
            let flag =false;
            for(var i in inputs){
                if(inputs[i].email==values.email)
                {
                    flag=true;
                    setOpenerrorsnack(true)
                    values.email='';
                    values.name='';
                    
                }
            }
            if(!flag)
            {
            HandleDialog(false,true)
            UpdateState(values)
            }
        }
    })
    return (
        <div>

           
                <form onSubmit={formik.handleSubmit}>
                <TextField sx={{marginBottom:3}} autoFocus margin='dense' id='name' label='Name' type='text' fullWidth variant='standard' onChange={formik.handleChange} value={formik.values.name} error={Boolean(formik.errors.name)} helperText={formik.errors.name} />
                <TextField sx={{marginBottom:3}} autoFocus margin="dense" id='image' label="Avatar url" type="text" fullWidth variant="standard" onChange={formik.handleChange} value={formik.values.image} error={Boolean(formik.errors.image)} helperText={formik.errors.image} />
                <TextField sx={{marginBottom:3}} autoFocus margin="dense" id='email' label="Email Address" type="email" fullWidth variant="standard" onChange={formik.handleChange} value={formik.values.email} error={Boolean(formik.errors.email)} helperText={formik.errors.email} />
                <TextField sx={{marginBottom:3}} margin='dense' fullWidth id='content' label='About you in few words' type='text' variant='standard' onChange={formik.handleChange} value={formik.values.content} error={Boolean(formik.errors.content)} helperText={formik.errors.content} />
                
                <Button type ='submit' variant='contained' sx={{margin:'30px',marginLeft:'230px'}}>Submit</Button>
                </form>

   
        </div>
    )
}

export default Addnewuser
