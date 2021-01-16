import React, {Suspense} from 'react';
import './App.css';
import s from "./Users/user.module.css"
import {Route} from "react-router-dom";
import 'antd/dist/antd.css';
import Spinner from "./components/utilits/loader";
import SearchPage from "./components/SearchPage/SearchPage";

const UsersContainer = React.lazy(() => import('./Users/UsersContainer'));

const App = () => {
    return (
        <Suspense fallback={<div className={s.loader}>
            <Spinner/></div>}>
            <Route path="/users" render={() => <UsersContainer/>}/>
            <Route path="/search" render={() => <SearchPage/>}/>
        </Suspense>
    );
}
export default App;
