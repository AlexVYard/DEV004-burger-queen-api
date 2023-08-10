const jwt = require('jsonwebtoken');
const config = require('../config');
const users = require('./users');

const { secret } = config;

/** @module auth */
module.exports = (app, nextMain) => {
  /**
   * @name /auth
   * @description Crea token de autenticación.
   * @path {POST} /auth
   * @body {String} email Correo
   * @body {String} password Contraseña
   * @response {Object} resp
   * @response {String} resp.token Token a usar para los requests sucesivos
   * @code {200} si la autenticación es correcta
   * @code {400} si no se proveen `email` o `password` o ninguno de los dos
   * @auth No requiere autenticación
   */
  app.post('/auth', (req, resp, next) => {
    const { email, password } = req.body;

    if (!email || !password) {
      return next(400);
    }
    
    /* if (email === config.adminEmail && password === config.adminPassword) {
      console.log("correo y contraseña coinciden con config")
    } */

    // console.log("resp.token", resp.token)
    // console.log("email", email)
    // console.log("password", password)

    // tratando de acceder a la base de datos
    /* app.get('/users', (req, res) => {
      users.find({})
        .toArray()
        .then((results) => {          
          res.status(200).json({
            succes: true,
            data: results,
          })          
        })
        .catch((err) => {
          res.status(500).json({
            success: false,
          })
        })
    }) */

    // TODO: autenticar a la usuarix
    // Hay que confirmar si el email y password
    // coinciden con un user en la base de datos
    // Si coinciden, manda un access token creado con jwt

    next();
  });

  return nextMain();
};
