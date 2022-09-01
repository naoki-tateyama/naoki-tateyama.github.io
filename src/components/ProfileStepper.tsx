import React, { ReactNode, useState } from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import StepContent from '@mui/material/StepContent';

type Step = {
  id: string,
  label: string | ReactNode,
  description: string | ReactNode
}
const onClickStr = (id: string) => {
  window.location.hash = id
}
const steps = [
  {
    id: 'job-experience',
    label: <Typography style={{cursor: 'pointer'}}>Job experience</Typography>,
    description: <Box></Box>
  },{
    id: 'education',
    label: <Typography style={{cursor: 'pointer'}}>Education</Typography>,
    description: <Box></Box>
  },{
    id: 'publications',
    label: <Typography style={{cursor: 'pointer'}}>Publications</Typography>,
    description: <Box>
      <Typography style={{cursor: 'pointer'}} onClick={()=>onClickStr('journal')} gutterBottom>Journal article</Typography>
      <Typography style={{cursor: 'pointer'}} onClick={()=>onClickStr('int-conf')} gutterBottom>International conference</Typography>
      <Typography style={{cursor: 'pointer'}} onClick={()=>onClickStr('dom-conf')} gutterBottom>Domestic conference</Typography>
    </Box>
  },{
    id: 'skills',
    label: <Typography style={{cursor: 'pointer'}}>Skills</Typography>,
    description: <Box>
      <Typography style={{cursor: 'pointer'}} onClick={()=>onClickStr('programming')} gutterBottom>Programming</Typography>
      <Typography style={{cursor: 'pointer'}} onClick={()=>onClickStr('certificates')} gutterBottom>Certificates</Typography>
  </Box>
  }
]

function ProfileStepper(){
  const [activeStep, setActiveStep] = useState(0);
  const onClickStep = (i: number, step: Step) => {
    setActiveStep(i);
    window.location.hash = step.id;
  }

  return (
    <Box>
      <Box sx={{ minWidth: 200, top: '20px', position: 'sticky' }} mr={2}>
        <Stepper activeStep={activeStep} orientation="vertical">
          {steps.map((step,i)=>{
            return (
              <Step key={i} active={true}>
                <StepLabel icon={<></>}
                  onClick={()=>onClickStep(i, step)}>
                  {step.label}
                </StepLabel>
                <StepContent>
                  {step.description}
                </StepContent>
              </Step>
            )
          })}
        </Stepper>
      </Box>
    </Box>
  )
}
export default ProfileStepper