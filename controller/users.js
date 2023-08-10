module.exports = {
  getUsers: (req, resp, next) => {    
    // TODO: Implementa la función necesaria para traer la colección `users`
    console.log(req)
    console.log(resp)
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
  },
};
