import React, { Component } from 'react';
import { Admin, Resource } from 'react-admin';
import jsonServerProvider from 'ra-data-json-server';

import './App.css';
import { Login, Layout } from './layout';
import UserList from './users';
import FotoList from './linapix'

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
				<Resource name="photos" {...FotoList} />
			</Admin>
        );
    }
}

export default App;