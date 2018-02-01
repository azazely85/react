/**
 * Created by Yaroslav Cherednyk on 31.01.2018.
 */
import React, { Component } from 'react';
import '../css/styles.css';

class Header extends Component {
    render() {
        return (
            <header>
                <div className='logo'>Logo</div>
                <input type='text'/>
            </header>
        );
    }
}

export default Header;
