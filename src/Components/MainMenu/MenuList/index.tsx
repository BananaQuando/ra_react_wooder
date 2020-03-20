import React, {Component} from 'react';
import { Link } from 'react-router-dom';

export default class MenuList extends Component {
    render() {
        return (
            <ul>
                <li>
                    <Link to="/">
                        home
                    </Link>
                </li>
                <li>
                    <Link to="/catalog">
                        products
                    </Link>
                </li>
                <li>
                    <Link to="/about-us">
                        about
                    </Link>
                </li>
            </ul>
        );
    }
}