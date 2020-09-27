import React from 'react';
import {Grid, Typography} from '@material-ui/core';
import {SearchBar, VideoDetail, VideoList} from './components';
import youtube from './api/youtube';
import myGithublogo from '../src/images/myGithub.png';
import styles from './App.css';

class App extends React.Component {
  state = {
    videos: [],
    selectedVideo: null,
  }
  componentDidMount(){
    this.handleSubmit('Self taught Programmer');
  }

  onVideoSelect = (video) => {
    this.setState({selectedVideo:video})
  }
  handleSubmit = async (searchTerm) => {
    const response = await youtube.get('search', {
      params: {
          part: 'snippet',
          maxResults: 5,
          key: 'AIzaSyAuz07X0fjaJsy11Gp6F5afSZ9TouHrlgA',
          q: searchTerm,
      }
    });
    this.setState({videos: response.data.items, selectedVideo: response.data.items[0]});
    console.log(response.data.items);
  }


  render(){
    const {selectedVideo, videos} = this.state;
    return(
     <div className="container">
       <img className="myLogo" src={myGithublogo} alt="mygithublogo"/>
        <Typography  className="heading" variant="h5">Use Search Bar to Fetch Videos from Youtube API</Typography>
        <Grid justify="center" container spacing={10}>
        <Grid item xs={12}>
          <Grid container spacing={5}>
            <Grid item xs={12}>
              <SearchBar onFormSubmit={this.handleSubmit}/>
            </Grid>
            <Grid item xs={7}>
              <VideoDetail video={selectedVideo}/>
            </Grid>
            <Grid item xs={5}>
              <VideoList video={videos} onVideoSelect ={this.onVideoSelect}/>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Typography variant="h2">About Developer</Typography>
      <Typography variant="p">Hello I am deepesh and I love building amazing apps that can be super useful. </Typography>
      <a href="https://www.github.com/deepyes02"><Typography variant="a">Visit My Github</Typography></a>
     </div>
    )
  }
}

export default App;