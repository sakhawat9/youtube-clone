import React, { useState }  from 'react'
import Header from './components/header/Header'
import Sidebar from './components/sidebar/Sidebar'
import { Container } from 'react-bootstrap'
import HomeScreen from './screens/homeScreen/HomeScreen'
import './_app.scss'
import LoginScreen from './screens/loginScreen/LoginScreen'
import { Redirect, Route, Switch, useHistory } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { useEffect } from 'react'
import WatchScreen from './components/watchScreen/WatchScreen'


const Layout = ({children}) => {
    const [sidebar, toggleSidebar] = useState(false)

    const handleToggleSidebar = () => toggleSidebar(value => !value)

    return (
        <>
            <Header handleToggleSidebar={handleToggleSidebar} />
            <div className="app__container">
                <Sidebar sidebar={sidebar} handleToggleSidebar={handleToggleSidebar} />
            
                <Container fluid className="app__main">
                {children}
                </Container>

            </div>
        </>
    )
}

const App = () => {

    const {accessToken, loading} = useSelector(state => state.auth)
    const history = useHistory()

    useEffect(() => {
        if(!loading && !accessToken) {
            history.push('/auth')
        }
    }, [accessToken, loading, history])

    return (
            <Switch>
                <Route path="/" exact>
                    <Layout>
                        <HomeScreen />
                    </Layout>
                </Route>
                <Route path="/auth">
                    <LoginScreen />
                </Route>
                <Route path="/search">
                    <Layout>
                        <h1>Search Results</h1>
                    </Layout>
                </Route>
                <Route path="/watch/:id">
                    <Layout>
                        <WatchScreen />
                    </Layout>
                </Route>

                <Route>
                    <Redirect to="/" />
                </Route>
            </Switch>
    )
}

export default App
