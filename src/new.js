import React from 'react';

export default class newComponent extends React.Component {
    constructor(props) {
        super(props);
        console.log('Constructor');
    }
    componentWillMount() {
        console.log('componentWillMount');
    }
    componentDidMount() {
        console.log('componentDidMount');
    }
    componentWillUnmount() {
        console.log('componentWillUnmount');
    }
    render() {
        console.log('render');
        return (
            <div style={{backgroundColor: 'red'}}>
                <h3>New Component</h3>
            </div>
        );
    }
}

