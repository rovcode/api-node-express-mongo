const {tracksModel} = require('../models')

const getItems = async (req, res) => {
    const data = await tracksModel.find({});
    res.send({data});
};
const showdetailsItem = (req, res) => {

};
const createItem = async (req, res) => {
   const { body } = req
   console.log(body);
   const data = await tracksModel.create(body)
  
   res.send({data})
};
const updateItem = (req, res) => {

};
const deleteItem = (req, res) => {

};

module.exports = {getItems, showdetailsItem, createItem, updateItem, deleteItem}