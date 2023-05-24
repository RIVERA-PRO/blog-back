import Trabajo from "../../models/Trabajos.js";

const updateP = {
    update: async (req, res, next) => {
        try {
            let trabajo = await Trabajo.findOne({ _id: req.params.id });

            if (!trabajo) {
                return res.status(404).json({
                    success: false,
                    message: "trabajo not found"
                });
            }

            const updatedFields = {
                jornada: req.body.jornada || trabajo.jornada,
                requisitos: req.body.requisitos || trabajo.requisitos,
                title: req.body.title || trabajo.title,
                cover_photo: req.body.cover_photo || trabajo.cover_photo,
                description: req.body.description || trabajo.description,
                categoria: req.body.categoria || trabajo.categoria,
                ubicacion: req.body.ubicacion || trabajo.ubicacion,
                lugar: req.body.lugar || trabajo.lugar,
                salario: req.body.salario || trabajo.salario,
                vacantes: req.body.vacantes || trabajo.vacantes,
                seller_id: req.body.seller_id || trabajo.seller_id,
                category_id: req.body.category_id || trabajo.category_id,
                name: req.body.name || trabajo.name,
                photo: req.body.photo || trabajo.photo,
                mail: req.body.mail || trabajo.mail,
                telefono: req.body.telefono || trabajo.telefono,
                web: req.body.web || trabajo.web,
                instagram: req.body.instagram || trabajo.instagram,
                facebook: req.body.facebook || trabajo.facebook
            };

            trabajo = await Trabajo.findOneAndUpdate(
                { _id: req.params.id },
                { $set: updatedFields },
                { new: true }
            );

            return res.status(200).json({
                success: true,
                trabajo
            });
        } catch (error) {
            next(error);
        }
    }
};

export default updateP;
