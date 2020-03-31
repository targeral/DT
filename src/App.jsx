import {Component} from 'react';
import PropTypes from 'prop-types';
import {Route, Switch} from 'react-router-dom';
import Desktop from './apps/desktop/index.jsx';
import Hooks from './apps/hooks/index';

export class App extends Component {
    render() {
        return (
            <div>
               <Switch>
                    {/* <Route path="/" component={Desktop} /> */}
                    <Route path="/hooks" component={Hooks} />
                </Switch> 
            </div>
        )
    }
}

export default App;