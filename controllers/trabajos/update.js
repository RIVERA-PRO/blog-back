import Trabajo from "../../models/Trabajos.js";

const updateP = {
    update: async (req, res, next) => {
        try {
            let trabajo = await Trabajo.findOneAndUpdate(
                { _id: req.params.id },
                req.body,
                { new: true }
            );
            if (trabajo) {
                return res.status(200).json({
                    success: true,
                    trabajo
                });
            } else {
                return res.status(404).json({
                    success: false,
                    message: "trabajo not found"
                });
            }
        } catch (error) {
            next(error);
        }
    }
};

export default updateP;
