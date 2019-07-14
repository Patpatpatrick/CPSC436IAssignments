import React from 'react';
import './style.css'
import { connect } from 'react-redux';
import { uploadData } from '../actions/postActions';
import { changePopedMessage } from '../actions/fetchActions';


class Popup extends React.Component {

    constructor(props) {
        super(props);
        this.uploadChange = this.uploadChange.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }
    uploadChange (event) {
      event.preventDefault();
      this.props.updataMessage('http://localhost:3001/changeMessage/' + this.props._id, this.props.message,'PUT');
    }
    handleChange (event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;
        this.props.changePopedMessage(name,value);
    }
    renderMessage = () => {
      return (
                <div className='popup_inner' >
                  <form onSubmit={this.uploadChange} onChange={this.handleChange} className="form" ref = "inputform">
                    <label htmlFor="fname">From</label>
                    <input type = 'text' name = 'fromname' defaultValue = {this.props.message.fromname}/>

                    <label htmlFor="tname">To</label>
                    <input type = 'text' name = 'toname' defaultValue = {this.props.message.toname}/>

                    <label htmlFor="Category">Category</label>
                    <input type = 'text' name = 'category' defaultValue = {this.props.message.category}/>

                    <label htmlFor="subject">Content</label>
                    <textarea id="subject" name="textcontent" placeholder= {this.props.message.textcontent}></textarea>
                    <center>
                        <button type = 'submit' value="Submit" id = "submitEditBtn" >save change</button>
                        <button type = 'close'>
                          <a className="active" href="http://localhost:3000">Home</a>
                        </button>
                    </center>
                </form>
                  
                </div>
              );
    }

    render() {
      return (
        <div className='popup'>
            {this.renderMessage()}
        </div>
      );
    }
}

const mapStateToProps = (state) => {
    return { 
        message: state.fetchReducers.popUpMessage,
    };
}
const mapDispatchToProps = (dispatch) => {
    return {
      updataMessage: (url,data,method) => {
        dispatch(uploadData(url,data,method));
      },
      changePopedMessage: (name,value) =>{
        dispatch(changePopedMessage(name,value));
      }
    }
};
export default connect(mapStateToProps, mapDispatchToProps)(Popup);


