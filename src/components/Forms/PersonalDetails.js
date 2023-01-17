// import React from 'react'
// import { useFormik } from 'formik'
// import * as yup from 'yup'
// import { TextField } from '@mui/material'
// import { Button } from 'react-bootstrap'

// const validationSchema = yup.object({
//     firstname : yup.string('Please enter your first name')
//                    .min(4,'Name should be atleast 4 character')
//                    .required('First Name is required'),
//     lastname : yup.string('Please enter your last name'),
//     phonenumber : yup.string('Please enter your phone number')
//                      .min(10,'Phone number shoule be of 10 numbers')
//                      .max(10,'Phone number shoule be of 10 numbers')
//                      .required('Phone number is required')
// })
// function PersonalDetails({activeStep,setActiveStep}) {
//     const formik = useFormik({
//         initialValues : {
//             firstname : 'gg',
//             lastname : '',
//             phonenumber : '',
//             city : '',
//             country : '',
//             address : '',
//             state : ''
//         },
//         validationSchema : validationSchema,
//         onSubmit : (values)=>{
//             setActiveStep(activeStep+1)
//             alert(values)
//         }

//     })
//     return (
//         <div>
//             <form onSubmit={formik.handleSubmit}>
//                 <TextField sx={{marginBottom:3}} autoFocus margin='dense' name='name' label='Name' type='text' fullWidth variant='standard' error={Boolean(formik.errors.firstname)} helperText={formik.errors.firstname} onChange={formik.handleChange} value={formik.values.firstname}/>
                
//                 <Button type='submit'>Next</Button>
//             </form>
//         </div>
//     )
// }

// export default PersonalDetails

import { TextField,Button, Snackbar,MuiPickersUtilsProvider,Radio ,Alert,Grid, InputLabel, Select, Menu, MenuItem, FormHelperText,KeyboardDatePicker, RadioGroup, FormControlLabel } from '@mui/material'
import React from 'react'
import { useFormik } from 'formik'
import * as yup from 'yup'
import { FormControl, FormLabel } from 'react-bootstrap'


const onSubmit = values => {
    
    alert('\nForm Data Values : \n ' + values.name +"\n " +values.email +"\n "+ values.content )
}

const validationScheme = yup.object({
    firstname : yup.string('Please Enter Name')
              .required('Name is required')
              .min(4,'Name should be atleast 4 characters'),
    lastname : yup.string('Please Enter Name')
              .required('Name is required')
              .min(4,'Name should be atleast 4 characters'),
    email : yup.string('Please enter email id')
                .email('Provide valid email id')
                .required('Email id is required'),
    gender : yup.string('Select Gender')
                .required('Gender is required'),
    coursetype : yup.string('Course Type is required'),
    address : yup.string('Please enter address')
                 .required('Address is necessary')



})



function PersonalDetails({activeStep,setActiveStep}) {
   
    const [handle, setHandle] = React.useState('Female');
    const handleSelect = event => {
        setHandle(event.target.value);
    };
    const formik = useFormik({
        initialValues : {
            firstname: '',
            lastname:'',
            email: '',
            address: '',
            gender:'',
            coursetype:''
        },
        validationSchema:validationScheme,
        onSubmit : (values) =>{
            setActiveStep(activeStep+1)
            alert(values)
            
        }
    })
  const handlePrev=()=>{
     setActiveStep(activeStep-1)
   
  }
  
  const products = ["Product 1", "Product 2", "Product 3", "Product 4"];
  const productOptions = products.map((product, key) => (
    <option value={product} key={key}>
      {product}
    </option>
  ));
    return (
       
        <div id='PDstyles'>
            
            <form onSubmit={formik.handleSubmit}>
            <Grid container spacing={3}>
                <Grid item xs={12} sm={6} >
                <TextField sx={{marginBottom:3}} fullWidth autoFocus margin='dense' name='firstname' label='First Name' type='text'  variant='standard' error={Boolean(formik.errors.firstname)} helperText={formik.errors.firstname} onChange={formik.handleChange} value={formik.values.firstname}/>
                </Grid>
                <Grid item xs={12} sm={6} >
                <TextField sx={{marginBottom:3}} fullWidth  margin='dense' name='lastname' label=' Last Name' type='text'  variant='standard' error={Boolean(formik.errors.lastname)} helperText={formik.errors.lastname} onChange={formik.handleChange} value={formik.values.lastname}/>
                </Grid>
                <Grid item xs={12} sm={12}>
                <TextField sx={{marginBottom:3}}  margin="dense" name='email' label="Email Address" type="email" fullWidth variant="standard" error={Boolean(formik.errors.email)} helperText={formik.errors.email} onChange={formik.handleChange} value={formik.values.email}/>
                </Grid>
                <Grid item xs={12} sm={12}>
               
                <TextField select sx={{marginBottom:3,minWidth:'50px'}}  margin="dense" name='gender' label="Gender" fullWidth variant="standard" error={Boolean(formik.errors.gender)} helperText={formik.errors.gender} onChange={formik.handleChange} value={formik.values.gender}>
                    <MenuItem key='male' id='malegender' value='male'>Male</MenuItem>
                    <MenuItem key='female' id='femalegender' value='female'>Female</MenuItem>
                    <MenuItem key='pns' id='pns' value='pns'>Prefer not to say</MenuItem>
                </TextField>
                </Grid>
                {/* <Grid item xs={12} sm={6}>
                    
                        <FormLabel name='coursetype'>Type of Course</FormLabel>
                        <RadioGroup row name='coursetype'  onChange={formik.handleChange('coursetype')} value={formik.values.coursetype} error={Boolean(formik.errors.coursetype)} helperText={formik.errors.coursetype} aria-labelledby="demo-radio-buttons-group-label" >
                            <FormControlLabel value='Online' checked  control={<Radio/>} label='Online' />
                            <FormControlLabel value='In Office' label='In Office' control={<Radio/>} />
                        </RadioGroup>
                        <FormHelperText>{formik.errors.coursetype}</FormHelperText>
                    
             
                </Grid> */}
                <Grid item xs={12} sm={12}>
                <TextField sx={{marginBottom:3}} margin='dense' fullWidth name='address' label='Adress Line' type='text' variant='standard' error={Boolean(formik.errors.address)} helperText={formik.errors.address} onChange={formik.handleChange} value={formik.values.address}/>
                </Grid>
               
                <Grid id='buttonnxt' item xs={12} sm={12}>
                <Button  type='submit'  variant='contained' >Next </Button>
                </Grid>
                
           
            </Grid>
            </form>
            
        </div>
    )
}

export default PersonalDetails
