import React, { Component } from 'react';

import './Editor.css';

class Editor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      text: ''
    }
  }

  savePost = () => {
    // Make API call to save post
    console.log(this.state.title, this.state.text)
  }

  render() {
    return (
      <div className={'container'}>
        <input
          type={'text'}
          className={'title'}
          onChange={e => this.setState({ title: e.target.value })}
        />
        <textarea
          className={'text'}
          onChange={e => this.setState({ text: e.target.value })}
        />
      </div>
    )
  }
}


export default Editor;
