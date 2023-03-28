import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(2),
    borderRadius: 20,
    backgroundColor: '#F9F9F9',
    boxShadow: '0 2px 6px 0 rgba(0,0,0,0.20)',
  },
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
    },
  },
  form: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  heading: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: theme.spacing(2),
    fontWeight: 'bold',
    color: '#666666',
  },
  buttonSubmit: {
    marginTop: theme.spacing(2),
    backgroundColor: '#008CBA',
    color: 'white',
  },
}))
