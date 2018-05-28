"use strict";
import { Response, Request, NextFunction, Router } from "express";
const router = Router();


// // define the home page route
router.get("/", function (req: Request, res: Response) {
    res.send("Birds home page");
});

// define the home page route
router.get("/about", function (req: Request, res: Response) {
    res.send("Birds about  page");
});

export let routes = router;


