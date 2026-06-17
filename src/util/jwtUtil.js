import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

export const generateToken = (user) => {
    const accessToken = jwt.sign({
        user: {
            id: user.user_id,
            name: user.name,
            email: user.email,
        }
    },
        process.env.JWT_SECRET,
        {expiresIn: "1h"}
    );
    
    return accessToken;
};

export const verifyToken = async(req, res, next) => {
    let token;
    const authHeader = req.headers.authorization;
    if(authHeader && authHeader.startsWith("Bearer")) {
        token = authHeader.split(" ")[1];
        jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
            if(err) {
                res.status(401);
                throw new Error("User not authorized");
            }
            req.user = decoded.user;
            next();
        });
    }

    if(!token) {
        res.status(401);
        throw new Error("User is not authorized or token is missing");
    }
};