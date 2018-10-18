import React, { Component } from 'react';

import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { setPageType } from '../../actions/pageTypeActions';
import BreadcrumbItem from './BreadcrumbItem';

export class Breadcrumb extends Component {

    renderBreadcrumbItem(pageTypeItem, linkPath, title) {
        return (
            <BreadcrumbItem
                pageTypeItem={pageTypeItem}
                linkPath={linkPath}
                title={title}
            />
        );
    }

    render() {

        return (

            <ul className='breadcrumb'>

                {this.renderBreadcrumbItem('unitSelection', 'unit-selection', '1.')}
                {this.renderBreadcrumbItem('weaponSelection', 'weapon-selection', '2.')}
                {this.renderBreadcrumbItem('modifierSelection', 'modifier-selection', '3.')}
                {this.renderBreadcrumbItem('evaluation', 'evaluation', '4.')}

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