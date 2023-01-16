import { TextField, Grid,Button, InputLabel,CircularProgress } from '@mui/material'
import { useFormik } from 'formik'
import React from 'react'
import * as yup from 'yup'

const validationSchema = yup.object({
    cardnumber : yup.string('Name is Required')
                    .min(16,'Invalid card number')
                    .max(16,'Invalid card number')
                    .required('Card Number is required'),
    expiry: yup.string('Enter Expiry Date')
                .required('Expiry Date is required'),
    ccv : yup.string('Enter CCV number')
             .min(3,'CCV contains 3 number only')
             .max(3,'CCV contains 3 number only')
             .required('CCV is required')

}

)

function PaymentDetails({activeStep,setActiveStep}) {
    const isSubmitting =false
    const formik = useFormik({
        initialValues : {
            name : '',
            expiry:'',
            ccv:''

        },
        validationSchema : validationSchema,
        onSubmit : (values)=>{
            setActiveStep(activeStep+1)
            isSubmitting=true
        }
    })
    const handlePrev=()=>{
        setActiveStep(activeStep-1)
     }
    
    return (
        <div id='PDstyles'>
            <form onSubmit={formik.handleSubmit}>
                <Grid container spacing={3}>
                    <Grid item xs={12} sm={12}>
                        <TextField name="cardnumber" label='Card Number' type='number' margin='dense' fullWidth  autoFocus onChange={formik.handleChange}  value={formik.values.cardnumber} error={Boolean(formik.errors.cardnumber)} helperText={formik.errors.cardnumber}/>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        
                        <TextField label='Expiry Date' name="expiry" type='date' margin='dense' fullWidth onChange={formik.handleChange}  value={formik.values.expiry} error={Boolean(formik.errors.expiry)} helperText={formik.errors.expiry} />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField name="ccv" label='CVV Number' type='number' margin='dense' fullWidth onChange={formik.handleChange}  value={formik.values.ccv} error={Boolean(formik.errors.ccv)} helperText={formik.errors.ccv}/>
                    </Grid>
                    <Grid item xs={6} sm={6}>
                <Button onClick={handlePrev} variant='contained' >Back</Button>
                </Grid>
                <Grid item xs={6} sm={6}>
                <Button type='submit'  variant='contained' >Finish</Button>
                {isSubmitting && (
                      <CircularProgress
                        size={24}
                      />
                    )}
                </Grid>
                </Grid>
            </form>
        </div>
    )
}

export default PaymentDetails
