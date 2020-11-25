import React, {Suspense} from 'react';
import './App.css';
import s from "./components/user.module.css"
import {Route} from "react-router-dom";
import 'antd/dist/antd.css';
import Spinner from "./components/loader/loader";
import SearchPage from "./components/SearchPage/SearchPage";

const UsersContainer = React.lazy(() => import('./components/UsersContainer'));

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
