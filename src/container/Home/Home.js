import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { setPageType } from '../../actions/pageTypeActions';
import SubmitButton from '../../components/Buttons/SubmitButton';

class Home extends Component {

    render() {
        return (
            <div className='home'>home?

                <SubmitButton
                className=' btn home-newProject'
                onClick={()=>{this.props.onSetPageType('unit-selection')}}
                path='/unit-selection'
                disabledValue={false}
                >
                    {this.context.t('newCalculation')}
                </SubmitButton>

                <div>Welcome to Prof. Dice. This is blabla. We blabla.</div>
                <div>News:<br /><br />Update:1 ... - bal bal</div>

            </div>
        );
    }
}

Home.contextTypes = {
    t: PropTypes.func.isRequired
};

Home.propTypes = {
    pageType: PropTypes.string.isRequired
};

const mapStateToProps = state => ({
    lang: state.i18nState.lang,
    pageType: state.pageTypeReducer.pageType,
});

const mapDispatchToProps = dispatch => {
    return {
        onSetPageType: (newState) => {
            dispatch(setPageType(newState));
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);