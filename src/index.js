import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

class App extends React.Component {


    constructor(props) {
        super(props);
        this.state = {
            text: ''
        };
    }
    inputOnChange(event) {
        console.log(event);
        const text = event.target.value;
        this.setState({text});
    }
    render() {
        return (
            <div className="test">
                <h1>Hello world</h1>
                <input type="text" value={ this.state.text } onChange={ this.inputOnChange.bind(this) }/>
            </div>
        );
    }
}
App.propTypes = {
    bntText: PropTypes.string.isRequired
};
App.defaultProps = {
    bntText: 'Click'
};
ReactDOM.render(
    <App/>,
    document.getElementById('app')
);
