import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
    card: {
      backgroundColor: '#fff',
      boxShadow: '0px 0px 10px 0px rgba(0, 0, 0, 0.1)',
      transition: 'transform .2s, box-shadow .2s',
      '&:hover': {
        transform: 'translateY(-5px)',
        boxShadow: '0px 5px 10px 0px rgba(0, 0, 0, 0.2)',
      },
    },
    header: {
      backgroundColor: '#e0e3e7',
    },
    openLink: {
      marginLeft: theme.spacing(2),
      '&:hover': {
        backgroundColor: '#e0e3e7',
      },
    },
    deleteButton: {
      borderColor: theme.palette.error.main,
      color: theme.palette.error.main,
      '&:hover': {
        backgroundColor: theme.palette.error.main,
        color: '#fff',
      },
    },
    editButton: {
      backgroundColor: theme.palette.primary.main,
      color: '#fff',
      '&:hover': {
        backgroundColor: theme.palette.primary.dark,
      },
    },
  }));