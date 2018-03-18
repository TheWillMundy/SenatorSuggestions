import { combineReducers } from 'redux';

// import AppState from '~/modules/App/AppState';

const discussionReducer = (state = { discussions: [] }, action) => {
  switch (action.type) {
    case 'GET_DISCUSSIONS': {
      return { ...state, discussions: action.discussions };
    }
    case 'SEND_UPVOTE': {
      // copy discussions
      const discussionsCopy = state.discussions.slice();
      // get previous discussion record
      const previousDiscussion = state.discussions
        .filter(discussion => (discussion.id === action.newDiscussion.id))[0];
      // get index of previous record
      const discussionIndex = discussionsCopy.indexOf(previousDiscussion);
      // update record
      discussionsCopy[discussionIndex] = action.newDiscussion;
      // update state
      return { ...state, discussions: discussionsCopy };
    }
    case 'CREATE_DISCUSSION': {
      // copy discussions
      const discussionsCopy = state.discussions.slice();
      // append new discussion
      discussionsCopy.push(action.newDiscussion);
      // update state
      return { ...state, discussions: discussionsCopy };
    }
    default:
      return { ...state };
  }
};

const viewReducer = (state = { view: 'listView' }, action) => {
  switch (action.type) {
    case 'CHANGE_VIEW':
      return { ...state, view: action.view };
    default:
      return { ...state };
  }
};

const Reducer = combineReducers({
  discussionReducer, viewReducer
});

export default Reducer;
