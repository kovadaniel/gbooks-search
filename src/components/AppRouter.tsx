import { Route, Routes } from "react-router-dom";
import { routes } from "../router";
import { useAppSelector } from "../hooks/useAppSelector";

const AppRouter = () => {
    return (
        <Routes>
                {routes.map(route => 
                    <Route 
                        key={route.path}
                        path={route.path}
                        element={route.element}/>)}
        </Routes>
    );
}
 
export default AppRouter;