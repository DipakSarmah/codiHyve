import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  appContainer: {
    backgroundColor: '#f5f5f5',
    minHeight: '100vh',
  },
  appBar: {
    backgroundColor: '#fff',
    boxShadow: 'none',
    borderBottom: '1px solid #d9d9d9',
    backgroundImage: "linear-gradient( 135deg, #9f05ff69 10%, #fd5e086b 100%)",
    backgroundSize: 'cover',
  },
  heading: {
    color: '#444',
    fontFamily: "'Dancing Script', cursive",
    fontWeight: 'bold',
    fontSize: '80px',
    marginBottom: '30px',
      
  },
  heading2:{
    fontFamily: "'Open Sans', sans-serif",
	  marginBottom: '30px',
  },
  
}));
