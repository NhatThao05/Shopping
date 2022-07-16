import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import {Box, MobileStepper, Paper, Typography, Button} from '@mui/material';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';
import {MarketingContainer} from "../../styles/marketing"

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const images = [
  {
    label: 'Workout with a Personal Trainer in a 1-on-1 format.',
    imgPath:
      'https://citigym.com.vn/storage/uploads/asffs-1905x834.jpg',
  },
  {
    label: 'KickFit is a special sport that combines traditional boxing.',
    imgPath:
      'https://citigym.com.vn/storage/uploads/12-4-1905x834.jpg',
  },
  {
    label: 'Super fast fat loss exercises are an indispensable part for those who want to lose fat.',
    imgPath:
      'https://citigym.com.vn/storage/uploads/minh-tu-plank.jpg',
  },
  {
    label: 'BodyPump is an exercise for the entire body muscle group combined with weights and music.',
    imgPath:
      'https://citigym.com.vn/storage/uploads/untitled-7-5-1905x834.jpg',
  },
];


export default function Marketing() {
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = images.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStepChange = (step) => {
    setActiveStep(step);
  };

  return (
    <MarketingContainer>

    <Box sx={{ maxWidth: 1100, flexGrow: 1, marginTop: 10, justifyContent: "center",
          alignItems: 'center', }}>
      <Paper
        square
        elevation={0}
        sx={{
          display: 'flex',
          justifyContent: "center",
          alignItems: 'center',
          height: 80,
          pl: 2,
          bgcolor: '#E3F2FD',
        }}
      >
        <Typography variant='h6' sx={{fontWeight: 'bolder'}}>{images[activeStep].label}</Typography>
      </Paper>
      <AutoPlaySwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={activeStep}
        onChangeIndex={handleStepChange}
        enableMouseEvents
      >
        {images.map((step, index) => (
          <div key={step.label}>
            {Math.abs(activeStep - index) <= 2 ? (
              <Box
                component="img"
                sx={{
                  height: 600,
                  display: 'block',
                  maxWidth: "100%",
                  overflow: 'hidden',
                  width: '100%',
                }}
                src={step.imgPath}
                alt={step.label}
              />
            ) : null}
          </div>
        ))}
      </AutoPlaySwipeableViews>
      <MobileStepper
        steps={maxSteps}
        position="static"
        activeStep={activeStep}
        nextButton={
          <Button
            size="small"
            onClick={handleNext}
            disabled={activeStep === maxSteps - 1}
          >
            Next
            {theme.direction === 'rtl' ? (
              <KeyboardArrowLeft />
            ) : (
              <KeyboardArrowRight />
            )}
          </Button>
        }
        backButton={
          <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
            {theme.direction === 'rtl' ? (
              <KeyboardArrowRight />
            ) : (
              <KeyboardArrowLeft />
            )}
            Back
          </Button>
        }
      />
    </Box>
    </MarketingContainer>

  );
}

