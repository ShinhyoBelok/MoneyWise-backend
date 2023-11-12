const mongoose = require('mongoose')

const oppotunitiesSchema = new mongoose.Schema({
  autoridad_contrato: String,
  referecia: String,
  descripcion: String,
  fase_actual: String,
  fecha_oficial_publicacion: String,
  fecha_limite_respuesta: String,
  precio_base: String,
  estado: String,
  detalles: String
})

module.exports = mongoose.model('Opportunities', oppotunitiesSchema)