const product = require('../model/product')
exports.addProduct = async (req, res, next) => {
    const { name, price, description, image } = req.body
    if (name && price && description && image) {
        await product.create({
            name,
            price,
            description,
            image
        }).then(product =>
            res.status(200).json({
                message: "Product successfully created",
                product,
            })
        )
    } else {
        res.status(400).json({
            message: "Product not successful created",
            error: "Please fill all the fields",
        })
    }
}
exports.getAllProducts = async (req, res, next) => {
    await product.find().then(products =>
        res.status(200).json({
            message: "All products",
            products,
        })
    )
}
exports.getProductById = async (req, res, next) => {
    const { id } = req.params
    await product.findById(id).then(product =>
        res.status(200).json({
            message: "Product found",
            product,
        })
    )
}
exports.updateProduct = async (req, res, next) => {
    const { id } = req.params
    const { name, price, description, image } = req.body
    if (name && price && description && image) {
        await product.findByIdAndUpdate(id, {
            name,
            price,
            description,
            image
        }).then(product =>
            res.status(200).json({
                message: "Product successfully updated",
                product,
            })
        )
    } else {
        res.status(400).json({
            message: "Product not successful updated",
            error: "Please fill all the fields",
        })
    }
}
exports.deleteProduct = async (req, res, next) => {
    const { id } = req.params
    await product.findByIdAndDelete(id).then(product =>
        res.status(200).json({
            message: "Product successfully deleted",
            product,
        })
    )
}
 