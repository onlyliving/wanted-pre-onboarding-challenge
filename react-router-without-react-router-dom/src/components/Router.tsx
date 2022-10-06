import React from "react";



interface Props {
    children: JSX.Element[];
}
const Router: React.FC<Props> = ({
    children
}) => {

    return (
        <React.StrictMode>
            {children}
        </React.StrictMode>

    )
};

export default Router;