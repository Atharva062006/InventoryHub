import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import handleResponse from "../util/handleResponse.js";

dotenv.config();

export const verifyToken = async(req, res, next) => {
    let token;
    const authHeader = req.headers.authorization;
    if(authHeader && authHeader.startsWith("Bearer")) {
        token = authHeader.split(" ")[1];
        jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
            if(err) {
                return handleResponse(res, 401, "Invalid token");
            }
            req.user = decoded.user;
            next();
        });
    }

    if(!token) {
        return handleResponse(res, 401, "No token provided");
    }
};