import React, { Component } from 'react';
// import './App.css';
import Navbar from './components/Navbar/Navbar';
import { BrowserRouter, HashRouter, Route, withRouter } from "react-router-dom";
import './index.css';
import UsersContainer from "./components/Users/UsersContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import LoginPage from "./components/Login/Login";
import { connect, Provider } from "react-redux";
import { compose } from "redux";
import { initializeApp } from "./redux/app-reducer";
import Preloader from "./components/common/Preloader/Preloader";
import store from "./redux/redux-store";
import { withSuspense } from "./hoc/withSuspense";
import s from './components/Navbar/Navbar.module.css';
import 'antd/dist/antd.css'
import { Layout, Menu } from 'antd';
import { UserOutlined, MessageOutlined, HomeOutlined, SettingOutlined, SoundOutlined, GlobalOutlined, DribbbleOutlined  } from '@ant-design/icons';
import { NavLink } from 'react-router-dom';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import Game from './components/Game/Game';
const { Content, Footer, Sider } = Layout;

const DialogsContainer = React.lazy(() => import('./components/Dialogs/DialogsContainer'));
const ProfileContainer = React.lazy(() => import('./components/Profile/ProfileContainer'));

const AppF = () => {
    return (
        <Layout>
            <Sider
                breakpoint="lg"
                collapsedWidth="0"
                onBreakpoint={broken => {
                    console.log(broken);
                }}
                onCollapse={(collapsed, type) => {
                    console.log(collapsed, type);
                }}
            >
                <div className="logo" />
                <Menu
                    theme="dark"
                    mode="inline"
                    defaultSelectedKeys={['1']}
                >
                    <Menu.Item><NavLink to="/profile" activeClassName={s.activeLink}><HomeOutlined /> Profile</NavLink></Menu.Item>
                    <Menu.Item><NavLink to="/dialogs" activeClassName={s.activeLink}><MessageOutlined /> Messages</NavLink></Menu.Item>
                    <Menu.Item><NavLink to="/users" activeClassName={s.activeLink}><UserOutlined /> Users</NavLink></Menu.Item>
                    <Menu.Item><NavLink to="/news" activeClassName={s.activeLink}><GlobalOutlined /> News</NavLink></Menu.Item>
                    <Menu.Item><NavLink to="/music" activeClassName={s.activeLink}><SoundOutlined /> Music</NavLink></Menu.Item>
                    <Menu.Item><NavLink to="/settings" activeClassName={s.activeLink}><SettingOutlined /> Settings</NavLink></Menu.Item>
                    <Menu.Item><NavLink to="/game" activeClassName={s.activeLink}><DribbbleOutlined /> Game</NavLink></Menu.Item>
                </Menu>
            </Sider>
            <Layout>

                {/* <Header className="site-layout-sub-header-background" style={{ padding: 0 }} /> */}
                <HeaderContainer />
                <Content style={{ margin: '24px 16px 0' }}>
                    <div className="site-layout-background" style={{ padding: 24, minHeight: 503 }}>
                        <Route path='/dialogs'
                            render={withSuspense(DialogsContainer)} />

                        <Route path='/profile/:userId?'
                            render={withSuspense(ProfileContainer)} />

                        <Route path='/users'
                            render={() => <UsersContainer />} />

                        <Route path='/login'
                            render={() => <LoginPage />} />
                        <Route path='/news'
                            render={() => <News />} />
                        <Route path='/music'
                            render={() => <Music />} />
                        <Route path='/settings'
                            render={() => <Settings />} />
                        <Route path='/game'
                            render={() => <Game />} />
                    </div>
                </Content>
                <Footer style={{ textAlign: 'center' }}>Social Network ©2022 Created by Oleksii Herasymchuk</Footer>
            </Layout>
        </Layout>
    )
}

// class App extends Component {
//     componentDidMount() {
//         this.props.initializeApp();
//     }

//     render() {
//         if (!this.props.initialized) {
//             return <Preloader />
//         }

//         return (
//                     <div className='app-wrapper'>
//                         <HeaderContainer/>
//                         <Navbar/>
//                         <div className='app-wrapper-content'>
// <Route path='/dialogs'
//        render={withSuspense(DialogsContainer)}/>

// <Route path='/profile/:userId?'
//        render={withSuspense(ProfileContainer)} />

// <Route path='/users'
//        render={() => <UsersContainer/>}/>

// <Route path='/login'
//        render={() => <LoginPage/>}/>
//                         </div>
//                     </div>
//         )
//     }
// }

const mapStateToProps = (state) => ({
    initialized: state.app.initialized
})

let AppContainer = compose(
    withRouter,
    connect(mapStateToProps, { initializeApp }))(AppF);

const SamuraiJSApp = (props) => {
    return <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Provider store={store}>
            <AppContainer />
        </Provider>
    </BrowserRouter>
}

export default SamuraiJSApp;