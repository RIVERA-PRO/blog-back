import Trabajo from "../../models/Trabajos.js";

const destroyP = {
    destroy: async (req, res, next) => {
        try {
            let trabajo = await Trabajo.findOneAndDelete(
                { _id: req.params.id }
            );
            if (trabajo) {
                return res.status(200).json({
                    success: true,
                    message: "trabajo eliminado",
                });
            } else {
                return res.status(404).json({
                    success: false,
                    message: "trabajo not found",
                });
            }
        } catch (error) {
            next(error);
        }
    },
};

export default destroyP;
