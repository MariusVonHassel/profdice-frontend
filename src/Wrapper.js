import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import I18n from 'redux-i18n'
import { connect } from 'react-redux';
import { translations } from './translations/translations';
import { withRouter } from 'react-router';

import Header from './container/Header/Header.js';
import Main from './container/Main/Main.js';
import Footer from './container/Footer/Footer.js';

export class Wrapper extends Component {
    render() {
        return (
            <I18n translations={translations} initialLang='de'>
                <Header />

                <Main />

                <Footer />
            </I18n>
        );
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onSetPageType: (location) => {
        }

    }
};

const mapStateToProps = (state) => ({

});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Wrapper));