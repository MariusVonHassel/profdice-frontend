import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import SingleProject from '../SingleProject/SingleProject';
import { setPageType } from '../../actions/pageTypeActions';

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

Projects.propTypes = {
    pageType: PropTypes.string.isRequired
};

const mapDispatchToProps = dispatch => {
    return {
        onSetPageType: (newState) => {
            dispatch(setPageType(newState));
        }
    }
};

const mapStateToProps = state => ({
    lang: state.i18nState.lang,
    pageType: state.pageTypeReducer.pageType,
});

export default connect(mapStateToProps, mapDispatchToProps)(Projects);