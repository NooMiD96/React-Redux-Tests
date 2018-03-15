import * as React from 'react';
import { NavMenu } from './NavMenu';

export class Layout extends React.Component {
    render() {
        return <div className='container-fluid'>
            <div className='row'>
                <NavMenu />
                { this.props.children }
            </div>
        </div>;
    }
}