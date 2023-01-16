import React,{Component} from 'react'
import {Router, Routes, Route } from "react-router-dom";
import UserList from './UserList';
import EditdataForm from './EditdataForm';

export default class Routers extends Component {
    render() {
        return (
            <Router >
                <Routes>
                    <Route path="/" exact element={<UserList/>} />
                    <Route path="/Edit" exact element={<EditdataForm/>} />
                </Routes>
                    
                
            </Router>
        )
    }
}


