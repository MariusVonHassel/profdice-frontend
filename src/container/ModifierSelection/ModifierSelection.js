import React, { Component } from 'react';

import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { setPageType } from '../../actions/pageTypeActions';
import SubmitButton from "../../components/Buttons/SubmitButton";
import Breadcrumb from "../../components/Breadcrumb/Breadcrumb";

export class ModifierSelection extends Component {

    componentWillMount() {
        this.props.onSetPageType('modifierSelection');
    }

    render() {

        return (

            <div className='modifierSelection'>

                <Breadcrumb />

                <SubmitButton
                    className=' btn modifier-submit'
                    onClick={()=>{this.props.onSetPageType('evaluation')}}
                    path='/evaluation'
                    disabledValue={false}
                >
                    {this.context.t('confirmSelection')}
                </SubmitButton>

            </div>

        );

    }
}


ModifierSelection.contextTypes = {
    t: PropTypes.func.isRequired
};

ModifierSelection.propTypes = {
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

export default connect(mapStateToProps, mapDispatchToProps)(ModifierSelection);