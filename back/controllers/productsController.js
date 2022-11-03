const producto = require("../models/productos")

// Crear nuevo producto /api/productos
exports.newProduct = async(req,res,next) =>{
    const product = await producto.create(req.body);

    res.status(201).json({
        success:true,
        product
    })
}

// Ver la lista de productos
exports.getProducts = async(req,res,next) =>{
    const productos = await producto.find();
    res.status(200).json({
        success:true,
        cantidad: productos.length,
        productos
    })
}

// Buscar un producto por id
exports.getProductById = async(req,res,next) =>{
    const product = await producto.findById(req.params.id)
    if (!product){
        return res.status(404).json({
            success: false,
            message: "No encontramos ese Producto"
        })
    }
    res.status(200).json({
        success:true,
        message:"Aqui debajo encuentras informacion sobre tu producto",
        product
    })
}

// Actualizar un producto
exports.updateProduct = async(req,res,next) =>{
    let product = await producto.findById(req.params.id)
    if (!product){
        return res.status(404).json({
            success: false,
            message: "No encontramos ese Producto"
        })
    }

    product = await producto.findByIdAndUpdate(req.params.id, req.body, {
        new:true,
        runValidators:true
    });
    res.status(200).json({
        success:true,
        message: "Producto actualizado correctamente",
        product
    })
}

// eliminar un producto
exports.deleteProduct = async(req,res,next) =>{
    const product = await producto.findById(req.params.id)
    if (!product){
        return res.status(404).json({
            success: false,
            message: "No encontramos ese Producto"
        })
    }

    await product.remove();
    res.status(200).json({
        success:true,
        message:"Producto Eliminado Correctamente"
    })
}    