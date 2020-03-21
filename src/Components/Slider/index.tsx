import React, {Component} from 'react';
import Slick from 'react-slick';
import CustomSlide from './CustomSlide';

// interface Props {
//     slider1: any,
//     slider2: any, 
//     nav1: any, 
//     nav2: any, 
// }

export default class Slider extends Component{

    private slider1?: any;
    private slider2?: any;

    constructor(props) {
        super(props);
        this.state = {
            nav1: null,
            nav2: null
        };
    }

    componentDidMount() {
        this.setState({
            nav1: this.slider1,
            nav2: this.slider2
        });
    }

    render() {

        const settings__left = {
            infinite: true,
            vertical: true,
            arrows: false,
            dots: true,
            appendDots: dots => (
                <div>
                    <div className="slider__number">01</div>
                    <ul className="slider__dots"> 
                        {dots}
                    </ul>
                </div>
            ),
            beforeChange: (current, next) => {
                document.querySelector('.slider__number').innerHTML = '0' + Number(next + 1);
            },
            dotsClass: 'slider__navigation',
            // asNavFor: this.state.nav2,
            asNavFor: this.slider2,
            autoplay: true,
            cssEase: 'ease-in-out',
            speed: 800,
            autoplaySpeed: 4000,
            slidesToShow: 1,
            slidesToScroll: 1,
        }
        const settings__right = {
            infinite: true,
            vertical: true,
            arrows: false,
            dots: false,
            // asNavFor: this.state.nav1,
            asNavFor: this.slider1,
            // autoplay: true,
            cssEase: 'ease-in-out',
            speed: 500,
            autoplaySpeed: 300,
            slidesToShow: 1,
        }

        return(
            <div className="slider">
                <div className="slider__content">
                    <div className="slider__title">wooder</div>
                    <div className="slider__button">
                        <a href="" className="button button_with-border">learn more</a>
                    </div>
                    <div className="slider__scroller">
                        <a href="#catalog-block" className="scroller">
                            <div className="scroller__icon"><img src="img/icons/mouse.png" alt="scroll" /></div>
                            <div className="scroller__arrow"><img src="img/icons/arrow.png" alt="" /></div>
                            <div className="scroller__text">scroll</div>
                        </a>
                    </div>
                </div>
                <Slick
                    className="slider__block-one"
                    {...settings__left}
                    ref={slider => (this.slider1 = slider)}
                >
                    <CustomSlide image="img/slider__item-1.jpg" />
                    <CustomSlide image="img/slider__item-1.jpg" />
                    <CustomSlide image="img/slider__item-1.jpg" />
                </Slick>
                <Slick
                    className="slider__block-two"
                    {...settings__right}
                    ref={slider => (this.slider2 = slider)}
                >
                    <CustomSlide image="img/slider__item-2.jpg" />
                    <CustomSlide image="img/slider__item-2.jpg" />
                    <CustomSlide image="img/slider__item-2.jpg" />
                </Slick>
            </div>
        );
    }
}