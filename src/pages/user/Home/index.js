import styles from './Home.module.scss';
import classNames from 'classnames/bind';

import CourseItem from '../../../components/CourseItem';
import ImageCaption from '../../../components/ImageCaption';
import config from '~/config';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import SliderItem from '~/components/SliderItem';

const cx = classNames.bind(styles);

function Home() {
    const [items, setItems] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:5000/shoes').then((response) => {
            setItems(response.data.data);
        });
    }, []);

    return (
        <div>
            <div className={cx('pad-50')}>
                <ImageCaption
                    subTitle="Coming Soon"
                    title="Nike Air Max Dn"
                    desc="The next generation of Air technology launches on March 26 th. Preview the full lineup of colourways now."
                    imageSrc="https://static.nike.com/a/images/f_auto/dpr_1.3,cs_srgb/h_1880,c_limit/2c87526e-3dae-45a0-94ba-345bab73619f/nike-just-do-it.png"
                    buttonLink="/"
                    buttonText="Shop"
                />
                <ImageCaption
                    mainTitle="Trending"
                    subTitle="Trending"
                    title="Nike Dunk"
                    desc="UNAPOLOGETICALLY ORIGINAL - Serve up your undeniable style in the iconic versatility of a hoops legend."
                    imageSrc="https://static.nike.com/a/images/f_auto/dpr_1.3,cs_srgb/w_1377,c_limit/5dac0785-1c08-40f8-9d56-2d0fffaa0af5/nike-just-do-it.png"
                    buttonLink="/"
                    buttonText="Shop"
                />

                <div>
                    <h2 className={cx('mg-bt-24')}>Featured</h2>
                    <div className={cx('course-list')}>
                        <CourseItem
                            imageSrc="https://static.nike.com/a/images/f_auto/dpr_1.3,cs_srgb/w_300,c_limit/85022c8a-8d21-41d6-929b-7f17ab6b624e/nike-just-do-it.png"
                            title="Nike Air Max Dn Coming Soon"
                            buttonLink={'/listproduct/all'}
                            buttonText="Get Notified"
                        />
                        <CourseItem
                            imageSrc="https://static.nike.com/a/images/f_auto/dpr_1.3,cs_srgb/w_452,c_limit/666737a0-d8c0-41fa-9502-984aa9c0a4dd/nike-just-do-it.png"
                            title="Retro Running Shoes"
                            buttonLink={'/listproduct/all'}
                            buttonText="Shop"
                        />
                        <CourseItem
                            imageSrc="https://static.nike.com/a/images/f_auto/dpr_1.3,cs_srgb/w_452,c_limit/4f79ad51-9f73-4b6e-a9d9-a0ac53493b90/nike-just-do-it.png"
                            title="From the J's Up"
                            buttonLink={'/listproduct/all'}
                            buttonText="Shop"
                        />
                    </div>
                </div>
            </div>
            <div>
                <SliderItem items={items} />
            </div>
        </div>
    );
}

export default Home;
