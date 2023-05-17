import Publicacion from "../../models/Publicacion.js";

const updateP = {
    update: async (req, res, next) => {
        try {
            let publicacion = await Publicacion.findOneAndUpdate(
                { _id: req.params.id },
                req.body,
                { new: true }
            );
            if (publicacion) {
                return res.status(200).json({
                    success: true,
                    publicacion
                });
            } else {
                return res.status(404).json({
                    success: false,
                    message: "Publicacion not found"
                });
            }
        } catch (error) {
            next(error);
        }
    }
};

export default updateP;
