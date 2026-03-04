const User = require("../models/User");
const bcrypt = require("bcrypt");

/**
 * POST /api/auth/login
 * Body: { username, password } or { email, password }
 */
async function login(req, res) {
  try {
    const { username, email, password } = req.body || {};
    if (!password || (!username && !email)) {
      return res.status(400).json({
        message: "Missing credentials. Send username or email and password.",
      });
    }

    const filter = username
      ? { username: username.trim() }
      : { email: String(email).trim().toLowerCase() };
    const user = await User.findOne(filter);
    if (!user) {
      return res.status(401).json({ message: "Invalid username or password." });
    }

    const isMatch =
      user.password.startsWith("$2")
        ? await bcrypt.compare(password, user.password)
        : password === user.password;
    if (!isMatch) {
      return res.status(401).json({ message: "Invalid username or password." });
    }

    const payload = { user_id: user.user_id, username: user.username };
    const token = Buffer.from(JSON.stringify(payload)).toString("base64");

    res.json({
      user: {
        user_id: user.user_id,
        name: user.name,
        email: user.email,
        username: user.username,
        role: user.role,
      },
      token,
    });
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
}

module.exports = { login };
