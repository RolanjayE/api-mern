const mongoose = require('mongoose')
const blogModel = require('../model/blogModel')

// get all data
const get_all_data = async (req, res, next) => {

    try {
        const data = await blogModel.find({})
        return res.json(data)
    } catch (error) {
        return res.json({ message: error})
    }

}


// add data
const add_data = async (req, res, next) => {

    try {
        const { firstName, lastName } = req.body
        const saveData = await blogModel.create({firstName, lastName })
        return res.json(saveData)
    } catch (error) {
        return res.json({ message: error})
    }

}


// get single data
const get_single_data = async (req, res, next) => {
    const { id } = req.params

    try {
        const singleData = await blogModel.findById(id)
        return res.json(singleData)
    } catch (error) {
        return res.json({ message: error})
    }
}

// delete data
const delete_data = async (req, res) => {
    const { id } = req.params
    try {
        const deleteData = await blogModel.findByIdAndDelete(id)
        return res.json(deleteData)
    } catch (error) {
        return res.json({ message: error})
    }
}


// update data
const update_data = async (req, res, next) => {
    const { id } = req.params
    const newData = req.body
    try {
        const deleteData = await blogModel.findByIdAndUpdate(id, newData, { new: true })
        return res.json(deleteData)
    } catch (error) {
        return res.json({ message: error})
    }
}

module.exports = { get_all_data, add_data, get_single_data, delete_data, update_data }

