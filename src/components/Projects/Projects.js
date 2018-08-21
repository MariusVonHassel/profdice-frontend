import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import SingleProject from "../SingleProject/SingleProject";

export class Projects extends Component {

    render() {

        const calculation = [
            {
                objectID: 0 ,
                atackerRace: 'Spacemarines',
                defenderRace: 'Necrons',
                projectName: 'Dufter Armee Vergleich',
                atackerUnits: ['Scout','Marines'],
                defenderUnits: ['Immortals']
            },
            {
                objectID: 1,
                atackerRace: 'Chaosspacemarines',
                defenderRace: 'Necrons',
                projectName: 'Harte klatsche',
                atackerUnits: ['Land Raider'],
                defenderUnits: ['Marines','Kultisten']
            }

        ];

        return (

            calculation.map(item =>

                <span key={item.objectID}>

                    <SingleProject
                        calculation={item}
                    />

                </span>

            )

        );
    }
}

Projects.contextTypes = {
    t: PropTypes.func.isRequired
};

export default connect(state => ({
    lang: state.i18nState.lang,
}))(Projects)