import React, { Component } from 'react';

export default class CounterButton extends React.Component {
    render() {
        return <div className='counter'>
            <button onClick={this.props.CountAction}>Inc counter</button>
        </div>
    }
}

