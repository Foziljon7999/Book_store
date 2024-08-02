const { readFile, writeFile } = require("../utils/fs")

const getOrderPage  = (req, res) => {
    let { id } =req.params
    let books = readFile("books")
    let book = books.find(el => el.id === id * 1)
    if(book){
        res.render("orders", {book})
    } else {
        res.render("notfound")
    }
}

const createOrder = (req, res) => {
    let { book_id, clientName, phone, count, address, totalPrice } = req.body
    let orders = readFile("orders")
    let books = readFile("books")
    let book = books.find(el => el.id == book_id)
    orders.push({
        id: orders.at(-1)?.id + 1 || 1,
        book,
        clientName, 
        totalPrice: book.price * count + 30000,
        phone, 
        count, 
        address 
    })
    writeFile("orders", orders)
    res.redirect("/")

}


module.exports = {
    getOrderPage, 
    createOrder
}