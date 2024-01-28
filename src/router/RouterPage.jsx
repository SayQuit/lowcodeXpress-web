import { useRoutes } from 'react-router-dom';
import router from './router';

const GetRoutes = () => {
    const routes = useRoutes(router);
    return routes;
}

const RoutesPage = () => {
    return (
        <GetRoutes />
    )
}

export default RoutesPage