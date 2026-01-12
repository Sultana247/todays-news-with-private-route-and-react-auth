import React from 'react';
import Header from '../sharedcomponents/Header';
import { Outlet } from 'react-router';

const Root = () => {
    return (
        <div>
            <Outlet></Outlet>
        </div>
    );
};

export default Root;