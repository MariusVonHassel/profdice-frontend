import React, { Component } from 'react';

import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { setPageType } from '../../actions/pageTypeActions';
import BreadcrumbItem from './BreadcrumbItem';

export class Breadcrumb extends Component {

    render() {

        return(

            <ul className='breadcrumb'>

                <BreadcrumbItem
                    pageTypeItem='newCalc'
                    linkPath='new-calculation'
                    title='1.'
                />

                <BreadcrumbItem
                    pageTypeItem='unitSettings'
                    linkPath='unit-settings'
                    title='2.'
                />

                <BreadcrumbItem
                    pageTypeItem='summary'
                    linkPath='summary'
                    title='3.'
                />

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