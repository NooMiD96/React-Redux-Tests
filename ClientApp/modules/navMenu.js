import * as React from 'react';
import { NavLink, Link } from 'react-router-dom';

export class NavMenu extends React.Component {
    render() {
        return <div className='main-nav'>
            <ul className='navbar-nav'>
                <li>
                    <NavLink to={ '/Comp1' }>
                        <span>Comp1</span>
                    </NavLink>
                </li>
                <li>
                    <NavLink to={ '/Comp2' }>
                        <span>Comp2</span>
                    </NavLink>
                </li>
            </ul>
        </div>;
    }
}
