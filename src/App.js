import React, { Component } from 'react';
import { Admin, Resource } from 'react-admin';

import './App.css';

import UserList from './users';
import jsonServerProvider from './ra-data-json-server';

import { Login, Layout } from './layout';

import {
    fetchUtils,
    GET_LIST,
    GET_ONE,
    GET_MANY,
    GET_MANY_REFERENCE,
    CREATE,
    UPDATE,
    UPDATE_MANY,
    DELETE,
    DELETE_MANY,
} from 'react-admin';
const dataProvider = jsonServerProvider('http://jsonplaceholder.typicode.com');


// const callDataProvider = (type, resource, params) => {
        
// 		const dataProvider = jsonServerProvider('http://jsonplaceholder.typicode.com');
//         dataProvider(type, resource, params)
//             .then(({ data, total }) => {
//                 this.setState({
//                     data,
//                     total,
//                     loading: false,
//                 });
//             })
//             .catch(error => {
//                 this.setState({
//                     error,
//                     loading: false,
//                 });
//             });
//     };


class App extends Component {

	render() {

		// console.log(this);
		this.state = {a:2};
		return (
			<Admin 
				dataProvider={dataProvider}
				loginPage={Login}
				appLayout={Layout}
			>
				<Resource name="users" {...UserList} />
			</Admin>
        );
    }
}

export default App;