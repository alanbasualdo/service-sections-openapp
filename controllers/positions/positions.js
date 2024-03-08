const Position = require("../../models/Position/Position");

const postPosition = async (req, res) => {
  try {
    const { name, level } = req.body;
    const position = await Position.findOne({ name });
    if (position) {
      return res.status(400).json({
        success: false,
        message: "El puesto ya se encuentra registrado",
      });
    }
    const newPosition = new Position({
      name,
      level,
    });
    await newPosition.save();
    res.status(201).json({
      success: true,
      message: "Puesto creado exitosamente",
      newPosition,
    });
  } catch (error) {
    console.error(error.message);
    res.status(500).json({
      success: false,
      message: `Error: ${error.message}`,
    });
  }
};

const getPositions = async (req, res) => {
  try {
    const positions = await Position.find().sort({ level: 1 });
    res.status(200).json({
      success: true,
      message: "Lista de puestos obtenida exitosamente",
      positions,
    });
  } catch (error) {
    console.error(error.message);
    res.status(500).json({
      success: false,
      message: `Error: ${error.message}`,
    });
  }
};

const deletePosition = async (req, res) => {
  try {
    const { id } = req.params;
    await Position.findByIdAndDelete(id);
    res.status(200).json({
      success: true,
      message: "Puesto eliminado exitosamente",
    });
  } catch (error) {
    console.error(error.message);
    res.status(500).json({
      success: false,
      message: `Error: ${error.message}`,
    });
  }
};

module.exports = {
  postPosition,
  getPositions,
  deletePosition,
};
