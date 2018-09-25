import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class SubmitButton extends Component {

    render() {

        const {
            className = '',
            children = '',
            disabledValue = true,
            onClick = '',
            path = ''
        } = this.props;

        console.log(disabledValue);

        if (disabledValue) {
            return (
                <div className='clearfix'>

                    <button className={'button button--submit' + className} disabled={disabledValue}>{children}</button>

                </div>
            );
        } else {
            return(
                <Link to={path} className='clearfix'>

                    <button className={'button button--submit' + className} onClick={onClick} disabled={disabledValue}>{children}</button>

                </Link>
            );
        }

    }
}