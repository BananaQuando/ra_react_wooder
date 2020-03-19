import React, {Component} from 'react';

export default class Languages extends Component {

    render() {
        const LangugaesArray = this.props.languages;
        const listLanguages = LangugaesArray.map((language) =>
            <li>
                <a href="#">
                    {language}
                </a>
            </li>
        );

        return (
            <ul>
                {listLanguages}
            </ul>
        );
    }
}