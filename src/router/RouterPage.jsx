import { useRoutes } from 'react-router-dom';
import element from './element';

const GetRoutes = () => {
    const routes = useRoutes(element);
    return routes;
}

const RoutesPage = () => {
    return (
        <GetRoutes />
    )
}

export default RoutesPage