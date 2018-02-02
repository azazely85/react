/**
 * Created by Yaroslav Cherednyk on 31.01.2018.
 */
import React, { Component } from 'react';
import '../css/styles.css';

class Header extends Component {
    inputChangHandler(event) {
        console.log(event.target.value);
        console.log('change');
    }

    render() {
        return (
            <header>
                <div className='logo'>Logo</div>
                <input type='text' onChange={ (e) => this.inputChangHandler(e) }/>
            </header>
        );
    }
}

export default Header;
