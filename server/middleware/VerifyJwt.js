import jwt from "jsonwebtoken"

export const verifyJwt = async (req, res, next) => {
    const authHeader = req.headers.authorization;
    if (!authHeader) return res.status(404).send("You are not Authanticated")
    const token = authHeader.split(" ")[1]

    jwt.verify(token, process.env.JWT, (error, user) => {
        if (error) return res.status(401).send(error.message)
        req.user = user;
        next()
    })
}

export const verifyUser = async (req, res, next) => {
    verifyJwt(req, res, () => {
        if (req.user.username === req.body.username || req.user.id) {
            next()
        } else {
            return res.status(401)
        }
    })
}