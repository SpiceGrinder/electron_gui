import React, { Component } from 'react';
import Keyboard from 'react-simple-keyboard';
import { Input } from 'antd';

export default class InputField extends Component {
  constructor(props) {
    super(props);

    this.state = { keyboardActive: false };
    this.setWrapperRef = this.setWrapperRef.bind(this);
    this.handleClickOutside = this.handleClickOutside.bind(this);
  }

  componentDidMount() {
    document.addEventListener('mousedown', this.handleClickOutside);
  }

  componentWillUnmount() {
    document.removeEventListener('mousedown', this.handleClickOutside);
  }

  /**
   * Set the wrapper ref
   */
  setWrapperRef(node) {
    this.wrapperRef = node;
  }

  handleClickOutside(event) {
    if (this.wrapperRef && !this.wrapperRef.contains(event.target)) {
      this.setState({ keyboardActive: false });
    }
  }

  render() {
    return (
      <div ref={this.setWrapperRef}>
        <Input
          onClick={() => {
            this.setState({ keyboardActive: true });
          }}
        />
        {this.state.keyboardActive ? (
          <Keyboard
            onChange={input => this.onChange(input)}
            onKeyPress={button => this.onKeyPress(button)}
          />
        ) : null}
      </div>
    );
  }
}
