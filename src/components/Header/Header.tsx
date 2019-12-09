import React, { Component } from 'react'
import Dropdown from '../../components/Dropdown/Dropdown';
import { Link } from 'react-router-dom';


export default class Header extends Component {

    render() {
        return (
            <div className="Header">
                <Link to="/">
                    <h2>HEADER</h2>
                </Link>
                <Dropdown />
            </div>
        )
    }
}


