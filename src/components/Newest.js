import React, {Component} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router';
import moment from 'moment'

import Sidebar from './Container/Sidebar';
import { getRecentVideos } from '../actions/videoActions';

class Newest extends Component {

  getAllVideos() {
    this.props.dispatch( getRecentVideos() );
  }

  componentDidMount () {
    this.getAllVideos();
  }

  renderVideos() {
    return this.props.videos.videos.map( (video, index ) => {
      return (
        <div
          key={ index }
          className="col-xs-10 col-sm-7 col-md-4 col-md-4 col-lg-4 category-list">
            <div className="thumbnail featuredThumbs">
                <img
                    data={video.upload_date}
                    className="clickable category-images"
                    onClick={ () => {window.location = "/#/video/" + video.id} }
                    src={ video.thumbnail_url }
                    alt={ video.title }
                  />
            </div>
            <div className="videoContentBox">
                <h3>
                  <Link to={"/video/" + video.id}>{video.title}</Link>
                </h3>
                <p><strong>Uploaded: </strong>{moment(video.upload_date).format("MMMM D, YYYY")}</p>
                <p><Link to={"/profile/" + video.uploader_id}>{video.username}</Link></p>
            </div>
        </div>
      );
    });
  }

  render() {
    return(
      <div className="container-fluid">
          <div className="row">
              <div className="col-sm-12 col-md-12">
                  <h1 className="text-capitalize bottom-line">Newest</h1>
              </div>
          </div>
          <div className="row">
              {this.renderVideos()}
          </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    videos : state.allRecentVideos
  };
}

// function mapDispatchToProps( dispatch ) {
//   return bindActionCreators({ getVideos : })
// }

export default connect( mapStateToProps )( Newest );
