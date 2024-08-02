const { readFile } = require("../utils/fs")

const getHome = (req, res) => {
    let books = readFile("books")
    res.render("index", {books})
}

const getLogin = (req, res) => {
    res.render("login")
}

module.exports = {
    getHome,
    getLogin
}