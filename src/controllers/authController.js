import handleResponse from "../util/handleResponse.js";
import { registerUserSerice, loginUserService } from "../services/authService.js";

// Register user
export const registerUser = async (req, res) => {
    if(!req.body.name || !req.body.email || !req.body.password) {
        return handleResponse(res, 400, "Name, email and password are required");
    }

    try {
        const user = await registerUserSerice(req.body);

        delete user.password_hash; 
        
        handleResponse(res, 201, "User registered successfully", user);
    }catch (error) {
        return handleResponse(res, 500, error.message);
    }
    
};

// Login user
export const loginUser = async (req, res) => {
    if(!req.body.email || !req.body.password) {
        return handleResponse(res, 400, "email and password are both required");
    }

    try {
        const {user, accessToken} = await loginUserService(req.body);

        delete user.password_hash;

        handleResponse(res, 200, "Login Successful", {user, accessToken});
    } catch (error) {
        const statusCode = error.message === "Incorrect credentials" ? 401 : 500;
        return handleResponse(res, statusCode, error.message);
    }
};

// Current user
export const getMe = async(req, res) => {
    handleResponse(res, 200, "User data retrieved", req.user);
}