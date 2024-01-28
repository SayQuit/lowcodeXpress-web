import LoginPage from '../page/loginPage';
import MainPage from '../page/mainPage'
import RegisterPage from '../page/registerPage';
import ProjectSetup from '../page/projectSetup';
import ProjectPage from '../page/projectPage';
const router = [
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
    {
        path: '/project',
        element: <ProjectPage></ProjectPage>
    },

]

export default router