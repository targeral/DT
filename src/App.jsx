import {Component} from 'react';

export class App extends Component {
    state = {
        counts: 1
    }

    add = () => {
        let { counts } = this.state;
        this.setState({
            counts: counts + 1
        });
    }

    render() {
        let { counts } = this.state;
        return (
            <div>
                <p>{counts}</p>
                <button onClick={this.add}>+1s</button>
            </div>
        );
    }
}

export default App;