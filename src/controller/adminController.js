const { readFile } = require("../utils/fs")

const getAdminPage = (req, res) => {
    let books = readFile("books")
    let orders = readFile("orders")
    let authors = readFile("authors")
    let categories = readFile("categories")
    res.render("admin", {books, orders, authors, categories})
}

module.exports  = {
    getAdminPage
}