const jwt = require('jsonwebtoken');

module.exports = (secret) => (req, resp, next) => {
  const { authorization } = req.headers;

  // console.log("secret", secret)
  // console.log("resp", resp)
  // console.log("authorization:", authorization)

  // check if there is "authorization"
  if (!authorization) {
    return next();
  }

  // separate "authorization" into "type" and "token"
  const [type, token] = authorization.split(' ');

  // console.log("type:", type)
  // console.log("token:", token)
 
  // check if type is "bearer"
  if (type.toLowerCase() !== 'bearer') {
    return next();
  }

  // console.log("jwt:", jwt.verify())

  // var parts = token.split('.')
  // console.log("parts:", parts)

  // decoding "token" using "secret"
  jwt.verify(token, secret, (err, decodedToken) => {
    console.log("token:", token)
    console.log("secret:", secret)
    console.log("decodedToken:", decodedToken)
    if (err) {
      console.log("err:", err)
      return next(403);
    }

    console.log("decodedToken.uid:", decodedToken.uid)

    // TODO: Verificar identidad del usuario usando `decodeToken.uid`
  });
};

module.exports.isAuthenticated = (req) => (
  // TODO: decidir por la informacion del request si la usuaria esta autenticada
  false
);

module.exports.isAdmin = (req) => (
  // TODO: decidir por la informacion del request si la usuaria es admin
  false
);

module.exports.requireAuth = (req, resp, next) => (
  (!module.exports.isAuthenticated(req))
    ? next(401)
    : next()
);

module.exports.requireAdmin = (req, resp, next) => (
  // eslint-disable-next-line no-nested-ternary
  (!module.exports.isAuthenticated(req))
    ? next(401)
    : (!module.exports.isAdmin(req))
      ? next(403)
      : next()
);
