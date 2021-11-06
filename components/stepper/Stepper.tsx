import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import cb from 'classnames'

import Button from '../common/input/Button';
import PersonalInfo from './PersonalInfo';
import ChooseRace from './ChooseRace';
import ChooseAvartar from './ChooseAvartar';
import { useRouter } from 'next/router'


const steps = ['', '', ''];

export default function HorizonStepper() {
  const [activeStep, setActiveStep] = React.useState(0);

  const router = useRouter();

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const toDashboard = () => {
    router.push('/dashboard')
  }

  return (
    <Box sx={{ marginTop: '40px', display: 'flex', flexDirection:'column', alignItems:'center'}}>
      <Stepper activeStep={activeStep} sx={{ width: '320px'}}>
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
          <ChooseRace />
        ) :
        (
          <ChooseAvartar />
        )
      }
      
      <React.Fragment>
        <Box sx={{ display: 'flex',justifyContent:'center'}}>
          { activeStep === steps.length - 1 ? 
              (
                <Button className={cb(
                  'p-2 mt-4 mb-20 w-64', 
                  'border-4 border-green-500 rounded-full', 
                  'text-white text-lg bg-black bg-opacity-50'
                  // eslint-disable-next-line react/no-unescaped-entities
                  )}
                  onClick = {() => toDashboard()}
                >I&apos;M READY</Button>
              ) 
                :
              (
                <Button onClick={handleNext} className={cb(
                  'p-2 mt-2 md:mt-auto mb-10 md:mb-20 w-64', 
                  'border-4 border-green-500 rounded-full shadow-2xl', 
                  'text-white text-lg bg-black bg-opacity-50'
                )}>NEXT STEP</Button>
              ) 
          }
        </Box>
      </React.Fragment>
    </Box>
  );
}
