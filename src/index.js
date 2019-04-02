import React, { Component } from 'react'
import {Link as OldLink, NavLink as OldNavLink} from 'react-router-dom';

export function reverse(to, params){
    const paramRegex = /:([a-zA-Z]+)/;
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

export const Link = ({to, params=null, ...props}) => (
    <OldLink
        to={reverse(to, params ? params : props)}
        {...props}
        >
            {props.children}
    </OldLink>
);

export const NavLink = ({to, params=null, ...props}) => (
    <OldNavLink
        to={reverse(to, params ? params : props)}
        {...props}
        >
            {props.children}
    </OldNavLink>
);
