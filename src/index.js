import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
    btnOnClick(event) {
        console.log(true, event.target);
    }
    render() {
        return (
            <div style={{backgroundColor: 'red'}}>
                <h1>App ready to work </h1>
                <h3>it is real react </h3>
                <button onClick={this.btnOnClick}>{ this.props.children }</button>
            </div>
        );
    }
}
ReactDOM.render(
    <App>Hello world</App>,
    document.getElementById('app')
);
