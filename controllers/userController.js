const userModel = reuire('../models/userModel');

function getAllUsers(req, res) {
    const users = userModel.getAllUsers();
    res.json(users);
}

function createUser(req, res) {
    const user = userModel.addUser(req.body);
    res.status(201).json(user);
}

module.exports = {
    getAllUsers,
    createUser
}