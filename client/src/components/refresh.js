import React from 'react';
import { connect } from 'react-redux';
import { fetchData }  from '../actions/fetchActions';
import './style.css'
class ClearAll extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick(){
        this.props.fetch('http://localhost:3001/getMessages');
    }
	render() {
        return (
            <center>
                <button type="del" onClick = {this.handleClick} id="view">Refresh</button>
            </center>
        );
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        fetch: (url) => {
        dispatch(fetchData(url));
      }
    }
};

export default connect(null, mapDispatchToProps)(ClearAll);