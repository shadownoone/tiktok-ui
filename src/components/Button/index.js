import { Link } from 'react-router-dom';
import styles from './Button.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

function Button({
    children,
    className,
    to,
    href,
    featured = false,
    primary = false,
    add_to_bag = false,
    favourite = false,
    move_favourite = false,
    onClick,
    ...passProps
}) {
    let Comp = 'button';
    const props = {
        ...passProps,
    };

    if (to) {
        props.to = to;
        Comp = Link;
    } else if (href) {
        props.href = href;
        Comp = 'a';
    }

    const classes = cx('wrapper', {
        primary,
        featured,
        add_to_bag,
        favourite,
        move_favourite,
        [className]: className,
    });

    return (
        <Comp onClick={onClick} className={classes} {...passProps}>
            <span>{children}</span>
        </Comp>
    );
}

export default Button;
