import express from "express";

import customerControllers from './customers.controller';

function routerApi(app: express.Application){
    app.use('/customers', customerControllers);
}

export { routerApi}

