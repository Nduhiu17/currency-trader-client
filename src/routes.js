import React from 'react';



const OtherSamplePage = React.lazy(() => import('./Demo/Other/MarketPricePage'));

const routes = [
    { path: '/sample-page', exact: true, name: 'Sample Page', component: OtherSamplePage },
    { path: '/create-wallet', exact: true, name: 'Create Wallet', component: OtherSamplePage }
];

export default routes;