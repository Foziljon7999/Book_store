const { readFile, writeFile } = require("../utils/fs")

const getAuthor = (req, res) => {
    let authors = readFile("authors")
    res.render("authors", {authors})
}

const createAuthor = (req, res) => {
    let { fullName} = req.body
    let authors = readFile("authors")
     authors.push({
        id: authors.at(-1)?.id + 1 || 1,
        fullName
     })
     writeFile("authors", authors)
     res.redirect("/authors")
}

module.exports = {
    getAuthor,
    createAuthor
}