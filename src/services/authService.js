import bcrypt from "bcrypt";

import { createUser, findUserByEmail } from "../repositories/userRepository.js";
import { generateToken } from "../util/jwtUtil.js";

// Register user
export const registerUserService = async ({name, email, password}) => {
    
    if (await findUserByEmail(email)) {
        throw new Error("Email already in use");
    }

    const saltRounds = 10;
    const passwordHash = await bcrypt.hash(password, saltRounds);

    const user = await createUser(name, email, passwordHash);
    return user;
}

export const loginUserService = async ({email, password}) => {
    const user = await findUserByEmail(email);
    if(user && await(bcrypt.compare(password, user.password_hash))) {
        const accessToken = await generateToken(user);
        return {user, accessToken};
    }
    else {
        throw new Error("Incorrect credentials");
    }
}