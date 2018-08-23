import React, { Component } from "react";
import PropTypes from "prop-types";

import IconButton from "../Buttons/IconButton";
import { connect } from "react-redux";
import { setPageType } from "../../actions/pageTypeActions";

export class SingleProject extends Component {

    render() {

        const {
            calculation = ''
        } = this.props;


        return (

            <div className="singleProject">

                <div className="row">

                    <div className="col s3 m2 singleProject-imageWrapper">

                        <img className="singleProject-image" src="" alt={calculation.atackerRace}/>

                    </div>

                    <div className="col s5 m7 singleProject-content">

                        <div className="singleProject-headline">{calculation.projectName}</div>

                        <div className="singleProject-text">{calculation.atackerUnits[0]} {this.context.t('versus')} {calculation.defenderUnits[0]}</div>

                    </div>

                    <div className="col s3 m2 singleProject-imageWrapper">

                        <img className="singleProject-image" src="" alt={calculation.defenderRace}/>

                    </div>

                    <div className="col s1 singleProject-naviBar">

                        <IconButton
                            className='button button--menu'
                            iconClass='button-icon small material-icons'
                            iconName='more_vert'
                        />

                    </div>

                </div>
der geht !
            </div>

        );
    }
}

SingleProject.contextTypes = {
    t: PropTypes.func.isRequired
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
    pageType: state.pageTypeReducer.pageType
});

export default connect(mapStateToProps, mapDispatchToProps)(SingleProject)