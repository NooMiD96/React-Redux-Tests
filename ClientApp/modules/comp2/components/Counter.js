import React, { Component } from 'react';
import DependsOnState from './DependsOnState';

export default class Counter extends React.Component {
    constructor(props) {
        super(props);

        this.onClickRender = this.onClickRender.bind(this);
        
        this.state = {
            renderComponent: true
        };
    }

    onClickRender() {
        this.setState({
            renderComponent: this.state.renderComponent
        })
    }

    render() {
        return <div className='counter' onClick={this.onClickRender}>
            <span>Count of click: {this.props.count}</span>
            {
                this.state.renderComponent && <DependsOnState />
            }
        </div>
    }
}

