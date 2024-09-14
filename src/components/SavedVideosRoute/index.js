import {Component} from 'react'
import {MdPlaylistAdd} from 'react-icons/md'
import {withRouter} from 'react-router-dom'

import Navbar from '../Navbar'
import Sidebar from '../Sidebar'
import NxtWatchAppContext from '../../Context/NxtWatchAppContext'
import LoaderCard from '../LoaderCard'

import {
  SavedVideosRouteBgContainer,
  SavedRoute,
  SavedVideosHeaderCard,
  SavedVideosLogoCard,
  SavedVideosHeading,
  SavedVideosListBgContainer,
  SavedVideosNoVideosBgContainer,
  NoSavedVideosImage,
  NoSavedVideosHeading,
  NoSavedVideosDescription,
  NoSavedVideosButton,
  SavedVideoCard,
  SavedVideoThumbnail,
  SavedVideoDetailsContainer,
  SavedVideoTitle,
  SavedVideoChannelName,
  SavedVideoStats,
} from './styledComponent'

class SavedVideosRoute extends Component {
  state = {isLoaderLoading: true}

  componentDidMount() {
    // Simulating a loader for 1 second before displaying content
    setTimeout(() => {
      this.setState({isLoaderLoading: false})
    }, 1000)
  }

  navigateToHome = () => {
    const {history} = this.props
    history.replace('/')
  }

  navigateToVideoDetails = id => {
    const {history} = this.props
    history.push(`/videos/${id}`)
  }

  renderSavedVideosMainCard = (savedVideosList, isDarkModeEnabled) => (
    <>
      {savedVideosList.length > 0 ? (
        <SavedRoute>
          {/* Header Section for Saved Videos */}
          <SavedVideosHeaderCard isDarkModeEnabled={isDarkModeEnabled}>
            <SavedVideosLogoCard isDarkModeEnabled={isDarkModeEnabled}>
              <MdPlaylistAdd />
            </SavedVideosLogoCard>
            <SavedVideosHeading isDarkModeEnabled={isDarkModeEnabled}>
              Saved Videos
            </SavedVideosHeading>
          </SavedVideosHeaderCard>

          {/* List of Saved Videos */}
          <SavedVideosListBgContainer isDarkModeEnabled={isDarkModeEnabled}>
            <ul>
              {savedVideosList.map(eachItem => (
                <SavedVideoCard
                  key={eachItem.id}
                  isDarkModeEnabled={isDarkModeEnabled}
                  onClick={() => this.navigateToVideoDetails(eachItem.id)}
                >
                  <SavedVideoThumbnail
                    src={eachItem.thumbnail_url}
                    alt="video thumbnail"
                  />
                  <SavedVideoDetailsContainer>
                    <SavedVideoTitle isDarkModeEnabled={isDarkModeEnabled}>
                      {eachItem.title}
                    </SavedVideoTitle>
                    <SavedVideoChannelName
                      isDarkModeEnabled={isDarkModeEnabled}
                    >
                      {eachItem.channel.name}
                    </SavedVideoChannelName>
                    <SavedVideoStats isDarkModeEnabled={isDarkModeEnabled}>
                      {eachItem.view_count} views • {eachItem.published_at}
                    </SavedVideoStats>
                  </SavedVideoDetailsContainer>
                </SavedVideoCard>
              ))}
            </ul>
          </SavedVideosListBgContainer>
        </SavedRoute>
      ) : (
        /* Empty State when no videos are saved */
        <SavedVideosNoVideosBgContainer isDarkModeEnabled={isDarkModeEnabled}>
          <NoSavedVideosImage
            src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-saved-videos-img.png"
            alt="no saved videos"
          />
          <NoSavedVideosHeading isDarkModeEnabled={isDarkModeEnabled}>
            No saved videos found
          </NoSavedVideosHeading>
          <NoSavedVideosDescription isDarkModeEnabled={isDarkModeEnabled}>
            You can save your videos while watching them
          </NoSavedVideosDescription>
          <NoSavedVideosButton
            isDarkModeEnabled={isDarkModeEnabled}
            type="button"
            onClick={this.navigateToHome}
          >
            Home
          </NoSavedVideosButton>
        </SavedVideosNoVideosBgContainer>
      )}
    </>
  )

  render() {
    const {isLoaderLoading} = this.state

    return (
      <NxtWatchAppContext.Consumer>
        {value => {
          const {savedVideosList, isDarkModeEnabled} = value

          return (
            <>
              <Navbar />
              <SavedVideosRouteBgContainer
                isDarkModeEnabled={isDarkModeEnabled}
                data-testid="savedVideos"
              >
                <Sidebar />
                {/* Display Loader or Main Content based on the loader state */}
                {isLoaderLoading ? (
                  <LoaderCard />
                ) : (
                  this.renderSavedVideosMainCard(
                    savedVideosList,
                    isDarkModeEnabled,
                  )
                )}
              </SavedVideosRouteBgContainer>
            </>
          )
        }}
      </NxtWatchAppContext.Consumer>
    )
  }
}

export default withRouter(SavedVideosRoute)
