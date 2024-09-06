import jwt from "jsonwebtoken";

const authMiddleware = async (req, res, next) => {
    // Check if token is present in the Authorization header
    const authHeader = req.headers.authorization;
    if (!authHeader || !authHeader.startsWith("Bearer ")) {
        return res.status(401).json({ success: false, message: "Not Authorized, Token Missing" });
    }

    const token = authHeader.split(" ")[1]; // Extract token from Bearer

    try {
        // Verify token
        const tokenDecode = jwt.verify(token, process.env.JWT_SECRET);
        req.userId = tokenDecode.id; // Attach userId to the request object
        next();
    } catch (error) {
        console.error("Token verification failed:", error);
        res.status(401).json({ success: false, message: "Invalid or Expired Token" });
    }
};

export default authMiddleware;
