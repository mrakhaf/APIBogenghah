const router = require('express').Router()
const Message = require('../../models/Message')
const User = require('../../models/User')

router.post('/', (req, res) => {
  let user = req.body.username
  User.findOne({
    where: {
      username: user
    }
  }).then(result => {
    if (!result) {
      res.json({
        msg: 'username not found'
      })
    } else {
      Message.create({
        id_user: result.id_user,
        content: req.body.content
      }).then(message => {
        res.json({
          data: {
            msg: 'Send message Success',
            to: message.id_user,
            content: message.content
          }
        })
      })
    }
  })
})

// router.get('/', (req, res) => {
//   let user = req.body.username
//   User.findOne({
//     where: {
//       username: user
//     }
//   }).then(result => {
//     if (!result) {
//       res.json({
//         msg: 'Username not found'
//       })
//     } else {
//       Message.findAll({
//         where: {
//           id_user: result.id_user
//         }
//       }).then(message => {
//         if (!message) {
//           res.json({
//             msg: 'Message not found'
//           })
//         } else {
//           res.json({
//             data: message
//           })
//         }
//       })
//     }
//   })
// })

router.get('/:id', (req, res) => {
  const id = req.params.id
  Message.findAll({
      where: {
        id_user: id
      }
    }).then(result => {
      if (!result) {
        res.json({
          msg: 'No message'
        })
      } else {
        res.json({
          data: result
        })
      }
    }) <<
    << << < HEAD
})

router.delete('/:id', (req, res) => {
  Message.destroy({
    where: {
      id_message: req.params.id
    }
  }).then(result => {
    if (!result) {
      res.json({
        msg: 'User not found'
      })
    } else {
      res
        .json({
          msg: 'Delete message has been successfully'
        })
        .status(200)
    }
  })
})

module.exports = router ===
  === =

})

module.exports = router >>>
  >>> > 136 c8aee9c246cc0ff931dad44e14c37a2422b51