import React from 'react';
import { connect } from 'react-redux';
import Counter from "./Counter";
import CounterButton from "./CounterButton";
import { CountInc } from "../actions";
import Input from './Input';
import { fetchPosts, fetchGet } from "../thunk";

export class Comp2 extends React.Component {
    constructor(props) {
        super(props);

        this.CountAction = this.CountAction.bind(this);
    }

    componentDidUpdate() {
        if(this.props.gettedData === 'Loading...'){
            this.props.fetchGet();
        }
    }

    CountAction = () => {
        this.props.CountInc();
    }

    render() {
        const props = this.props;

        return<div className='comp2'>
            <h1>Hellow from comp2!</h1>
            <h3>Click on button</h3>
            {
                props.gettedData && <div>getted data: {props.gettedData}</div>
            }
            <Counter count={props.count} />
            <CounterButton CountAction={this.CountAction} />
            <Input fetchPosts={props.fetchPosts}/>
        </div>
    }
}

export default connect(
    state => ({
        ...state.comp2,
    }),
    { CountInc, fetchPosts, fetchGet }
)(Comp2)