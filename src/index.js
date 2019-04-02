import React, { Component } from 'react'
import {Link, NavLink, Route} from 'react-router-dom';

export function reverse(to, params){
    let paramRegex = /:([a-zA-Z]+)/;
    let result = to;

    while(true){
        const foundParams = paramRegex.exec(result);

        if(foundParams === null){
            return result;
        }

        const key = foundParams[1];
        if(params[key] === undefined){
            if(!Array.isArray(params)){
                throw new Error("Url parameter \"" + key + "\" is missing in params");
            }

            result = result.replace(":" + key, params.shift());
        }
        else{
            result = result.replace(":" + key, params[key]);
        }
    }
}

export Link = ({to, params=null, ...props}) => (
    <Link
        to={reverse(props.to, params ? params : props)}
        {...props}
        >
            {props.children}
    </Link>
);

export NavLink = ({to, params=null, ...props}) => (
    <NavLink
        to={reverse(props.to, params ? params : props)}
        {...props}
        >
            {props.children}
    </NavLink>
);
