/* 
  James Carlson
  Coding Temple - SE FT-144
  Frontend, Module 11 Lesson 2 Assignment: React State and Props
  1. Exploring State and Props in Class Components
*/

import React, {Component} from 'react';
import styles from './UserProfile.module.css';

class UserProfile extends Component {
    constructor(props) {
        super(props);
        this.state = { name: 'Alex' };
    }

    // Incorrect function
    changeName = () => {
        this.setState({name: 'Charlie'});

    }

    render() {
        return (
            <div className={styles.profile}>
                <h5>// 1. Exploring State and Props in Class Components</h5>
                <h1>User Profile</h1>
                <p>Name: {this.state.name}</p>
                <button onClick={this.changeName}>Change Name</button>
            </div>
        );
    }
}

export default UserProfile