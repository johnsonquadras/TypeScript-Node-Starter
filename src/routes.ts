import {Express} from "express";
import * as userRouter from "./modules/user/user.routes";
import { Response, Request, NextFunction, Router } from "express";

function register(app: Express) {
    
    app.use("/birds", userRouter.routes);


}

export let registerRoutes = register;