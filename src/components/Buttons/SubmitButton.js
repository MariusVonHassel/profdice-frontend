import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class SubmitButton extends Component {

    render() {

        const {
            className="",
            children="",
            onClick="",
            path=""
        } = this.props;


        return(

            <Link to={path}className="clearfix">

                <span className={"button button--submit" + className} onClick={onClick}>{children}</span>

            </Link>

        );


    }
}