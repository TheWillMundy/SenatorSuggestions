import AppBar from 'material-ui/AppBar';
import { List, ListItem } from 'material-ui/List';
import React from 'react';

const TopBarStyle = {
  backgroundColor: '#212121',
  fontFamily: 'Mina'
};

const ListItemStyle = {
  fontFamily: 'Mina',
  color: 'white'
};

const ListStyle = {
  display: 'flex',
  flexDirection: 'row'
};

const TopBar = ({ changeView }) => (
  <AppBar
    title="Sid Rich Suggestions"
    style={TopBarStyle}
  >
    <List style={ListStyle}>
      <ListItem primaryText="Suggestion List" style={ListItemStyle} onClick={() => changeView('listView')} />
      <ListItem primaryText="Make a Suggestion" style={ListItemStyle} onClick={() => changeView('makeSuggestionView')} />
    </List>
  </AppBar>
);

export default TopBar;
