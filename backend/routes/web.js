const express = require('express')
const { get_all_data, add_data, get_single_data, delete_data, update_data } = require('../contoller/blogContoller')

const router = express.Router()

router.get("/getAll", get_all_data)
router.post('/addData', add_data)
router.get('/:id', get_single_data)
router.delete('/:id', delete_data)
router.patch('/:id', update_data)


module.exports = router
