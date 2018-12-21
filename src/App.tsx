import * as React from 'react';
// import PropTypes from 'prop-types';
import { Route, Switch } from 'react-router-dom';
import Desktop from './apps/desktop/index.jsx';

export class App extends React.Component {
    render() {
        return (
            <div>
                <Switch>
                    <Route path="/" component={Desktop} />
                </Switch>
            </div>
        )
    }
}

export default App;