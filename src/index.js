import React, { Component } from 'react';
import SearchBar from './components/search_bar';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import VideoList from './components/video_list';
import VideoInfo from './components/video_info';
import _ from 'lodash';

const API_key = "AIzaSyAknEgFyJU0D0FyFvYd6Lgs-n4Ue2Yv96g";

class App extends Component {
  constructor(props){
    super(props);

    this.state = { 
      videos : [],
      selectedVideo: null
    };
    this.videoSearch('Mrs Pumpkins kokkei na yume')
  }
    

    videoSearch(term){
      YTSearch({key : API_key, term: term}, (videos) => {
        this.setState({
          videos: videos,
          selectedVideo: videos[0]
         });
     });
    }

  render(){
    const videoFilter = _.debounce((term) => {this.videoSearch(term)}, 300)
    console.log(this.state.videos);
    return (
    <div>
      <SearchBar onSearchTermChange = {videoFilter}/>
      <VideoInfo video = {this.state.selectedVideo}/> 
      <VideoList 
      onClickVideo = {ChosenVideo=> {
        this.setState({selectedVideo: ChosenVideo});
      }}
      videos = {this.state.videos}/>
    </div>
    );
  }
}



 ReactDOM.render(<App/>, document.querySelector('.container'));
