const mongoose = require("mongoose")

const productosSchema = mongoose.Schema({
    nombre:{
        type:String,
        required:[true,"Por Favor Registra el Nombre del Producto"],
        trim:true,
        maxLength:[120,"El nombre del Producto No Debe Exceder los 120 Caracteres"]
    },
    precio:{
        type:Number,
        required:[true,"Por Favor Registre el Precio del Producto"],
        maxLength:[8,"El Precio del Producto es Demasiado Extenso"],
        default:0.0
    },
    descripcion:{
        type:String,
        required:[true,"Por Favor Escribir la Descripcion del Producto"],
    },
    calificacion:{
        type:Number,
        default:0
    },
    imagen:[
        {
            public_id:{
                type:String,
                required:true
            },
            url:{
                type:String,
                required:true
            }
        }
    ],
    categoria:{
        type:String,
        required:[true,"Por favor Seleccione la Categoria del Producto"],
        enum:{
            values:[
                "Celulares Xiaomi",
                "Celulares Oppo",
                "Celulares Samsung",
                "Celulares Huawei",
                "Celulares Google Pixel",
                "Celulares Apple",
                "Accesorios Apple",
                "Accesorios Generales"
            ]
        }
    },
    vendedor:{
        type:String,
        required:[true,"Por Favor Registre el Vendedor del Producto"]
    },
    inventario:{
        type:Number,
        required:[true,"Por Favor Registre el Stock del Producto"],
        maxLength:[5,"Cantidad Maxima del Producto Alcanzado"]
    },
    numCalificaciones:{
        type:Number,
        default:0
    },
    opiniones:[
        {
            nombreCliente:{
                type:String,
                required:true
            },
            rating:{
                type:Number,
                required:true
            },
            comentario:{
                type:String,
                required:true
            }
        }
    ],
    fechaCreacion:{
        type:Date,
        default:Date.now
    }

})

module.exports = mongoose.model("productos",productosSchema)