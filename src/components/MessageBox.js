import React from 'react';
import './style.css'
import ClearOne from './ClearOne.js';
import { connect } from 'react-redux';


class MessageBox extends React.Component { 
 
	render() {
        return (
            <div className="messages">		
                <table id = "messagetable" style={{"wordWrap":"break-word","wordBreak":"break-all"}}>
                    <tbody>
                        <tr id = "messagetableHeader">
                            <th style={{width: '50px'}}>From</th>
                            <th style={{width: '50px'}}>To</th>
                            <th style={{width: '50px'}}>Category</th>
                            <th>Content</th>
                            <th style={{width: '190px'}} >Added Date</th>
                            <th style={{width: '20px'}}>Operation</th>
                        </tr>
                        {this.props.messageArray.map( (message, idx) => {
                            return (
                                <tr id = {idx}>
                                    <td>{message.fromname}</td>
                                    <td>{message.toname}</td>
                                    <td>{message.category}</td>
                                    <td>{message.textcontent}</td>
                                    <td>{message.date.toString()}</td>
                                    <td><ClearOne index = {idx}/></td>
                                </tr>
                            )
                            })
                        }
                    </tbody>
                </table>
            </div>
        );
    }
}
const mapStateToProps = (state) => {
    return { messageArray: state.messageProcess.messageArray};
}
const MessageBoxF = connect(mapStateToProps,null)(MessageBox);
export default MessageBoxF;