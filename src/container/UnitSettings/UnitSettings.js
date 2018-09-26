import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import SubmitButton from '../../components/Buttons/SubmitButton';
import { setPageType } from '../../actions/pageTypeActions';
import Breadcrumb from '../../components/Breadcrumb/Breadcrumb';
import DropdownMenu from '../../components/Menu/DropdownMenu';

class UnitSettings extends Component {

    componentWillMount() {

        this.checkValidInput();
    }

    checkValidInput() {
        if (this.props.attackerUnit.length > 0 && this.props.defenderUnit.hasOwnProperty('value')) {
            this.props.onSetPageType('unitSettings');
        } else {
            this.props.onSetPageType('newCalc');
            this.props.history.push('/new-calculation');
        }
    }

    fetchUnitStats() {

    }

    render() {

        return(
            <div className='unitSettings'>

                <Breadcrumb />

                <DropdownMenu />

                <SubmitButton
                    className=' btn unitSettings-submit'
                    onClick={()=>{this.props.onSetPageType('summary')}}
                    path='/summary'
                >
                    {this.context.t('confirmSelection')}
                </SubmitButton>
            </div>
        );
    }
}

UnitSettings.contextTypes = {
    t: PropTypes.func.isRequired
};

UnitSettings.propTypes = {
    pageType: PropTypes.string.isRequired,
    attackerUnit: PropTypes.array.isRequired,
    defenderUnit: PropTypes.object.isRequired
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
    attackerUnit: state.attackerReducer.attackerUnit,
    defenderUnit: state.defenderReducer.defenderUnit
});

export default connect(mapStateToProps, mapDispatchToProps)(UnitSettings);