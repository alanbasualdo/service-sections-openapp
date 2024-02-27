const Company = require("../models/Company/Company");

const postCompany = async (req, res) => {
  try {
    const { cuit, name } = req.body;
    const company = await Company.findOne({ name });
    if (company) {
      return res.status(400).json({
        success: false,
        message: "La compañía ya se encuentra registrada",
      });
    }
    const newCompany = new Company({
      cuit,
      name,
    });
    await newCompany.save();

    res.status(201).json({
      success: true,
      message: "Compañía creada exitosamente",
      newCompany,
    });
  } catch (error) {
    console.error("Error creando compañía:", error.message);
    res
      .status(500)
      .json({ success: false, message: "Hubo un error al crear la compañía" });
  }
};

const getCompanies = async (req, res) => {
  try {
    const companies = await Company.find();
    res.status(200).json({
      success: true,
      message: "Lista de compañías obtenida exitosamente",
      companies,
    });
  } catch (error) {
    console.error("Error obteniendo compañías:", error.message);
    res.status(500).json({
      success: false,
      message: "Hubo un error al obtener la lista de compañías",
    });
  }
};

const putCompany = (req, res) => {};

const deleteCompany = async (req, res) => {
  try {
    const { id } = req.params;
    await Company.findByIdAndDelete(id);
    res.status(200).json({
      success: true,
      message: "Compañía eliminada exitosamente",
    });
  } catch (error) {
    console.error("Error eliminando compañía:", error);
    res.status(500).json({
      success: false,
      message: "Hubo un error al eliminar la compañía",
    });
  }
};

module.exports = {
  postCompany,
  getCompanies,
  putCompany,
  deleteCompany,
};
