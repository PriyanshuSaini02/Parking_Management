const jwt = require('jsonwebtoken');
const createToken= (userData)=>{
    const token= jwt.sign(userData,process.env.JWT_SECRET,{expiresIn:400000});
    return token;
}

const validateJwtToken=(req,res,next)=>{
    const tokenCheck=req.headers.authorization;
    if(!tokenCheck){
        return res.status(401).json({err:'Token not avaiable'});
    }
    const token=req.headers.authorization.split(' ')[1];

    if(!token){
        return res.status(401).json({err:"Invalid Token"});
    }
    try {
        const validateToken=jwt.verify(token,process.env.JWT_SECRET);
        req.user=validateToken;
        next();
    } catch (err) {
        return res.status(401).json(err.message);
    }
}

module.exports={createToken,validateJwtToken};
