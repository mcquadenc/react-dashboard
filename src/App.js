import React, { Component } from 'react';
import { Admin, Resource } from 'react-admin';
import UserList from './users';
import jsonServerProvider from 'ra-data-json-server';

const dataProvider = jsonServerProvider('http://jsonplaceholder.typicode.com');

class App extends Component {
	render() {
		return (
		  <Admin dataProvider={dataProvider}>
		    <Resource name="users" {...UserList} />
		  </Admin>
        );
    }
}

export default App;