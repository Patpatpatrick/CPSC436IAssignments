import React from 'react';
import './style.css'
import ClearOne from './ClearOne';
import SeeOne from './ViewOneMessage';
import { connect } from 'react-redux';
import { fetchData }  from '../actions/fetchActions';
import {reset} from '../actions/postActions';
import {resetDel} from '../actions/delActions';

class MessageBox extends React.Component { 
    componentDidMount(){
        console.log("componentDidMount");
        this.props.fetchData('http://localhost:3001/getMessages');
    }
    componentDidUpdate(prevProps){
        if((this.props.postCauseDisplayNew !== prevProps.postCauseDisplayNew)
            || (this.props.delCauseDisplayNew !== prevProps.delCauseDisplayNew)){
            this.props.fetchData('http://localhost:3001/getMessages');
            this.props.resetPostStatusToDefault();
            this.props.resetDelStatusToDefault();
        }
    }
 
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
                        {this.props.messageArray.map( (message) => {
                            return (
                                <tr id = {message._id} key = {message._id}>
                                    <td>{message.fromname}</td>
                                    <td>{message.toname}</td>
                                    <td>{message.category}</td>
                                    <td>{message.textcontent}</td>
                                    <td>{message.date.toString()}</td>
                                    <td><ClearOne index = {message._id}/><SeeOne index = {message._id}/></td>
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
    return { 
        messageArray: state.fetchReducers.messageArray,
        postCauseDisplayNew: state.postReducers.fetchAddtionally,
        delCauseDisplayNew: state.delReducers.fetchAddtionally,
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
      fetchData: (url) => {
        dispatch(fetchData(url));
      },
      resetPostStatusToDefault: () => {
        dispatch(reset());
      },
      resetDelStatusToDefault: ()=>{
          dispatch(resetDel());
      }
    }
};

export default connect(mapStateToProps,mapDispatchToProps)(MessageBox);