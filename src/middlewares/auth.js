// Handle Auth Middleware for all request GET, POST, DELETE,... to /admin/...
const adminAuth = (req, res, next) => {
  // Check if the request is authorized
  const token = "xyz";
  const isAdminAuthorized = token === "xyz";

  if (isAdminAuthorized) {
    next();
  } else {
    res.status(401).send("Unauthorized Request");
  }
};

const userAuth = (req, res, next) => {
  // Check if the request is authorized
  const token = "xyz";
  const isAdminAuthorized = token === "xyz";

  if (isAdminAuthorized) {
    next();
  } else {
    res.status(401).send("Unauthorized Request");
  }
};

module.exports = { adminAuth, userAuth };
