import React, { Component } from "react";
import { Icon } from "react-materialize";

export default class IconButton extends Component {

    render() {

        const {
            className = "",
            iconClass = "",
            iconName = "",
            // href = '#',
            // dataTag = '',
            // value = '',
            onClick = null,
            children = ""
        } = this.props;

        // const dataAttributes = {
        //    [dataTag] : value
        // };

        return (
            <span className={className} onClick={onClick}><Icon className={iconClass}>{iconName}</Icon>{children}</span>
        );
    }
}