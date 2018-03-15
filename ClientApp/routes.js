import * as React from 'react';
import { Route, Router } from 'react-router-dom';
import { Layout } from "./modules/layout";
import { AsyncComponentLoader } from './core/AsyncComponent';

export const routes = <Layout>
    <Route exact path='/Comp1' component={ AsyncComponentLoader(() => import(/* webpackChunkName: "comp1" */ './modules/comp1/components/comp1')) } />
    <Route exact path='/Comp2' component={ AsyncComponentLoader(() => import(/* webpackChunkName: "comp2" */ './modules/comp2/components/comp2')) } />
</Layout>;