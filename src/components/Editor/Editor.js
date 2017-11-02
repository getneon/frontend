import React, { Component } from 'react';


class Editor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      text: ''
    }
  }

  savePost = () => {
    console.log(this.state.title, this.state.text)
  }

  render() {
    return (
      <div>
        <input type='text' className='title' />
        <textarea className='text' />
      </div>
    )
  }
}


export default Editor;
