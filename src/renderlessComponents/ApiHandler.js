import { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { setPageType } from "../actions/pageTypeActions";
import { fetchForces } from "../actions/forceAction";
import { setForcesArray } from "../actions/forceAction";
import { fetchAllUnits, setFetchedUnits } from "../actions/allUnitsAction";
import { setAttackerRace, setAttackerUnitArray } from "../actions/attackerActions";

export class ApiHandler extends Component {

    componentWillMount() {
        this.props.onFetchForces();
    }

    componentDidUpdate() {

        (this.props.forces !== undefined && this.props.forces.length > 0 && this.props.forcesArray.length === 0) && this.props.onSetForcesArray(this.changeArrayStucture(this.props.forces, 1));


        //  if (this.props.forces !== undefined && this.props.forces.length > 0) {
        //      //console.log(this.props.attackerRace.length);
        //
        //      console.log('if');
        //
        //      console.log(this.props.forces.length);
        //
        // }
        // console.log('componentDidUpdate');
        // //console.log(this.props.forces.length);
        //console.log(this.props.forces);
        //console.log(this.props.forcesArray);

       if (this.props.attackerRace !== undefined && this.props.attackerRace.length > 0) {

           if (this.props.allUnits.id === undefined && this.props.attackerRace.length === 1 && this.props.fetchedUnits.length === 0) {
               console.log('fetched Units:');
               console.log(this.props.attackerRace[0].value);

                //this.props.onSetFetchedUnits(this.props.onFetchAllUnits(this.props.attackerRace[0].value));

                this.props.onFetchAllUnits(this.props.attackerRace[0].value);

           } else if (this.props.allUnits !== undefined && this.props.fetchedUnits.length === 0) {
                console.log('else');
               this.props.onSetFetchedUnits(this.props.allUnits);
           }

           //console.log(this.props.fetchedUnits);

           // fetched.forEach(item => {
           //     let match = this.props.attackerRace.find(key => key.id === item.value);
           //     if (match === undefined) {console.log(item.value)}
           // });

           console.log(this.props.allUnits);
           console.log(this.props.fetchedUnits);

           ///console.log(this.props.attackerRace);

           //console.log(this.props.attackerUnit);

           //console.log(this.props.attackerUnitArray)


       }

       //this.fetchAllUnits(this.props.attackerRace);

        //(this.props.attackerRace !== undefined && this.props.attackerRace.length > 0) && this.props.onSetAttackerUnitArray([{value: 'salat', label: 'salat'}]);
        ///this.props.onSetAttackerUnitArray([{value: 'salat', label: 'salat'}]);
    }

    changeArrayStucture(obj, toObj) {

        console.log('je na pa');

        let result = [];

        obj.forEach(item => {
            (toObj === 1) ? result.push({value: item, label: this.context.t(item)}) : result.push(item.value);
        });

        return result;

    }

    fetchAllUnits(val) {
        console.log('tsst');



        //this.props.onFetchAllUnits('necrons');


        //this.props.onSetAttackerUnitArray([{value: 'salat', label: 'salat'}]);


    }

    render() {


        //console.log(this.props.attackerRace);
        //console.log(this.props.attackerRace);
        //console.log(this.props.allUnits);
       // console.log(this.props.forces);

        return null;

    }

}

ApiHandler.contextTypes = {
    t: PropTypes.func.isRequired
};

ApiHandler.propTypes = {
    pageType: PropTypes.string.isRequired,
    forces: PropTypes.array,
    forcesArray: PropTypes.array,
    attackerRace: PropTypes.array,
    attackerUnitArray: PropTypes.array,
    allUnits: PropTypes.object,
    fetchedUnits: PropTypes.array
};

const mapStateToProps = state => ({
    allUnits: state.allUnitsReducer.allUnits,
    fetchedUnits: state.allUnitsReducer.fetchedUnits,
    attackerRace: state.attackerReducer.attackerRace,
    attackerUnitArray: state.attackerReducer.attackerUnitArray,
    lang: state.i18nState.lang,
    pageType: state.pageTypeReducer.pageType,
    forces: state.forcesReducer.forces,
    forcesArray: state.forcesReducer.forcesArray,

});

const mapDispatchToProps = dispatch => {
    return {
        onSetPageType: (newState) => {
            dispatch(setPageType(newState));
        },
        onSetForcesArray: (newState) => {
            dispatch(setForcesArray(newState));
        },
        onSetAttackerRace: (newState) => {
            dispatch(setAttackerRace(newState));
        },
        onSetAttackerUnitArray: (newState) => {
            dispatch(setAttackerUnitArray(newState));
        },
        onFetchAllUnits: (raceName) => {
            dispatch(fetchAllUnits(raceName));
        },
        onSetFetchedUnits: (newState) => {
            dispatch(setFetchedUnits(newState));
        },
        onFetchForces: () => {
            dispatch(fetchForces());
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(ApiHandler);