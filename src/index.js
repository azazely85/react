import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {

    render() {
        return (
            <div>
                <h1>App ready to work </h1>
                <h3>it is real react</h3>
            </div>
        );
    }
}
ReactDOM.render(
    <App />,
    document.getElementById('app')
);
