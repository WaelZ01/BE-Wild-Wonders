//Middleware to check userType
module.exports.checkType = function (requiredRole) {
    return async (req, res, next) => {
        if(requiredRole >= req.user.userType){
            next();
        }else{
            //res.redirect("/main/?m=not_allowed");
            res.status(401).json({"message":"Access Not allowed"});
        }
    }
}