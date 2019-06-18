import React from 'react';
import { connect } from 'react-redux';
// import { generateMessage } from '../actions/messageArrayActions';
// import { changeUnsubmittedMessage } from '../actions/changeInputAction';
import './style.css'
import { uploadData } from '../actions/postActions';

class InputForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            fromname: '',
            toname: '',
            category: 'A',
            textcontent: ''
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleSubmit (event) {
        event.preventDefault();
        const data = this.state;
        this.props.postMessage('http://localhost:3001/addMessage',data,'POST');
    }
    handleChange (event) {
        this.setState({ [event.target.name]: event.target.value });
    }
	render() {
        return (
            <div className="container" >
                <form onSubmit={this.handleSubmit} onChange={this.handleChange} className="form" ref = "inputform">
                    <label htmlFor="fname">From</label>
                    <input type="text" id="fname" name="fromname" placeholder="Your name.."></input>
                    <label htmlFor="lname">To</label>
                    <input type="text" id="tname" name="toname" placeholder="Receiver's name.."></input>
                
                    <label htmlFor="Category">Category</label>
                    <select id="category" name="category">
                        <option value="A">A</option>
                        <option value="B">B</option>
                        <option value="C">C</option>
                    </select>

                    <label htmlFor="subject">Content</label>
                    <textarea id="subject" name="textcontent" placeholder="Write something.."></textarea>
                    <center>
                        <button type="submit" value="Submit" id = "submitBtn">Submit</button>
                        <button type="reset" value="Reset">Reset</button>
                    </center>
                </form>
            </div>
        );
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
      postMessage: (url,data,method) => {
        dispatch(uploadData(url,data,method));
      }
    }
};

export default connect(null, mapDispatchToProps)(InputForm);