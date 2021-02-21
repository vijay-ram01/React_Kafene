//react imports
import React, { useState, useEffect } from 'react';

//axios
import axios from 'axios';

//utils imports
import { USERS_ENDPOINT } from '../../utils/APIEndpoints';

//styles
import './Users.css';


//users method
function Users() {

    const [users, setUsers] = useState([]); //users useState
    const [displayUsers, setDisplayUsers] = useState([]); //displayusers useState
    const [searchText, setSearchText] = useState(''); //searchtext useState

    const _getUsers = async () => {
        const { data } = await axios.get(USERS_ENDPOINT); //axios get
        setUsers(data);
        setDisplayUsers(data);
    }

    //useEffect
    useEffect(() => {
        _getUsers();
    },[])

    //set searchText
    const displayText = e => {
        setSearchText(e.target.value);
    }

    //handles search functionality
    const handleSearchTextChange = e => {
        if(e.key === "Enter"){
        if(searchText.length<2) {
            alert('Please enter at least 2 characters');
            return;
        }
        _updateDisplayUsers();
    }
    }

    //updated user list
    const _updateDisplayUsers = () => {
        const dispUsers=[];
        for(const user of users) {
            if(user.fullName.toLowerCase().includes(searchText.toLowerCase()))
                dispUsers.push(user);
        }
        setDisplayUsers(dispUsers);
    }

    //handles reset btn
    const handleSearchReset = () => {
        setSearchText('');
        setDisplayUsers(users);
    }

    return (
        <main>
        <div className="PageWrapper">
            <h1 className="MainHeading">Users</h1>
            <div className="SearchBoxDiv">
                <input type="text" 
                    className="SearchBox" 
                    name="search-text" 
                    id="search-text" 
                    placeholder="Search By Name"
                    value={searchText}
                    onChange={displayText}
                    onKeyDown={handleSearchTextChange}
                    
                />
                <button 
                    className="ResetBtn" 
                    id="reset-search"
                    onClick={handleSearchReset}
                >
                    Reset
                </button>
            </div>
            <div className="OrdersWrapper">
                <div style={{width: '100%'}}>
                    <table className="OrderTable">
                        <tbody id="users-table">
                            <tr className="TableRow">
                                <th>ID</th>
                                <th>User Avatar</th>
                                <th>Full Name</th>
                                <th>DoB</th>
                                <th>Gender</th>
                                <th>Current Location</th>
                            </tr>
                            {displayUsers.map(({id, profilePic, fullName, gender, dob, currentCity, currentCountry }, index) =>
                                <tr className="TableRow" key={id+''+index}>
                                <td className="SecondaryText">{id}</td>           
                                <td className="PrimaryText">
                                    <img src={profilePic} alt="user-profile-pic" />
                                </td>
                                <td className="SecondaryText">{fullName}</td>
                                <td className="PrimaryText">{`${dob.split('-')[0]} ${dob.split('-')[1]}, ${dob.split('-')[2]}`}</td>
                                <td className="SecondaryText">{gender}</td>
                                <td className="SecondaryText">{currentCity}, {currentCountry}</td>
                            </tr>
                            )}                            
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </main>
    )
}

export default Users
