import LoginPage from '../page/loginPage';
import MainPage from '../page/mainPage'
import RegisterPage from '../page/registerPage';
import ProjectSetup from '../page/projectSetup';
const element = [
    {
        path: '/',
        element: <MainPage></MainPage>
    },
    {
        path: '/login',
        element: <LoginPage></LoginPage>
    },
    {
        path: '/register',
        element: <RegisterPage></RegisterPage>
    },
    {
        path: '/setup',
        element: <ProjectSetup></ProjectSetup>
    },

]

export default element