import Trabajo from '../../models/Trabajos.js';

const onePub = {
    getOne: async (req, res, next) => {
        try {
            const trabajo = await Trabajo.findOne({ _id: req.params.id });

            if (trabajo) {
                return res.status(200).json({
                    trabajo: trabajo
                });
            } else {
                return res.status(404).json({
                    success: false,
                    message: "This trabajo doesn't exist!",
                });
            }
        } catch (error) {
            next(error);
        }
    },
};

export default onePub;
