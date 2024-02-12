import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import StepContent from '@mui/material/StepContent';
import { Button } from '@nextui-org/react';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import { Spacer } from '@nextui-org/react';

const steps = [
  {
    label: 'File One Upload',
    description: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Praesentium rerum exercitationem sapiente ratione qui odit beatae molestias officiis facilis cupiditate!`,
  },
  {
    label: 'File Two Upload',
    description:
      'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Praesentium rerum exercitationem sapiente ratione qui odit beatae molestias officiis facilis cupiditate!',
  },
  {
    label: 'Click start AIR and See the result',
    description: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Praesentium rerum exercitationem sapiente ratione qui odit beatae molestias officiis facilis cupiditate!`,
  },
];

export default function VerticalLinearStepper() {
  const [activeStep, setActiveStep] = React.useState(0);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    <Box sx={{ maxWidth: 400 }}>
      <Stepper activeStep={activeStep} orientation='vertical'>
        {steps.map((step, index) => (
          <Step key={step.label}>
            <StepLabel
              optional={
                index === 2 ? (
                  <Typography variant='caption'>Last step</Typography>
                ) : null
              }
            >
              {step.label}
            </StepLabel>
            <StepContent>
              <Typography>{step.description}</Typography>
              <Box sx={{ mb: 2 }}>
                <div className='flex'>
                  <Button size='sm' color='primary' onClick={handleNext}>
                    {index === steps.length - 1 ? 'Finish' : 'Continue'}
                  </Button>
                  <Spacer x={2} />
                  <Button
                    size='sm'
                    color='default'
                    disabled={index === 0}
                    onClick={handleBack}
                  >
                    Back
                  </Button>
                </div>
              </Box>
            </StepContent>
          </Step>
        ))}
      </Stepper>
      {activeStep === steps.length && (
        <Paper square elevation={0} sx={{ p: 3 }}>
          <Typography>All steps completed - you&apos;re finished</Typography>
          <Button onClick={handleReset} sx={{ mt: 1, mr: 1 }}>
            Reset
          </Button>
        </Paper>
      )}
    </Box>
  );
}
