const { Router } = require("express")
const { getHome, getLogin } = require("../controller/homeController")
const { getAdminPage } = require("../controller/adminController")
const { login } = require("../controller/loginController")
const verifyToken = require("../middlewares/verifyToken")
const { createBook } = require("../controller/booksController")
const { getOrderPage, createOrder } = require("../controller/orderController")
const { getAuthor, createAuthor } = require("../controller/authorsController")
const { getCategory, createCategory } = require("../controller/categoriesController")


const router = Router()

router.get("/", getHome)
router.get("/login", getLogin)
router.get("/admin", verifyToken, getAdminPage)
router.get("/orders/:id", getOrderPage)
router.get("/authors", verifyToken, getAuthor)
router.get("/categories", verifyToken, getCategory)
router.post("/categories/create", createCategory)
router.post("/authors/create", createAuthor)
router.post("/login", login)
router.post("/books/create", createBook)
router.post("/orders/create", createOrder)

module.exports = router