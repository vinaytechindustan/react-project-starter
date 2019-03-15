import React,{Component,Fragment} from 'react';
import {connect } from 'react-redux';

class Login extends Component{
    render(){
        console.log(this.props)
        return(
            <div>
                this is login Component
            </div>
        )
    }
    
}
const mapStateToProps =(store)=>(store);


export default connect(state=>state)(Login);