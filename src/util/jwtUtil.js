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
