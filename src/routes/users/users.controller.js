const User = require("../../models/users.model");
const bcrypt = require("bcrypt");
const slug = require("../../utils/slug");
const jwt = require("jsonwebtoken");

const registerUser = async (req, res) => {
  try {
    const { fullname, email, password } = req.body;
    if (!fullname || !email || !password) {
      return res.status(403).json({
        error: "All field are required",
      });
    }
    // check exasting user
    const exastingUser = await User.findOne({ email });
    if (exastingUser) {
      return res.status(403).json({
        error: "User already registered",
      });
    }
    // password hash
    const hashPassowrd = bcrypt.hashSync(password, 12);
    const createSlug = slug(fullname);
    const createUser = {
      email,
      password: hashPassowrd,
      fullname,
      slug: createSlug,
    };

    const user = await User.create({ ...createUser });

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET_KEY, {
      expiresIn: "7d",
    });
    res.status(201).json({
      message: "User created successfully",
      data: {
        token,
        user: {
          slug: user.slug,
          fullname: user.fullname,
          email: user.email,
          _id: user._id,
          createdAt: user.createdAt,
          updatedAt: user.updatedAt,
        },
      },
    });
  } catch (err) {
    res.status(403).json({
      error: "network error occurred",
      err,
    });
  }
};

const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(403).json({
        error: "All field are required",
      });
    }
    // check exasting user
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({
        error: "User not found",
      });
    }
    // // Check password
    const matchPassword = await bcrypt.compare(password, user.password);
    if (!matchPassword) {
      return res.status(403).json({
        error: "Invalid password!",
      });
    }
    // Generate token
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET_KEY, {
      expiresIn: "7d",
    });
    // response
    res.status(404).json({
      message: "Welcome back",
      data: {
        token,
        user: {
          slug: user.slug,
          fullname: user.fullname,
          email: user.email,
          _id: user._id,
          createdAt: user.createdAt,
          updatedAt: user.updatedAt,
        },
      },
    });
  } catch (err) {
    res.status(403).json({
      error: "network error occurred",
      err,
    });
  }
};

const checkUser = async (req, res) => {
  try {
    const user = await User.findById(req.userId).select("-password");
    if (!user) {
      return res.status(409).json({ error: "User not found!" });
    }
    res.status(200).json({ user });
  } catch (err) {
    res.status(500).json({ err: err, error: "Something went wrong!" });
  }
};

module.exports = {
  registerUser,
  loginUser,
  checkUser,
};
