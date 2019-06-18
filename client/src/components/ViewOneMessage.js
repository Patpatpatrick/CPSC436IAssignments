import React from 'react';
import { connect } from 'react-redux';
import { fetchSingleItem }  from '../actions/fetchActions';
import { firePopUP } from '../actions/popUpActions';
import './style.css'
import Popup from './PopUp'
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";
class SeeOne extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick(){
        console.log(this.props.index);
        this.props.firePopUP();
        this.props.showIndexMessage('http://localhost:3001/getMessages/' + this.props.index);
    }
	render() {
        return (
            <BrowserRouter> {/* browserRouter is a router component Generally speaking, you should use a <BrowserRouter> if you have a server that responds to requests and a <HashRouter> if you are using a static file server.*/}
                <div>
                    <button type="view">
                        <Link
                            to={'/popup/' + this.props.index}
                            onClick={this.handleClick}
                            id={this.props.index + 'View'}
                        >Edit</Link>
                        <Switch>
                            <Route path="/popup" 
                            render={(props) => <Popup {...props} idx={this.props.index} />}
                            />
                        </Switch> 
                    </button>
                    
                </div>
            </BrowserRouter>
        );
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
      showIndexMessage: (url) => {
        dispatch(fetchSingleItem(url));
      },
      firePopUP : () => {
          dispatch(firePopUP());
      }
    }
};
export default connect(null, mapDispatchToProps)(SeeOne);