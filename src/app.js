/**
 * Created by Yaroslav Cherednyk on 26.01.2018.
 */
import React from 'react';
import DevTools from './utils/devtools';
export default class App extends React.Component {
    static path = '/';

    render() {
        return (
            <div>
                <h1>Hello</h1>
                { process.env.NODE_ENV !== 'production' ? <DevTools/> : null }
            </div>
        );
    }
}
