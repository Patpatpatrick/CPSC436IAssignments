import React from 'react';
import { connect } from 'react-redux';
import { delData}  from '../actions/delActions';
import './style.css'
class ClearAll extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick(){
        this.props.cAll('http://localhost:3001/del');
    }
	render() {
        return (
            <center>
                <button type="del" onClick = {this.handleClick} id="ClearAll">ClearAll</button>
            </center>
        );
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
      cAll: (url) => {
        dispatch(delData(url));
      }
    }
};
export default connect(null, mapDispatchToProps)(ClearAll);