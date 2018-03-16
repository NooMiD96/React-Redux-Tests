import React, { Component } from 'react';

export default class Input extends React.Component {
    constructor(props){
        super(props);

        this.InputHandler = this.InputHandler.bind(this)

        this.state = {
            text: ''
        };
    }

    InputHandler = (e) => {
        this.props.fetchPosts(this.state.text);

        this.setState({
            text: this.state.text + e.key
        });
    }

    render() {
        return <input type='text' value={this.state.text} onKeyPress={this.InputHandler} />
    }
}

