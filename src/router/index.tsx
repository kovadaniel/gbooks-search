import { ReactNode } from "react";
import { Navigate, RouteObject } from "react-router-dom";
import Books from "../pages/Books";
import SingleBook from "../pages/SingleBook";

export interface IRoute{
    route: string;
    element: ReactNode;
}

export enum RouteNames {
 BOOKS = '/books',
 SINGLE_BOOK = '/books/:id',
 OTHER = '/*',
}

export const routes: RouteObject[] = [
    {
        path: RouteNames.BOOKS, 
        element: <Books/>
    },
    {
        path: RouteNames.SINGLE_BOOK, 
        element: <SingleBook/>
    },
    {
        path: RouteNames.OTHER, 
        element: <Navigate to={RouteNames.BOOKS}/>
    },

]