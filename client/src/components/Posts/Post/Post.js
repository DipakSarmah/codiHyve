import React, { useState } from 'react';
import {
  Card,
  CardActions,
  CardContent,
  Button,
  Typography,
  CardHeader,
  Box,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
} from '@material-ui/core/';
import { useDispatch } from 'react-redux';
import { deletePost } from '../../../actions/posts';

import useStyles from './styles';

const Post = ({ post, setCurrentId }) => {
  const dispatch = useDispatch();
  const [openModal, setOpenModal] = useState(false);
  const classes = useStyles();

  const handleOpenModal = () => {
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };
  const cardName="Card Name: "
  
  function convertToEmbeddedLink(link) {
    const videoId = link.split('v=')[1];
    const embeddedLink = `https://www.youtube.com/embed/${videoId}`;
    return embeddedLink;
  }
  const youtubeLink = post.link;
  const embeddedLink = convertToEmbeddedLink(youtubeLink);
  console.log(embeddedLink);
  return (
    <Card className={classes.card}>
      <CardHeader
        title={cardName+post.title}
        titleTypographyProps={{ align: 'center' }}
        subheaderTypographyProps={{
          align: 'center',
        }}
        className={classes.header}
      />
      
      <CardContent>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'baseline',
            mb: 2,
          }}
        >
          <Typography component="h2" variant="h3" color="text.primary">
            
          </Typography>
          <Typography variant="h6" color="text.secondary" alignItems="center">
            Creator: {post.creator}
          </Typography>
          <Button className={classes.openLink} variant="outlined" onClick={handleOpenModal} alignItems="center">
            Click To Open Link
          </Button>
        </Box>
      </CardContent>
      <CardActions>
        <Button fullWidth variant="outlined" className={classes.deleteButton} onClick={() => dispatch(deletePost(post._id))}>
          Delete
        </Button>
        <Button fullWidth variant="contained" className={classes.editButton} onClick={() => setCurrentId(post._id)}>
          Edit
        </Button>
      </CardActions>

      <Dialog open={openModal} onClose={handleCloseModal}>
        <DialogTitle>YouTube Video</DialogTitle>
        <DialogContent>
          <DialogContentText>
            <iframe
              width="100%"
              height="100%"
              src={embeddedLink}
              title="YouTube video player"
              frameBorder="0"
              allowFullScreen
            ></iframe>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseModal}>Close</Button>
        </DialogActions>
      </Dialog>
    </Card>
  );
};

export default Post;
