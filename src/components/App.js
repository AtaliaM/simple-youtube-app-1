import React from 'react';
import SearchBar from './SearchBar';
import youtube from '../apis/youtube';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';

const KEY = "AIzaSyBMdITPEd5iPa-o9Xfr4mVk-IMIsDtCoZI";

class App extends React.Component {

    state = { videos: [], selectedVideo: null };

    componentDidMount() { //default search when App renders
        this.onTermSubmit('animal friends');
    }

    onTermSubmit = async (term) => {
        const response = await youtube.get('/search', {
            params: {
                q: term,
                part: 'snippet',
                type: 'video',
                maxResults: 5,
                key: KEY,
            }
        });

        this.setState({ videos: response.data.items, selectedVideo: response.data.items[0] });
    };

    onVideoSelect = (video) => {
        console.log(video);
        this.setState({ selectedVideo: video });
    }


    render() {
        return (
            <div className="ui container">
                <SearchBar whenFormSubmit={this.onTermSubmit} />
                <div className="ui grid">
                    <div className="ui row">
                        <div className="eleven wide column">
                            <VideoDetail video={this.state.selectedVideo} />
                        </div>
                        <div className="five wide column">
                            <VideoList onVideoSelect={this.onVideoSelect} videos={this.state.videos} />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;