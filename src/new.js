import React from 'react';
import PropTypes from 'prop-types';

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
    renderItem(item, idx) {
        return (
            <li key={idx}><b>Name: {item.text}</b> </li>
        );
    }
    render() {
        return (
            <ul>
                { this.props.array.map(this.renderItem.bind(this)) }
            </ul>
        );
    }
}

newComponent.propTypes = {
    array: PropTypes.array.isRequired
};
