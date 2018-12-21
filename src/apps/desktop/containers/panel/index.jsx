import {Component} from 'react';
import PropTypes from 'prop-types';
import {bind} from 'lodash-decorators';
import './index.less';

class Panel extends Component {

    state = {
        backgroundImage: '',
        zIndex: 0
    };

    @bind()
    fn1() {
        console.log('fn1');
    }

    triggerFn(name) {
        switch (name) {
            case 'fn1':
                this.fn1();
                break;
        
            default:
                break;
        }
    }

    render() {
        let { backgroundImage, zIndex } = this.state;
        let prefixCls = 'desktop';
        let containerCls = `${prefixCls}-container`;
        let containerStyle = {
            backgroundImage,
            zIndex,
        };
        return (
            <div
                className={containerCls}
                style={containerStyle}
            >

            </div>
        );
    }
}

export default Panel;