import React, { Component } from 'react';
import IconButton from '../Buttons/IconButton';

export default class DropdownMenuHeader extends Component {

    render() {

        const {
            iconName = '',
            headlineText = '',
            buttonType = ''
        } = this.props;

        return (
            <div className='dropDownMenu-headlineWrapper headline headline-1'>

                <IconButton
                    className={'headline-title button ' + buttonType}
                    iconClass='material-icons button-icon'
                    iconName={iconName}
                >{headlineText}</IconButton>

            </div>
        );

    }

}