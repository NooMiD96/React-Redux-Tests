import React from 'react';
import { connect } from 'react-redux';
import Counter from "./Counter";
import CounterButton from "./CounterButton";
import { CountInc } from "../actions";

export class Comp1 extends React.Component {
    constructor(props) {
        super(props);

        this.CountAction = this.CountAction.bind(this);
    }

    CountAction = () => {
        this.props.CountInc();
    }

    render() {
        return<div className='comp1'>
            <h1>Hellow from comp1!</h1>
            <h3>Click on button</h3>
            <Counter count={this.props.count} />
            <CounterButton CountAction={this.CountAction} />
        </div>
    }
}

export default connect(
    state => ({
        count: state.comp1.count
    }),
    { CountInc }
)(Comp1)