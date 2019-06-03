import React from 'react';
import './style.css'
import { connect } from 'react-redux';
import { closePopedMessage } from '../actions';


class Popup extends React.Component {
    render() {
      return (
        <div className='popup'>
          <div className='popup_inner'>
                <div>from : {this.props.message.fromname}</div>
                <div>to : {this.props.message.toname}</div>
                <div>category: {this.props.message.category}</div>
                <div>content: {this.props.message.textcontent}</div>
                <div>date: {this.props.message.date.toString()}</div>
                <button type = 'close' onClick={this.props.closePopedMessage}>close me</button>
          </div>
        </div>
      );
    }
}
const mapStateToProps = (state) => {
    return { 
        toPopThisIndex : state.messageProcess.popUpMessageIndex,
        message: state.messageProcess.messageArray[state.messageProcess.popUpMessageIndex],
    };
}
const mapDispatchToProps = (dispatch) => {
    return {
      closePopedMessage: () => {
        dispatch(closePopedMessage());
      }
    }
};
export default connect(mapStateToProps, mapDispatchToProps)(Popup);


