import React, { Component } from 'react';
// import PropTypes from 'prop-types';

export default class FlipHeader extends Component {

    clickLeft() {
        document.querySelector('.flip-wrapper').classList.remove('flipped');
        document.querySelector('.flipHeader-left').classList.add('flipHeader-left--active');
        document.querySelector('.flipHeader-right').classList.remove('flipHeader-right--active');
    }

    clickRight() {
        document.querySelector('.flip-wrapper').classList.add('flipped');
        document.querySelector('.flipHeader-right').classList.add('flipHeader-right--active');
        document.querySelector('.flipHeader-left').classList.remove('flipHeader-left--active');
    }

    render() {

        const {
            leftTitle = '',
            rightTitle = ''
        } = this.props;

        return (

            <div className='flipHeader clearfix'>
                <div className='flipHeader-left flipHeader-left--active' onClick={()=>{this.clickLeft()}}>
                    {leftTitle}
                </div>

                <div className='flipHeader-right' onClick={()=>{this.clickRight()}}>
                    {rightTitle}
                </div>
            </div>

        );
    }
}
