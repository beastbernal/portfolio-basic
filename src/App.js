import React from 'react';
import './App.css';
import TitlebarGridList from './TitlebarGridList'
import { makeStyles } from '@material-ui/core/styles';
import { Alert, AlertTitle } from '@material-ui/lab';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    '& > * + *': {
      marginTop: theme.spacing(2),
    },
  },
}));

function App() {
  const classes = useStyles();
  return (
    <>
    <div >
      <header className="banner-background">
        
        <h1 className="h1-header"> Juan Jose Bernal Villamarín</h1>
        <h6 className="h5-header"> Senior Front End Developer | Senior JS Developer | Senior Fullstack Developer | Front End Developer Architect | Technical Lead</h6>
        
      </header>
      {/* <Viewpager></Viewpager> */}
      

    </div>
      <div className={classes.root}>
        <Alert severity="success">
          <AlertTitle>About me</AlertTitle>
          I am an engineer who has worked in government entities analyzing, designing and implementing business solutions that are still in intensive use, my ability to solve problems is present in the productive or organizational systems and the development of attributes and skills such as leadership, self-training capacity, <strong>ability to work in a team and personal values make me an integral professional.</strong>
        </Alert>
      </div>
    
      <TitlebarGridList></TitlebarGridList>
    </>
  );
}

export default App;
