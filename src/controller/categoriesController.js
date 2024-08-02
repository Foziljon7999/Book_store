const { readFile, writeFile } = require("../utils/fs")

const getCategory = (req, res) => {
    let categories = readFile("categories")
    res.render("categories", {categories})
}

const createCategory = (req, res) => {
    let categories = readFile("categories")
    let {name} = req.body
    categories.push({
        id: categories.at(-1)?.id + 1 || 1,
        name
    })
    writeFile("categories", categories)
    res.redirect("/categories")
}

module.exports = {
    getCategory,
    createCategory
}