import React, { useState } from 'react'
import $ from 'jquery';
import 'jquery-ui-bundle';
import 'jquery-ui-bundle/jquery-ui.min.css';
import styles from '../scss/Slider.module.scss';
import classNames from 'classnames/bind';



const cx = classNames.bind(styles);


class TimeSlider extends React.Component {
    constructor(props) {
      super(props);
    }

    componentDidMount() {
        $(function() {
            const handle = $( "#custom-handle" );
            $("#slider").slider({
              create: function() {
                handle.text( $( this ).slider( "value" ) );
              },
              slide: function( event, ui ) {
                handle.text( ui.value );
              }
            });
        });
    }


    render() {
      return (
        <div>
            <div id="slider">
                <div id="custom-handle" className={cx('custom-slider-handle', 'ui-slider-handle')}></div>
            </div>
        </div>
    )
    }
  }


  export default TimeSlider;