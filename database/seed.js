const mongoose = require("mongoose")
const House = require("./model/OpportunitiesModel")

const seed = [
  {
    autoridad_contrato: "Empresa Distribuidora de Electricidad del Sur",
    referecia: "EDESUR-CCC-PEEX-2023-0022",
    descripcion: "Adquisición materiales eléctricos para Subestación",
    fase_actual: "Fase del Pliego de Condiciones Específicas",
    fecha_oficial_publicacion: "10/11/2023 18:00",
    fecha_limite_respuesta: "21/11/2023 09:30",
    precio_base: "6,895,574.05",
    estado: "Publicado",
    detalles: "#"
  },
  {
    autoridad_contrato: "Empresa Distribuidora de Electricidad del Sur",
    referecia: "EDESUR-CCC-PEEX-2023-0022",
    descripcion: "Adquisición materiales eléctricos para Subestación",
    fase_actual: "Fase del Pliego de Condiciones Específicas",
    fecha_oficial_publicacion: "10/11/2023 18:00",
    fecha_limite_respuesta: "21/11/2023 09:30",
    precio_base: "6,895,574.05",
    estado: "Publicado",
    detalles: "#"
  },
  {
    autoridad_contrato: "Empresa Distribuidora de Electricidad del Sur",
    referecia: "EDESUR-CCC-PEEX-2023-0022",
    descripcion: "Adquisición materiales eléctricos para Subestación",
    fase_actual: "Fase del Pliego de Condiciones Específicas",
    fecha_oficial_publicacion: "10/11/2023 18:00",
    fecha_limite_respuesta: "21/11/2023 09:30",
    precio_base: "6,895,574.05",
    estado: "Publicado",
    detalles: "#"
  },
  {
    autoridad_contrato: "Empresa Distribuidora de Electricidad del Sur",
    referecia: "EDESUR-CCC-PEEX-2023-0022",
    descripcion: "Adquisición materiales eléctricos para Subestación",
    fase_actual: "Fase del Pliego de Condiciones Específicas",
    fecha_oficial_publicacion: "10/11/2023 18:00",
    fecha_limite_respuesta: "21/11/2023 09:30",
    precio_base: "6,895,574.05",
    estado: "Publicado",
    detalles: "#"
  },
]

async function seedDatabase() {
  await House.insertMany(seed);
  console.log("Database seeded successfully");
}

mongoose.connect("mongodb://127.0.0.1:27017/earthbnb")
  .then(() => seedDatabase())
  .catch(error => console.error("Error connecting to database", error));