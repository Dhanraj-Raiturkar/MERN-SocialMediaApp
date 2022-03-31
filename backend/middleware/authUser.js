
const authUser = (req,res,next) => {
    const bearerToken = req.headers['authorization'];
    const accessToken = bearerToken.split(' ')[1];
    req.token = accessToken;
    next();
};

module.exports = authUser;
