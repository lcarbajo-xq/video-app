import React, { Component } from 'react';
import Video from '../components/video';
import VideoPlayerLayout from '../components/video-player-layout';
import Title from '../components/title';
import Timer from '../components/timer';
import PlayOrPause from '../components/play-or-pause';
import Controls from '../components/video-player-controls';
import ProgressBar from '../components/progress-bar';
import Spinner from '../components/spinner';
import Volume from '../components/volume';
import FullScreen from '../components/fullscreen';

class VideoPlayer extends Component {
  state = {
    pause: true,
    duration: 0,
    currentVideoTime: 0,
    silence: false
  }
  togglePlay = (event) => {
    this.setState({
      pause: !this.state.pause,
    })
  }
  componentDidMount() {
    this.setState({
      pause: !this.props.autoPlay,
    })
  }
  handleLoadedMetadata = (event) => {
    this.video = event.target;
    this.setState ({
      duration: this.video.duration,
    });
  }
  handleTimeUpdate = (event) => {
    this.setState({
      currentVideoTime: this.video.currentTime,
    })
  }
  handleProgressChange = (event) => {
    this.video.currentTime = event.target.value
  }
  handleSeeking = (event) => {
    this.setState({
      loading: true
    })
  }
  handleSeeked = (event) => {
    this.setState({
      loading: false
    })
  }
  handleVolumeChange = (event) => {
    this.video.volume = event.target.value;
  }
  handleFullScreenClick = (event) => {
      if (!document.webkitIsFullScreen) {
        this.player.webkitRequestFullScreen()
      } else {
        document.webkitExitFullscreen();
      }
  }
  handleVolumeClick = (event) => {
      this.video.muted = !this.video.muted;
  }
  setRef = (element) => {
    this.player = element;
  }
  render(){
    return(
        <VideoPlayerLayout
          setRef={this.setRef}>
          <Title
            title={this.props.title}/>
          <Controls>
            <PlayOrPause
              pause={this.state.pause}
              handleClick={this.togglePlay}/>
            <Timer
              currentVideoTime={this.state.currentVideoTime}
              duration={this.state.duration}
              />
            <ProgressBar
              duration={this.state.duration}
              value={this.state.currentVideoTime}
              handleProgressChange={this.handleProgressChange}/>
            <Volume
              volumeValue={this.state.volumeValue}
              handleVolumeChange={this.handleVolumeChange}
              handleVolumeClick={this.handleVolumeClick}/>
            <FullScreen
              handleFullScreenClick={this.handleFullScreenClick}/>
            </Controls>
            <Spinner
              active={this.state.loading}/>
            <Video
              autoPlay={this.props.autoPlay}
              pause={this.state.pause}
              handleLoadedMetadata={this.handleLoadedMetadata}
              handleTimeUpdate={this.handleTimeUpdate}
              handleSeeking={this.handleSeeking}
              handleSeeked={this.handleSeeked}
              src={this.props.src}
              />
        </VideoPlayerLayout>
    )
  }
}

export default VideoPlayer;
