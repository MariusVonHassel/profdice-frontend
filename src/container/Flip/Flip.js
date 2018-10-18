import React, { Component } from 'react';
import { setPageType } from '../../actions/pageTypeActions';

import PropTypes from 'prop-types';
import connect from 'react-redux/es/connect/connect';

class Flip extends Component {

    render() {

        const {
            front = '',
            frontSubmit = '',
            back = '',
            backSubmit = '',
            header = '',
        } = this.props;

        return (
            <div className='flip'>

                <div className='flip-header'>
                    {header}
                </div>

                <div className='flip-wrapper'>

                    <div className='flip-flipper'>

                        <div className='flip-front'>
                            {front}
                            {frontSubmit}
                        </div>

                        <div className='flip-back'>
                            {back}
                            {backSubmit}
                        </div>

                    </div>

                </div>

            </div>
        );
    }
}

Flip.propTypes = {
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
    pageType: state.pageTypeReducer.pageType
});

export default connect(mapStateToProps, mapDispatchToProps)(Flip);