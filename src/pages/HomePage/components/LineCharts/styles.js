import {makeStyles} from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  Cummulative: {
    margin: '10px 0',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    [theme.breakpoints.up('md')]: {
      maxWidth: 700,
    },
  },
  Title: {
    fontSize: 14,
    fontWeight: 600,
    [theme.breakpoints.up('md')]: {
      fontSize: 20,
    },
  },
}));
