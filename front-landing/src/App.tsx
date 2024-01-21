import React from 'react';
// 아폴로 밑 캐시관련 클라이언트
import Navigate from '@components/commons/navigate/Navigate';
import { AppRouter } from './routes/AppRouter';
/* GraphQl */

const App = () => {
    return (
        <>
            {' '}
            <AppRouter />
            <Navigate
                Links={[
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
                ]}
            />
        </>
    );
};

export default App;
