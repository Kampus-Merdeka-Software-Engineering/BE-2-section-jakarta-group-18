const { getAllProductsService, createProductsService } = require('../services/ProductsService');

const getAllProducts = async (req, res) => {
    try {
        const { productName } = req.params;
        const productlist = await getAllProductsService(productName);

        res.status(200).json({
            data: productlist,
            message: "Sukses mengambil data",
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({
            message: "Gagal mengambil data",
        });
    }
};

const createProduct = async (req, res) => {
    try {
        const result = await createProductsService(req.body);

        res.status(201).json({
            message: "Berhasil Menambahkan Data",
            data: result,
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({
            message: "Gagal Menambahkan Data",
        });
    }
}

// Implementasikan fungsi lainnya jika diperlukan

module.exports = {
    getAllProducts,
    createProduct,
    // Tambahkan fungsi lainnya jika diperlukan
};
