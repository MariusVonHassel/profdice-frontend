import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { setPageType } from '../../actions/pageTypeActions';

export class Breadcrumb extends Component {

    render() {

        return(

            <ul className='breadcrumb'>
                <li className='breadcrumb-item'>
                    <Link className='breadcrumb-link' to='/new-calculation' onClick={()=>{this.props.onSetPageType('newCalc')}}>
                        {(this.props.pageType === 'newCalc') ? this.context.t('newCalc') : '1.'}
                    </Link>
                </li>

                <li className='breadcrumb-item'>
                    <Link className='breadcrumb-link' to='/unit-settings' onClick={()=>{this.props.onSetPageType('unitSettings')}}>
                        {(this.props.pageType === 'unitSettings') ? this.context.t('unitSettings') : '2.'}
                    </Link>
                </li>

                <li className='breadcrumb-item'>
                    <Link className='breadcrumb-link' to='/summary' onClick={()=>{this.props.onSetPageType('summary')}}>
                        {(this.props.pageType === 'summary') ? this.context.t('summary') : '3.'}
                    </Link>
                </li>
            </ul>

        );

    }
}


Breadcrumb.contextTypes = {
    t: PropTypes.func.isRequired
};

Breadcrumb.propTypes = {
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

export default connect(mapStateToProps, mapDispatchToProps)(Breadcrumb);