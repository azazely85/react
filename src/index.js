import React from 'react';
import configureStore from './store';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter, Switch} from 'react-router-dom';
import routes from './routes';


const store = configureStore(routes);
ReactDOM.render((
    <Provider store = { store }>
        <BrowserRouter>
            <Switch>
                { routes }
            </Switch>
        </BrowserRouter>
    </Provider>
), document.querySelector('#app'));
