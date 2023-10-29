import {
    createBrowserRouter,
    isRouteErrorResponse,
    RouterProvider,
    useRouteError,
} from "react-router-dom";
import { useEffect, useState } from 'react';
import Layout from "./tabs/layout/Layout";

function ErrorBoundary() {
    const error = useRouteError();

    return isRouteErrorResponse(error) ? (
        <h1>
            This error from react-router:<br />
            {error.status} {error.statusText}
        </h1>
    ) : (
        <h1>{error.message || error}</h1>
    );
}

const AppRouter = () => {
    const [tabs, setTabs] = useState([]);

    useEffect(() => {
        fetch('https://64d8eebd5f9bf5b879ceb6cd.mockapi.io/tabs')
            .then(response => response.json())
            .then(data => setTabs(data.sort((a, b) => a.order - b.order)));
    }, []);

    const router = createBrowserRouter([
        {
            element: <Layout tabs={tabs} />,
            errorElement: <ErrorBoundary />,
            path: '/',
            children: tabs.map(({ id, path, title }) => ({
                path: id,
                async lazy() {
                    const { default: Component } = await import(`./${path}`);
                    return { element: <Component title={title}/> };
                },
            })),
        }
    ]);

    return <RouterProvider router={router} />
}

export default AppRouter;