import { NextFunction,Request,Response } from "express";
import jwt from "jsonwebtoken"
import { JWT_PASSWORD } from "./config";


export const userMiddleware = (req:Request,res: Response,next: NextFunction) =>{
    const header = req.headers["authorization"];
    const decoded = jwt.verify(header as string,JWT_PASSWORD)
    if(decoded){
        //we have to override the types of the global objects to remove the error ts-ignore is an ugly way to handle it 
        //@ts-ignore
        req.userId = decoded.id ;
        next()
    }else{
        res.status(403).json({
            message:"You are not logged in"
        })
    }
}