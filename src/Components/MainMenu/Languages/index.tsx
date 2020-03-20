import React, {Component} from 'react';

interface Props {
    languages?: any[];
}

export default class Languages extends Component <Props>{

    render() {
        const LangugaesArray = this.props.languages;
        if (LangugaesArray === undefined) return;
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