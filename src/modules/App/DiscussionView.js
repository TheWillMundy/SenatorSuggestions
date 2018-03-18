import React from 'react';
// import { connect } from 'react-redux';
import { List, ListItem } from 'material-ui/List';
import IconButton from 'material-ui/IconButton';

const listItemStyle = {
  fontFamily: 'Mina',
  textAlign: 'center',
  fontSize: 24,
  lineHeight: 1.5,
  padding: 5
};

const upvoteButton = (discussion, sendUpvote) => (
  <IconButton
    iconClassName="material-icons"
    // iconStyle={{ fontSize: 30 }}
    // style={{ width: 60, height: 60 }}
    onClick={() => sendUpvote(discussion)}
  >
    add_circle
  </IconButton>
);

const DiscussionView = ({ discussions, sendUpvote }) => (
  <List>
    {discussions.map(discussion => (
      <ListItem
        primaryText={
          <span>{discussion.fields.Suggestion}
            <span style={{ fontSize: 24 }}> | {discussion.fields.Upvotes}</span>
          </span>
        }
        rightIconButton={upvoteButton(discussion, sendUpvote)}
        key={discussion.id}
        style={listItemStyle}
      />
    ))}
  </List>
);

export default DiscussionView;
