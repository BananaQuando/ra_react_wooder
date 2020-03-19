import React, {Component} from 'react';
import AdvantagesItem from '../AdvantagesItem';

export default class AdvantagesBlock extends Component {
    render(){
        return(
            <div className="advantages-block">
                <div className="advantages-block__content">
                    <div className="advantages-block__title">wooder - is quality</div>
                    <div className="advantages-block__description">
                        We create unique design objects made of rare wood, specially under the order.
                        Look at the short video about our work.
                    </div>
                </div>
                <div className="advantages-block__items">
                    <AdvantagesItem />
                    <AdvantagesItem />
                    <AdvantagesItem />
                </div>
            </div>
        );
    }
}