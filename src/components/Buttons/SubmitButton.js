import React, { Component } from "react";

export default class SubmitButton extends Component {

    render() {

        const {
            className='',
            children='',
            onClick='',
        } = this.props;


        return(

            <span className={'button button--submit' + className} onClick={onClick}>{children}</span>

        );


    }
}