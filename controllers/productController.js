const productService = require('../services/productService');
const { catchAsync } = require('../utils/error');

const getProducts = catchAsync(async (req, res) => {   
    const offset = req.query.offset;
    const limit = req.query.limit;
    const gender = req.query.gender;

    const products = await productService.getProducts(offset,limit,gender);
    
    res.status(200).json({ data : products });
});

module.exports = {
    getProducts
}