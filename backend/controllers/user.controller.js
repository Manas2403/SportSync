import User from "../models/user.model.js";
import { hash_password, getJwt } from "../utils/password.js"; // Assuming authUtils has the hashing and JWT logic
import { response_200, response_201, response_400, response_401, response_500 } from "../utils/responseCodes.js";

// Register Controller
export async function registerUser(req, res) {
  const { name, email, password } = req.body;

  try {
    // Check if the user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return response_400(res, "User already exists with this email");
    }

    // Hash the password
    const hashedPassword = await hash_password(password);

    // Create a new user
    const newUser = new User({
      name,
      email,
      passwordHash: hashedPassword,
    });

    // Save the user
    await newUser.save();

    // Return success response
    return response_201(res, "User registered successfully", {
      user: {
        id: newUser._id,
        name: newUser.name,
        email: newUser.email,
        role: newUser.role,
      },
    });

  } catch (err) {
    return response_500(res, "Failed to register user", err.message);
  }
}

// Login Controller
export async function loginUser(req, res) {
  const { email, password } = req.body;

  try {
    // Check if the user exists
    const user = await User.findOne({ email });
    if (!user) {
      return response_401(res, "Invalid email or password");
    }

    // Verify the password
    const hashedPassword = await hash_password(password);
    if (hashedPassword !== user.passwordHash) {
      return response_401(res, "Invalid email or password");
    }

    // Generate JWT token
    const token = getJwt({ userId: user._id, role: user.role });

    // Return success response with the token
    return response_200(res, "Login successful", {
      token,
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        role: user.role,
      },
    });

  } catch (err) {
    return response_500(res, "Failed to login", err.message);
  }
}
