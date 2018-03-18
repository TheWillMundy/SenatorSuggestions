/* eslint-disable */

import React from 'react';
import { connect } from 'react-redux';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
// import * as AppActions from './AppState';
// import './App.styl';
import DiscussionView from './DiscussionView';
import InsertDiscussion from './InsertDiscussion';
import TopBar from './TopBar';
import { sendUpvote, changeView, createDiscussion } from '../../redux/action';

// class App extends PureComponent {
//   componentDidMount() {
//     this.props.dispatch(AppActions.loadData());
//   }
//
//   render() {
//     return !this.props.isLoading && 'Hello There!';
//   }
// }

const setView = (view, discussions, sendUpvote, createDiscussion) => {
  if (view == 'listView') {
    return (<DiscussionView discussions={discussions} sendUpvote={sendUpvote} />);
  }
  else {
    return (<InsertDiscussion createDiscussion={createDiscussion} />);
  }
}

const App = ({ discussions, sendUpvote, changeView, createDiscussion, view }) => {
  return (
    <MuiThemeProvider>
      <TopBar changeView={changeView} />
      {setView(view, discussions, sendUpvote, createDiscussion)}
    </MuiThemeProvider>
  )
};

export default connect(
  (state) => {
    return {
      discussions: state.discussionReducer.discussions,
      view: state.viewReducer.view
    }
  },
  (dispatch) => {
    return {
      sendUpvote: (discussion) => dispatch(sendUpvote(discussion)),
      changeView: (view) => dispatch(changeView(view)),
      createDiscussion: (suggestion) => dispatch(createDiscussion(suggestion))
    }
  }
)(App);
