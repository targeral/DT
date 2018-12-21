import {Component} from 'react';
import {withRouter} from 'react-router-dom';
import Navigator from './containers/navigator/index.jsx';
import Panel from './containers/panel/index.jsx';
import {bind} from 'lodash-decorators';

class Desktop extends Component {

    constructor(props) {
        super(props);
        this.focusAppRef = React.createRef();
    }

    @bind()
    handleFn(name) {
        let app = this.focusAppRef.current;
        app.triggerFn(name);
    }

    render() {
        let featureList = [
            {
                name: 'fn1',
                fn: this.focusAppRef
            }
        ];         
        return (
            <div>
                {/* <Navigator
                    featureList={featureList}
                    handleFn={name => this.handleFn(name)}
                />
                <Panel ref={this.focusAppRef}></Panel> */}
            </div>
        );
    }
}

export default withRouter(Desktop);