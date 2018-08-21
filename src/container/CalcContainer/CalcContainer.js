import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import Select from "react-select";
import { setPageType } from "../../actions/pageTypeActions";

export class CalcContainer extends Component {

    render() {

        const {
            placeholder = '',
            options = '',
            value = '',
            onChange = '',
            selectDiscriptionHeadline,
            multi=false

        } = this.props;

        return (

            <div className="calcContainer">

               <div className="calcContainer-headline">{selectDiscriptionHeadline}</div>

                <Select
                    name="selectAtackerRace"
                    value={value}
                    onChange={onChange}
                    searchable={false}
                    placeholder={placeholder}
                    removeSelected={false}
                    multi={multi}
                    options={options}
                />

            </div>

        );
    }
}

CalcContainer.contextTypes = {
    t: PropTypes.func.isRequired
};

CalcContainer.propTypes = {
    pageType: PropTypes.string.isRequired
};

const mapStateToProps = state => ({
    lang: state.i18nState.lang,
    pageType: state.pageTypeReducer.pageType
});

const mapDispatchToProps = dispatch => {
    return {
        onSetPageType: (newState) => {
            dispatch(setPageType(newState));
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(CalcContainer);