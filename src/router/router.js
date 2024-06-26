import LoginPage from '../page/loginPage';
import MainPage from '../page/mainPage'
import RegisterPage from '../page/registerPage';
import ProjectSetup from '../page/projectSetup';
import ProjectPage from '../page/projectPage';
import PreviewPage from '../page/previewPage';
import OnlineList from '../page/onlineList';
import OnlineProject from '../page/onlineProject'
import DownloadProject from '../page/downloadPage';
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
    {
        path: '/preview',
        element: <PreviewPage></PreviewPage>
    },
    {
        path: '/onlineList',
        element: <OnlineList></OnlineList>
    },
    {
        path: '/onlineProject',
        element: <OnlineProject></OnlineProject>
    },
    {
        path: '/downloadProject',
        element: <DownloadProject></DownloadProject>
    },

]

export default router