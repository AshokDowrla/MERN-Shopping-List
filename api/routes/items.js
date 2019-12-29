const express = require('express')

const router = express.Router()

const Item = require('../models/Item')


//@route GET

router.get('/', (req, res) => {


    Item.find()
        .sort({ date: -1 })
        .then(result => {
            res.status(200).json(result)
        })
        .catch(err => {
            console.log(err)

            res.status(500).json({
                error: err
            })
        })
})

router.post('/newItem', (req, res) => {

    const newItem = new Item({
        name: req.body.name
    })

    newItem.save()
        .then(result => {
            res.status(201).json(result)
        })
        .catch(err => {
            res.status(500).json({
                error: err
            })
        })
})

router.delete('/:id', (req, res) => {
    const id = req.params.id
    Item.findById(id)
        .then(item => item.remove()
            .then(result => {
                res.status(200).json({
                    message: "Success Deletion",
                    result
                })
            }))


        .catch(err=>{
            res.status(404).json({
                error:err
            })
        })
})

module.exports = router

