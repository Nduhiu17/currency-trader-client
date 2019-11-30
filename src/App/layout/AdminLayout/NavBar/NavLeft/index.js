import React, {Component} from 'react';
import {connect} from 'react-redux';
import windowSize from 'react-window-size';

import * as actionTypes from "../../../../../store/actions";

class NavLeft extends Component {

    render() {
        return (
         <div></div>
        );
    }
}

const mapStateToProps = state => {
    return {
        isFullScreen: state.isFullScreen,
        rtlLayout: state.rtlLayout
    }
};

const mapDispatchToProps = dispatch => {
    return {
        onFullScreen: () => dispatch({type: actionTypes.FULL_SCREEN}),
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(windowSize(NavLeft));
