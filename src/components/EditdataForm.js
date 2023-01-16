import { TextField,Button, Snackbar, Alert } from '@mui/material'
import React from 'react'
import { useFormik } from 'formik'
import * as yup from 'yup'

const onSubmit = values => {
    
   // alert('\nForm Data Values : \n ' + values.name +"\n " +values.email +"\n "+ values.content )
}

const validationScheme = yup.object({
    name : yup.string('Please Enter Name')
              .required('Name is required')
              .min(4,'Name should be atleast 4 characters'),
    image : yup.string('Please provide url')
                .required('Image URL is necessary'),
    email : yup.string('Please enter email id')
                .email('Provide valid email id')
                .required('Email id is required'),
    content : yup.string('Please enter about')
                 .min(20,'About content should be above 20 characters')
                 .required('About content is necessary')


})



function EditdataForm({UpdateState,handleclosefromchild,props}) {
   
    
    const formik = useFormik({
        initialValues : {
            name: props.name,
            image:"https://i.pinimg.com/originals/e3/94/47/e39447de921955826b1e498ccf9a39af.png",      
            email: props.email,
            content: props.content
        },
        validationSchema:validationScheme,
        onSubmit : (values) =>{
            props.name=values.name;
            props.email=values.email;
            props.content=values.content;
            props.image=values.image;
            handleclosefromchild(false,true)
            
        }
    })
  const handleClose=()=>{
    handleclosefromchild(false,false);
  }
  
    
    
    return (
       
        <div>
            <form onSubmit={formik.handleSubmit}>
                <TextField sx={{marginBottom:3}} autoFocus margin='dense' name='name' label='Name' type='text' fullWidth variant='standard' error={Boolean(formik.errors.name)} helperText={formik.errors.name} onChange={formik.handleChange} value={formik.values.name}/>
                <TextField sx={{marginBottom:3}} autoFocus margin="dense" name='image' label="Avatar url" type="text" fullWidth variant="standard" error={Boolean(formik.errors.image)} helperText={formik.errors.image} onChange={formik.handleChange} value={formik.values.image}/>
                <TextField sx={{marginBottom:3}} autoFocus margin="dense" name='email' label="Email Address" type="email" fullWidth variant="standard" error={Boolean(formik.errors.email)} helperText={formik.errors.email} onChange={formik.handleChange} value={formik.values.email}/>
                <TextField sx={{marginBottom:3}} margin='dense' fullWidth name='content' label='About you in few words' type='text' variant='standard' error={Boolean(formik.errors.content)} helperText={formik.errors.content} onChange={formik.handleChange} value={formik.values.content}/>
                <Button type='submit' variant='contained' sx={{margin:'30px',marginLeft:'230px'}} >Submit</Button>
           
            </form>
            
        </div>
    )
}

export default EditdataForm
