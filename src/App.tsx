import AppRouter from "./components/AppRouter";
import Navbar from "./components/Navbar";
import {Layout} from "antd";
import './App.css'
import {useEffect} from "react";
import {useActions} from "./hooks/useActions";
import {IUser} from "./models/IUser";

const App = () => {
    const {setUser, setIsAuth} = useActions()
    useEffect(() => {
        if (localStorage.getItem('auth')){
            setUser({username: localStorage.getItem('username' || '')} as IUser)
            setIsAuth(true)
        }else {

        }
    },[])
    return (
        <div>
            <Layout>
                <Navbar/>
                <Layout.Content>
                    <AppRouter/>
                </Layout.Content>
            </Layout>
        </div>
    );
};

export default App;