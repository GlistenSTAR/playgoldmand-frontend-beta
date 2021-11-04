import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import cb from 'classnames'

import Button from '../common/input/Button';
import PersonalInfo from './PersonalInfo';
import ChoosePlace from './ChoosePlace';
import ChooseAvartar from './ChooseAvartar';

const steps = ['', '', ''];

export default function HorizonStepper() {
  const [activeStep, setActiveStep] = React.useState(0);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  return (
    <Box sx={{ marginTop: '69px', display: 'flex', flexDirection:'column', alignItems:'center'}}>
      <Stepper activeStep={activeStep} sx={{width: '90%'}}>
        {steps.map((label, index) => {
          const stepProps: { completed?: boolean } = {};
          const labelProps: {
            optional?: React.ReactNode;
          } = {};
          return (
            <Step key={index} {...stepProps} className="color-white bg-red">
              <StepLabel {...labelProps}></StepLabel>
            </Step>
          );
        })}
      </Stepper>

      {
       activeStep ===0?
       (
        <PersonalInfo />  
       ) : activeStep === 1 ? 
        (
          <ChoosePlace />
        ) :
        (
          <ChooseAvartar />
        )
      }
      
      <React.Fragment>
        <Box sx={{ display: 'flex',justifyContent:'center', pt: 2 }}>
          { activeStep === steps.length - 1 ? 
              (
                <Button onClick={handleNext} className={cb(
                  'p-2 mt-14 mb-20 w-64', 
                  'border-2 border-green-500 rounded-full', 
                  'text-white bg-black bg-opacity-25'
                // eslint-disable-next-line react/no-unescaped-entities
                )}>I'M READY</Button>
              ) 
                :
              (
                <Button onClick={handleNext} className={cb(
                  'p-2 mt-14 mb-20 w-64', 
                  'border-2 border-green-500 rounded-full', 
                  'text-white bg-black bg-opacity-25'
                )}>NEXT STEP</Button>
              ) 
          }
        </Box>
      </React.Fragment>
    </Box>
  );
}