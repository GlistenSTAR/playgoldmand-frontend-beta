import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import cb from 'classnames'

import Button from '../common/input/Button';
import PersonalInfo from './PersonalInfo';
import ChooseRace from './ChooseRace';
import { useRouter } from 'next/router'

import { useMutation } from 'react-query'
import { fetchRegister } from '../../services/AuthService'

const steps = ['', ''];

export default function HorizonStepper(props) {
  const ual = props['ual'] ? props['ual'] : {'activeUser': null};
  const activeUser = ual['activeUser'];
  const accountName = activeUser ? activeUser['accountName'] : null;
  const [activeStep, setActiveStep] = useState(0);
  const [selected, setSelected] = useState(false);
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [checkAge, setCheckAge] = useState(false);
  const [checkTerms, setCheckTerms] = useState(false);

  const router = useRouter();

  const {
    isLoading,
    error,
    mutate: register,
  } = useMutation(fetchRegister, {
    onSuccess: response =>
      {
        setActiveStep((prevActiveStep) => prevActiveStep + 1)
      },
    onError: console.log('register error')
  })

  const handleRegister = () => {
    checkAge && checkTerms && register({ accountName:accountName, username: username, email: email })
  }


  const toDashboard = () => {
    router.push('/dashboard')
  }

  return (
    <Box sx={{ marginTop: '40px', display: 'flex', flexDirection:'column', alignItems:'center'}}>
      <Stepper activeStep={activeStep} sx={{ width: '200px'}}>
        {steps.map((label, index) => {
          const stepProps = {};
          const labelProps = {};
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
        <PersonalInfo
          username={username}
          setUsername={setUsername}
          email={email}
          setEmail={setEmail}
          checkAge={checkAge}
          setCheckAge={setCheckAge}
          checkTerms={checkTerms}
          setCheckTerms={setCheckTerms}
        />
       ) :
        (
          <ChooseRace selected={selected} setSelected={setSelected}/>
        )
      }
      
      <React.Fragment>
        <Box sx={{ display: 'flex',justifyContent:'center'}}>
        { activeStep === steps.length - 1 ? 
            (
              <Button className={cb(
                'p-2 mt-4 md:mt-4 mb-10 md:mb-12 w-64',  
                'border-4 border-green-500 rounded-full shadow-2xl', 
                'text-white text-lg bg-black bg-opacity-50'
                // eslint-disable-next-line react/no-unescaped-entities
                )}
                onClick = {() => selected && toDashboard()}
              >
                {selected? `I'M READY` : `NEXT STEP`}
              </Button>
            ) 
              :
            (
              <Button onClick={handleRegister} className={cb(
                'p-2 mt-4 md:mt-4 mb-10 md:mb-12 w-64', 
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
