import React, { Component } from 'react';
import { Admin, Resource } from 'react-admin';

import './App.css';

import UserList from './users';
import jsonServerProvider from 'ra-data-json-server';

import { Login, Layout } from './layout';

const dataProvider = jsonServerProvider('http://jsonplaceholder.typicode.com');

class App extends Component {
	render() {
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