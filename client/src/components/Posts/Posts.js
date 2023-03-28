import React, { useEffect, useState } from 'react';
import { Grid, CircularProgress, Card, CardHeader } from '@material-ui/core';
import { useSelector } from 'react-redux';
// import { ReactSortable } from 'react-sortablejs';

import Post from './Post/Post';
import useStyles from './styles';

const Posts = ({ setCurrentId }) => {
  const posts = useSelector((state) => state.posts);
  const classes = useStyles();
  // eslint-disable-next-line no-unused-vars
  const [buckets, setBuckets] = useState([]);
  console.log(buckets);

  useEffect(() => {
    setBuckets([...new Set(posts.map((post) => post.bucket))].map((bucket) => posts.filter((post) => post.bucket === bucket)));
  }, [posts]);
  // setBuckets([...new Set(posts.map((post) => post.bucket))].map((bucket) => posts.filter((post) => post.bucket === bucket)));
  const bucketName = "Bucket Name : "
  return !posts.length ? (
    <CircularProgress />
  ) : (
    <Grid
      className={classes.container}
      container
      alignItems="stretch"
      spacing={3}
    >
      {/* make a horizontal list of cards of specific buckets */}
      {buckets.map((bucket) => (
        <Grid key={bucket._id} item xs={12} sm={12} md={12}>
          <Card className={classes.bucket}>
            <CardHeader title={bucketName+bucket[0].bucket} />
            <Grid container spacing={3}>
              {bucket.map((post) => (
                <Grid key={post._id} item xs={12} sm={6} md={6}>
                  <Post post={post} setCurrentId={setCurrentId} />
                </Grid>
              ))}
            </Grid>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default Posts;
