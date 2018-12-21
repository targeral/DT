import {Component} from 'react';
import PropTypes from 'prop-types';
import {bind} from 'lodash-decorators';
import classNames from 'classnames';
import './index.less';

class Navigator extends Component {

    static PropTypes = {
        list: PropTypes.object.isRequired,
        handleFn: PropTypes.func
    };

    @bind()
    handleClick() {
        this.props.handleFn('fn1');
    }

    appList() {
        let { list } = this.props;
        list.map(o => {
            
        });
    }

    render() {
        const prefixCls = 'navigator';
        let { featureList } = this.props;
        console.log(featureList);
        return (
            <nav className={prefixCls}>
                <div className={classNames(prefixCls, 'core')}>系统</div>
                <ul className={classNames(prefixCls, 'app')}></ul>
                <ul className={classNames(prefixCls, 'system')}></ul>
            </nav>
        );
    }
}

export default Navigator;