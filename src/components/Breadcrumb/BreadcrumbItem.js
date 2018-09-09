import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from "prop-types";
import { connect } from 'react-redux';

import { setPageType } from '../../actions/pageTypeActions';

export class BreadcrumbItem extends Component {

    render() {

        const {
            pageTypeItem = '',
            linkPath = '',
            title = ''
        } = this.props;

        return(

            <li className='breadcrumb-item'>
                <Link className='breadcrumb-link' to={'/'+ linkPath} onClick={()=>{this.props.onSetPageType(pageTypeItem)}}>
                    {(this.props.pageType === pageTypeItem) ? this.context.t(pageTypeItem) : title}
                </Link>
            </li>

        );
    }
}

BreadcrumbItem.contextTypes = {
    t: PropTypes.func.isRequired
};

BreadcrumbItem.propTypes = {
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

export default connect(mapStateToProps, mapDispatchToProps)(BreadcrumbItem);