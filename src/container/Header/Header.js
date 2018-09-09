import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import IconButton from '../../components/Buttons/IconButton';
import { SideNav } from 'react-materialize';
import { setPageType } from '../../actions/pageTypeActions';

class Header extends Component {

    render() {
        return (

            <div className='header'>

                <div className='header-wrapper'>

                    <SideNav
                        trigger={
                            <span className='header-menuWrapper'>
                                <IconButton
                                    className='header-menu'
                                    iconName='menu'
                                />
                            </span>}
                        options={{ closeOnClick: true }}
                    >


                        <Link to='/' onClick={()=>{this.props.onSetPageType('projects');}}>
                            {this.context.t('projects')}
                        </Link>

                        <Link to='/new-calculation' onClick={()=>{this.props.onSetPageType('newCalculation');}}>
                           {this.context.t('newCalculation')}
                        </Link>

                        <Link to='/legal-notice' onClick={()=>{this.props.onSetPageType('legalNotice');}}>
                            {this.context.t('legalNotice')}
                        </Link>

                        <Link to='/about-this-website' onClick={()=>{this.props.onSetPageType('aboutThisWebsite');}}>
                           {this.context.t('aboutThisWebside')}
                        </Link>
                    </SideNav>

                    <Link to='/' onClick={()=>{this.props.onSetPageType('projects');}}>
                        <h1 className='header-headline'>{this.context.t('headline')}</h1>
                    </Link>

                    <IconButton
                        className='header-account button button--account'
                        iconClass='button-icon'
                        iconName='settings'
                    />

                    {(this.props.pageType==='home' || this.props.pageType==='projects') ?
                        <Link to='/new-calculation'>
                            <IconButton
                                className='header-plus button button--plus'
                                iconClass='button-icon'
                                iconName='add'
                                onClick={()=> {this.props.onSetPageType('newCalc')}}
                            />
                        </Link>
                    : null}

                </div>

            </div>

        );
    }

}

Header.propTypes = {
    pageType: PropTypes.string.isRequired
};

Header.contextTypes = {
    t: PropTypes.func.isRequired
};

const mapDispatchToProps = (dispatch) => {
    return {
        onSetPageType: (location) => {
            dispatch(setPageType(location));
        }

    }
};

const mapStateToProps = (state, ownProps = {}) => ({
    location: state.location,
    lang: state.i18nState.lang,
    pageType: state.pageTypeReducer.pageType
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);