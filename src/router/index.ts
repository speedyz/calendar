import Login from "../pages/Login";
import Event from "../pages/Event";

export interface IRoute {
    path: string;
    element: any;
}

export enum RouteNames {
    LOGIN = '/login',
    EVENT ='/event'
}

export const publicRoutes: IRoute[] = [
    {path: RouteNames.LOGIN, element: Login},
]

export const privateRoutes: IRoute[] = [
    {path: RouteNames.EVENT, element: Event},

]