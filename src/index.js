import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import NewComponent from './new.js';

class App extends React.Component {


    constructor(props) {
        super(props);
        this.state = {
            timer: 0
        };
    }
    componentWillMount() {
        setInterval(() =>{
            this.setState({timer: this.state.timer + 1});
        }, 100);
    }
    render() {
        return (
            <div className="test">
                <h1>Hello world</h1>
                {this.state.timer < 50 ? <NewComponent/> : null}
                <p>{ this.state.timer }</p>
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
