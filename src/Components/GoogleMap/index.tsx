import React, {Component} from 'react';

export default class PageAbout extends Component {

    render(){
        return(
            <div className="google-map">
                <iframe src="https://yandex.ru/map-widget/v1/?um=constructor%3Abfee81a64d7349af806d981cdc4079929e705a70438ff945b333aa77e551e393&amp;source=constructor" width="100%" height="400" frameBorder="0"></iframe>
            </div>
        );
    }
}