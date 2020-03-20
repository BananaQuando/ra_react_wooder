import React, {Component} from 'react';

export default class Footer extends Component {
    render(){
        return(
            <div className="footer">
                <div className="footer__content">
                    <div className="footer__copyright">© 2016 WOODER</div>
                    <a href="#" className="logo logo--accent logo--md">wooder</a>
                    <div className="footer__design-by">
                        Designed by <span className="name-accent">Viacheslav Olianishyn</span>
                    </div>
                </div>
            </div>
        );
    }
}

