import { Link } from 'react-router-dom';
import styles from './Button.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

function Button({ children, className, to, href, featured = false, primary = false, ...passProps }) {
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
        [className]: className,
    });

    return (
        <Comp className={classes} {...passProps}>
            <span>{children}</span>
        </Comp>
    );
}

export default Button;
