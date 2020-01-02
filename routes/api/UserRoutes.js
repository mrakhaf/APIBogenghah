const router = require('express').Router()
const User = require('../../models/User')
const Message = require('../../models/Message')


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

router.delete('/:id', (req, res) => {
  Message.destroy({
    where: {
      id_user: req.params.id
    }
  })
  User.destroy({
      where: {
        id_user: req.params.id
      }
    })
    .then(result => {
      if (!result) {
        res.json({
          msg: 'User not found'
        })
      } else {
        res.json({
          msg: 'Delete user has been successfully'
        })
      }
    })
})


module.exports = router