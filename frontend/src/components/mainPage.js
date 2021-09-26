import React from 'react'
import axios from "axios";
import List from './list';
export default function mainPage( user ) {
    getLists(user)
    function getLists(user) {
        const options = {// nastaveni pro request na login 
            method: 'GET',
            url: 'http://localhost:3001/list',
            data: {user: `${user}`}
            };
        
            axios.request(options).then(function (response) {
            console.log(response.data);
            return <List list={response.data}/>
            }).catch(function (error) {
            console.error(error);
            });
    }
    return (
        getLists(user)
    )
}
