import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { Collapsible, CollapsibleItem, Input } from "react-materialize";

import IconButton from "../../components/Buttons/IconButton";
import SubmitButton from "../../components/Buttons/SubmitButton";
import { setPageType } from "../../actions/pageTypeActions";
import InputSelect from "../../components/InputSelect/InputSelect";
import { defaultValuesAttacker } from "../../defaults/defaults";
import Breadcrumb from "../../components/Breadcrumb/Breadcrumb";

export class UnitSettings extends Component {

    render() {

        const setStatsHeadline = (objectIDPrefix) => {
            return defaultValuesAttacker.defaultValues.headlines.map((item, objectIDPrefix)=> {
                return <div key={item+''+objectIDPrefix} className="collapsible-cell col s1">{this.context.t(item)}</div>
            });
        };

        const setStatsInputs = (objectIDPrefix) => {
            return defaultValuesAttacker.defaultValues.fieldIdents.map((item, objectIDPrefix)=>{
                return (
                    <div key={item+''+objectIDPrefix} className="collapsible-cell col s1">
                        <InputSelect className="collapsible-select" defaultValues={defaultValuesAttacker.defaultValues[item]} />
                    </div>
                );

            });
        };

        return(
            <div className="unitSettings">

                <Breadcrumb />

                <div className="unitSettings-titleWrapper headline headline-1">

                    <IconButton
                        className="headline-title button button--attacker"
                        iconClass="material-icons button-icon"
                        iconName="colorize"
                    >{this.context.t('attacker')}</IconButton>

                </div>

                <Collapsible>

                    <CollapsibleItem header={this.context.t('defaultUnitSettings')} icon=''>

                        <div className="collapsible-contentWrapper">

                            <div className="collapsible-content">


                                <div className="collapsible-statsWrapper">

                                    <div className="collapsible-row row">

                                        {setStatsHeadline('attackerHeadline')}

                                    </div>

                                    <div className="collapsible-row row">

                                        {setStatsInputs('attackerStats')}

                                    </div>

                                </div>

                            </div>

                            <div className="collapsible-content">

                                <div className="collapsible-headline">{this.context.t('unitCount')}</div>

                                <InputSelect className="collapsible-select collapsible-select--unitCount" defaultValues={defaultValuesAttacker.defaultValues.unitCount} />

                            </div>

                        </div>

                    </CollapsibleItem>

                    <CollapsibleItem header={this.context.t('weaponItemUnitSettings')} icon=''>

                        <Input name='' type='checkbox' className='filled-in' value='' label={this.context.t('Trefferwurf -1')}/>

                    </CollapsibleItem>

                    <CollapsibleItem header={this.context.t('specialUnitSettings')} icon=''>

                    </CollapsibleItem>

                    <CollapsibleItem header={this.context.t('stratagems')} icon=''>

                    </CollapsibleItem>

                </Collapsible>


                <div className="unitSettigs-titleWrapper headline headline-1">

                    <IconButton
                        className="headline-title button button--defender"
                        iconClass="material-icons button-icon"
                        iconName="security"
                    >{this.context.t('defender')}</IconButton>

                </div>

                <SubmitButton
                    className=' btn unitSettings-submit'
                    onClick={()=>{this.props.onSetPageType('summary')}}
                    path="/summary"
                >
                    {this.context.t('confirmSelection')}
                </SubmitButton>
            </div>
        );
    }
}

UnitSettings.contextTypes = {
    t: PropTypes.func.isRequired
};

UnitSettings.propTypes = {
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

export default connect(mapStateToProps, mapDispatchToProps)(UnitSettings);