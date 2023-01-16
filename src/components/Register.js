import React from 'react'
import { Step, StepLabel, Stepper, Typography,Button,Fab } from '@mui/material'
import Succesful from './Forms/Succesful';
import PaymentDetails from './Forms/DeveloperDetails';
import PersonalDetails from './Forms/PersonalDetails';
import Review from './Forms/Review';
import { Link } from 'react-router-dom';

import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';

function Register() {
    const steps = ['Personal Detail','Payment Details']
    const[activeStep,setActiveStep]=React.useState(0);
    const islastStep = activeStep === steps.length-1;
    const [orientation,setOrientation] = 'horizontal'

    const handleNextStep =()=>{
        
        setActiveStep(activeStep+1);

    }
    const handlePrevStep =()=>{
        setActiveStep(activeStep-1);
    }
    const passtochild={
        activeStep:activeStep,
        setActiveStep : setActiveStep
    }

    function rendercomp(activeStep){
        switch(activeStep) 
        {
            case 0 :
                
                return <PersonalDetails {...passtochild}/>
            
            case 1 :
                return <PaymentDetails {...passtochild}/>

        }
    }
    const changeorientation = ()=>{

        setOrientation='vertical'
    }


    // steps.length => 3 { DD : 1, PD : 2 , RD : 3 }

    // iteration :
    //     steps[0] => DD
    //     steps[1] => PD
    //     steps[2] => RD

    return (
        <div id='stepperstyle'>
            {/* <Typography variant='h4' align='center'>Connect</Typography> */}
            <div id='insidestepper'>
            <Stepper activeStep={activeStep} sx={{marginBottom:'40px',marginTop:'30px'}}>
                {steps.map(item=>(
                    <Step>
                        <StepLabel>{item}</StepLabel>
                        
                    </Step>
                ))}
            </Stepper>
            <React.Fragment>
                {activeStep===steps.length ? (
                    <Succesful/>
                ) : (
                    <div>
                        {rendercomp(activeStep)}
                        {/* <Button onClick={handleNextStep}>{islastStep ? 'Finish' : 'Next'}</Button>
                        {activeStep!=0 && (
                            <Button onClick={handlePrevStep}>Back</Button>
                        )} */}
                        <div  style={{position:"fixed",bottom:"100px",right:"100px"}}>
                             <Link to='/'> 
                                <Fab open='true'color="primary"  style={{position:"fixed"}}>
                                    <ArrowBackIosIcon />
                                </Fab>
                            </Link>
                        </div>
                    </div>
                    
                    
                )}

            </React.Fragment>
            </div>
        </div>
        // <React.Fragment>
        //     <Typography align='center' variant='h4'> Connect </Typography>
        //     <Stepper activeStep={activeStep}>
        //         {steps.map(item=>
        //             <Step>
        //             <StepLabel>{item}</StepLabel>
        //             </Step> 
        //         )}
        //     </Stepper>
        //     <React.Fragment>
        //         {activeStep===lastStep ? 
        //         (<Succesful/>) 
        //         : 
        //         (
        //             <div>
        //              {rendercomp(activeStep)}
        //              <Button onClick={handleNextStep}> {activeStep === lastStep ? 'Finish' : 'Next'}</Button>
        //              { activeStep !==0 && (
        //             <Button onClick={handlePrevStep}>
        //                 Back
        //             </Button>
        //              )}
        //             </div>

        //         )
        //         }
        //     </React.Fragment>
        // </React.Fragment>
    )
}

export default Register
