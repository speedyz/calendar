import React from 'react';
import {Routes, Route, Navigate} from "react-router-dom";
import {privateRoutes, publicRoutes} from '../router';
import {useTypedSelector} from "../hooks/useTypedSelector";

const AppRouter = () => {

    const {isAuth} = useTypedSelector(state => state.auth)
    return (
        isAuth
            ?
            <Routes>
                {privateRoutes.map(route =>
                    <Route
                        key={route.path}
                        path={route.path}
                        element={<route.element/>}
                    />
                )}
                <Route path={'*'} element={<Navigate replace to="/event"/>}/>
            </Routes>
            :
            <Routes>
                {publicRoutes.map(route =>
                    <Route path={route.path}
                           element={<route.element/>}
                           key={route.path}
                    />
                )}
                <Route path={'*'} element={<Navigate replace to="/login"/>}/>
            </Routes>
    );
};

export default AppRouter;