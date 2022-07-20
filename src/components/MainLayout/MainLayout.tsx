import React from 'react';
import Typography from '@material-ui/core/Typography';
import GitHubIcon from '@material-ui/icons/GitHub';
import {makeStyles, ThemeProvider,} from '@material-ui/core/styles';
import Link from '@material-ui/core/Link';
import Container from "@material-ui/core/Container";
import Header from "./components/Header";
import { themeX } from './components/theme/appTheme';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright ©  Tsukiyomi-Inari'}
      <Link color="inherit" href="https://github.com/Tsukiyomi-Inari">
        <GitHubIcon></GitHubIcon>
        Tsukiyomi-Inari
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}



const useStyles = makeStyles((theme) => ({
  container: {
    paddingBottom: theme.spacing(8),
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },
}));



const MainLayout: React.FC = ({children}) => {
  const classes = useStyles();

  return (
    <>
      <Header/>
    <ThemeProvider theme={themeX}>
      <main>
        <Container className={classes.container} maxWidth="md">
          {children!}
        </Container>
      </main>
      <footer className={classes.footer}>
        <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
          Thank you for your purchase!
        </Typography>
        <Copyright/>
      </footer>
      </ThemeProvider>
    </>
  );
};

export default MainLayout;