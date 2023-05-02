
export interface IRoutes{
    path:string;
    component:JSX.Element;
    restricted:boolean;
}

export interface IRouteProps{
    component : JSX.Element;
}

export interface ITheme{
    color:{
       white: string;
       black: string;
       grey: string;
       blue: string;
    };

    font:{
        primary: string,
        // secondary: string,
    };
    fontWeight:{
        primary:string,
        secondary:string,
    }
}