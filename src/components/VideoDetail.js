import React from 'react';
import {Paper, Typography} from '@material-ui/core';

const VideoDetail = ({video}) => {
  if(!video){
    return <div>Loading...</div>;
  }
  const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;
  // console.log(video);
  return(    
    <React.Fragment>
      <Paper elevation={10} style = {{height: '60vh'}}>
        <iframe frameBorder="0" height="100%" width="100%" title="Video Player" src={videoSrc}/>
      </Paper>
      <Paper elevation={6} style = {{padding: '15px'}}>
        <Typography variant="h5">{video.snippet.title}</Typography>
        <Typography variant="subtitle1">{video.snippet.channelTitle}</Typography>
        <Typography variant="subtitle2">{video.snippet.description}</Typography>
       
      </Paper>
    </React.Fragment>
  )
}

export default VideoDetail;