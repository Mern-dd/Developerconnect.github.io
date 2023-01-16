import React from 'react'
import { useFormik } from 'formik'
import UserList from './UserList'
import { TextField,Button, Snackbar, Alert } from '@mui/material'
import * as yup from 'yup'


const initialValues = {
    name: UserList.name,
    email:'',
    phone:''
}

const ValidationScheme = yup.object({
    name : yup.string('Please enter name')
              .min(5,'Name should be atleast 5 characters')
              .required('Name is required'),

    email : yup.string('Please enter email')
               .email('Enter a valid email id')
               .required('Email is required'),

    phone : yup.string('Please enter phone nummber')
                .min(10,'Invalid Phone number')
                .max(10,'Invalid Phone number')
                .required('Phone number is required')
})




// const validate = values => {
//     let errors = {}

//     if(!values.name){
//         errors.name = 'Required'
//     }

//     if(!values.email){
//         errors.email = 'Required'
//     }

//     if(!values.phone){
//         errors.phone = 'Required'
//     }

//     return errors
// }

function UserdataForm(props) {

    const[openSnack,setopenSnack]=React.useState(false);

    
    const formik = useFormik({
        initialValues : {
            name: props.name,
            email:props.email,
            phone:''
        },
        validationSchema:ValidationScheme,
        onSubmit :
        (values) => {
            if(formik.errors)
            {
                setopenSnack(true)
            }
       
        alert('Form Data',values)
        alert('\nForm Data Values : \n ' + values.name +"\n " +values.email +"\n "+ values.phone )
        }
    })
    

   // console.log('Form Values', formik.values);
   const handleClose = ()=>{
    setopenSnack(false);
  };

    return (
        <div>
        
            <form onSubmit={formik.handleSubmit} >
                
                
                <TextField  margin='dense' name='name'  label='Name' type='text'variant='outlined' value={formik.values.name} fullwidth error={Boolean(formik.errors.name)} helperText={formik.errors.name} onChange={formik.handleChange}/>
                <TextField  label="Email Id" variant="outlined" type='email' name='email' onChange={formik.handleChange} error={Boolean(formik.errors.email)} helperText={formik.errors.email} value={formik.values.email}/>
                <TextField margin='dense' name='phone' label='Phone' type='number' variant='outlined' value={formik.values.phone} error={Boolean(formik.errors.phone)} helperText={formik.errors.phone} onChange={formik.handleChange}   />
                
                <Button type='submit' >Submit</Button>
                
                <Snackbar open={openSnack} autoHideDuration={1000}>
                    <Alert severity="success" variant='filled' onClose={handleClose}> Connected with {props.name}</Alert>
                </Snackbar>

     
            </form>

        </div>
        
    )
}

export default UserdataForm
