import classNames from 'classnames/bind';
import Header from '~/components/Layout/components/Header';
import Banner from '~/components/Layout/components/Banner';

import Footer from '~/components/Layout/components/Footer';
import styles from './DefaultLayout.module.scss';

const cx = classNames.bind(styles);

function DefaultLayout({ children }) {
    return (
        <div>
            <div className={cx('wrapper')}>
                <Header />
                <div className={cx('container')}>
                    <div className={cx('content')}>
                        <Banner />
                        {children}
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default DefaultLayout;
