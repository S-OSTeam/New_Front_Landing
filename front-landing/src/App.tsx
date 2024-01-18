import React from 'react';
// 아폴로 밑 캐시관련 클라이언트
import {ApolloProvider} from "@apollo/react-hooks";
import Navigate from "@components/commons/navigate/Navigate";
import {client} from "@util/client/client";
import  { AppRouter } from './routes/AppRouter';
/* GraphQl */

const App = () => {

    return (
        <ApolloProvider client={client}>
            <AppRouter />
            <Navigate Links={
                [
                    {
                        to: '/About',
                        linkName: 'About',
                        className: 'about',
                    },
                    {
                        to: '/',
                        linkName: '',
                        className: '',
                    },
                    {
                        to: '',
                        linkName: '',
                        className: '',
                    },
                    {
                        to: '',
                        linkName: '',
                        className: '',
                    },

                ]
            }/>
        </ApolloProvider>
    );
};

export default App;
