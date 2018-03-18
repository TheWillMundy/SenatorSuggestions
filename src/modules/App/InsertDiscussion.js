import React from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

const insertDiscussionStyle = {
  textAlign: 'center',
  fontSize: 24
};

const divStyle = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center'
};

class InsertDiscussion extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      textVal: ''
    };
  }

  sendData() {
    // sends data
    this.props.createDiscussion(this.state.textVal);
    // clears text
    this.setState({ textVal: '' });
  }

  render() {
    return (
      <div style={divStyle}>
        <TextField
          floatingLabelText="Suggest Anything!"
          inputStyle={insertDiscussionStyle}
          hintStyle={insertDiscussionStyle}
          style={{ width: '300px', fontSize: 36 }}
          onChange={(e, newVal) => this.setState({ textVal: newVal })}
          value={this.state.textVal}
          multiLine
        />
        <RaisedButton
          label="Submit"
          primary
          onClick={() => this.sendData()}
        />
      </div>
    );
  }
}

// const InsertDiscussion = () => (
//   <div style={divStyle}>
//     <TextField
//       floatingLabelText="Suggest Anything!"
//       inputStyle={insertDiscussionStyle}
//       hintStyle={insertDiscussionStyle}
//       style={{ width: '300px', fontSize: 36 }}
//       multiLine
//     />
//     <RaisedButton
//       label="Submit"
//       primary
//     />
//   </div>
// );

export default InsertDiscussion;
