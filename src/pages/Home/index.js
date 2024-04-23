import Caption from '~/components/Caption';
import styles from './Home.module.scss';
import classNames from 'classnames/bind';
import Button from '~/components/Button';

const cx = classNames.bind(styles);

function Home() {
    return (
        <div className={cx('pad-50')}>
            <div>
                <img
                    src="https://static.nike.com/a/images/f_auto/dpr_1.3,cs_srgb/h_1880,c_limit/2c87526e-3dae-45a0-94ba-345bab73619f/nike-just-do-it.png"
                    alt=""
                />
                <Caption
                    subTitle="Coming Soon"
                    title="Nike Air Max Dn"
                    desc="The next generation of Air technology launches on March 26 th. Preview the full lineup of colourways now."
                />
            </div>
            <div>
                <h2 className={cx('mg-bt-24')}>Gear Up</h2>
                <img
                    src="https://static.nike.com/a/images/f_auto/dpr_1.3,cs_srgb/w_1377,c_limit/c6a7d92a-360c-4d59-80a8-e91701525330/nike-just-do-it.jpg"
                    alt=""
                />
                <Caption
                    subTitle="Nike Football"
                    title="2024 NATIONAL TEAM KITS"
                    desc="Featuring Dri-FIT ADV, built for the moments that matter most."
                />
            </div>
            <div>
                <h2 className={cx('mg-bt-24')}>Trending</h2>
                <img
                    src="https://static.nike.com/a/images/f_auto/dpr_1.3,cs_srgb/w_1377,c_limit/5dac0785-1c08-40f8-9d56-2d0fffaa0af5/nike-just-do-it.png"
                    alt=""
                />
                <Caption
                    subTitle="Nike Dunk"
                    title="UNAPOLOGETICALLY ORIGINAL"
                    desc="Serve up your undeniable style in the iconic versatility of a hoops legend."
                />
            </div>
            <div>
                <h2 className={cx('mg-bt-24')}>Featured</h2>
                <div className={cx('course-list')}>
                    <div className={cx('course-item')}>
                        <a href="/#">
                            <img
                                src="https://static.nike.com/a/images/f_auto/dpr_1.3,cs_srgb/w_300,c_limit/85022c8a-8d21-41d6-929b-7f17ab6b624e/nike-just-do-it.png"
                                alt=""
                                className={cx('thumb')}
                            />
                        </a>

                        <div className={cx('info')}>
                            <div>
                                <h3>Nike Air Max Dn Coming Soon</h3>

                                <Button featured to="/">
                                    <span>Get Notified</span>
                                </Button>
                            </div>
                        </div>
                    </div>
                    <div className={cx('course-item')}>
                        <a href="/#">
                            <img
                                src="https://static.nike.com/a/images/f_auto/dpr_1.3,cs_srgb/w_452,c_limit/666737a0-d8c0-41fa-9502-984aa9c0a4dd/nike-just-do-it.png"
                                alt=""
                                className={cx('thumb')}
                            />
                        </a>

                        <div className={cx('info')}>
                            <div>
                                <h3>Retro Running Shoes</h3>
                                <Button featured to="/">
                                    <span>Shop</span>
                                </Button>
                            </div>
                        </div>
                    </div>
                    <div className={cx('course-item')}>
                        <a href="/#">
                            <img
                                src="https://static.nike.com/a/images/f_auto/dpr_1.3,cs_srgb/w_452,c_limit/4f79ad51-9f73-4b6e-a9d9-a0ac53493b90/nike-just-do-it.png"
                                alt=""
                                className={cx('thumb')}
                            />
                        </a>

                        <div className={cx('info')}>
                            <div>
                                <h3>From the J's Up</h3>
                                <Button featured to="/">
                                    <span>Shop</span>
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;
