import React from 'react';
import { connect } from 'react-redux';
import { delData}  from '../actions/delActions';
import './style.css'
class ClearOne extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick(){
        console.log('deleteOne fired');
        console.log(this.props.index);
        this.props.cOne('http://localhost:3001/del/'+this.props.index);
    }
	render() {
        return (
            <button type="del" onClick = {this.handleClick} id={this.props.index + 'Clear'}>Clear</button>
        );
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
      cOne: (index) => {
        dispatch(delData(index));
      }
    }
};
export default connect(null, mapDispatchToProps)(ClearOne);