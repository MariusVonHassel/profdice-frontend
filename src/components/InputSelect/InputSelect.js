import React, { Component } from 'react';
// import PropTypes from 'prop-types';

export default class InputSelect extends Component {

    render() {

        const {
            defaultValues = {},
            className = '',
        } = this.props;

        return (

            <select className={className} defaultValue={defaultValues.default}>

                {defaultValues.values.map(
                    (item)=> {return <option key={defaultValues.objectID+''+item} value={item}>{item}</option>}
                )}


            </select>

        );
    }
}
