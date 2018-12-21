import {Component} from 'react';
import classNames from 'classnames';
import propTypes from 'prop-types';
import {bind} from 'lodash-decorators';

class MenuItem extends Component {

    static propTypes = {
        prefixCls: propTypes.string,
        active: propTypes.bool,
        children: propTypes.any,
        disabled: propTypes.bool,
        onDestroy: propTypes.func,
        onClick: propTypes.func,
        onHover: propTypes.func,
        isSelected: propTypes.bool,
        itemIcon: propTypes.oneOfType([propTypes.func, propTypes.node])
    };

    static defaultProps = {
        prefixCls: ''
    };

    constructor(props) {
        super(props);
    }

    componentWillMount() {
        const {onDestroy} = this.props;
        onDestroy && onDestroy();
    }

    @bind()
    onClick(e) {
        const { onClick } = this.props;
        let info = {
            item: this,
            domEvent: e
        };
        onClick(info);
    }

    @bind()
    onMouseLeave() {
        const { onHover } = this.props;
        onHover({
            hover: false
        });
    }

    @bind()
    onMouseEnter() {
        const { onHover } = this.props;
        onHover({
            hover: true
        });
    }

    getActiveClassName() {
        return `${this.props.prefixCls}-active`;
    }

    getSelectedClassName() {
        return `${this.props.prefixCls}-selected`;
    }

    getDisabledClassName() {
        return `${this.prefixCls}-disabled`;
    }

    render() {
        let {
            prefixCls, itemIcon: icon,
            disabled, active, isSelected,
            style, children,
            ...props
        } = this.props;

        let className = classNames(prefixCls, {
            [this.getActiveClassName()]: !disabled && active,
            [this.getSelectedClassName()]: isSelected,
            [this.getDisabledClassName()]: disabled
        }, 'menu-item');

        let mouseEvent = {
            onClick: disabled ? null : this.onClick,
            onMouseLeave: disabled ? null : this.onMouseLeave,
            onMouseEnter: disabled ? null : this.onMouseEnter
        };

        if (typeof icon === 'function') {
            icon = React.createElement(icon, this.props);
        }

        return (
            <li
                className={className}
                {...props}
                {...mouseEvent}
                {...style}
            >
                {children}
                {icon}
            </li>
        );
    }
}