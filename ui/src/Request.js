import React from 'react';
export const Request = ({endpoint, body, method }) => {

const host = "http://localhost:8081"
    const post = async () => {
        return await fetch(host +endpoint, {
            method: 'POST',
            body:  JSON.stringify(body),
            headers: { 'Content-Type': 'application/json'}
        }).then(r => {
            return r
        }).catch(e => {
            console.error(e)
        })
    }

    const get = async () => {
        //get data from server
        return await fetch(host + endpoint, {
            method: 'GET',
        }).then(r => {
            return r
        }).catch(e => {
            console.error(e)
        })
    }


    switch (method) {
        case "POST":
            return post();
        case "GET":
            return get();
        default:
            return get();

    }
}
