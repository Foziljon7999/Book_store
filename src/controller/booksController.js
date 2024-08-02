const { readFile, writeFile } = require("../utils/fs")

const createBook = (req, res) => {
    let { name, desc, count, price, authId, categoryId, img } = req.body
    let books = readFile("books")
    books.push({
        id: books.at(-1)?.id + 1 || 1,
        name,
        desc,
        count,
        price,
        authId,
        categoryId,
        img

    })

    writeFile("books", books)
    res.redirect("/admin")
}

module.exports = {
    createBook
}