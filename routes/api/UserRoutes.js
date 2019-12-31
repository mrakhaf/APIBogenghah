const router = require('express').Router()
const User = require('../../models/User')


router.put('/:id', (req, res) => {
  const id = req.params.id

  User.findOne({
    where: {
      id_user: id
    }
  }).then(found => {
    if (!found) {
      res.json({
        msg: 'Not found'
      })
    } else {
      User.update(
        req.body, {
          where: {
            id_user: id
          }
        })
      res.json({
        msg: 'success updated',
        data: found.username
      })
    }
  })


})


module.exports = router