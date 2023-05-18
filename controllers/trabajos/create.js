import Trabajos from "../../models/Trabajos.js";
import User from "../../models/User.js";

const trabajoos = {
    create: async (req, res, next) => {
        try {
            const { jornada, modalidad, requisitos, telefono, web, instagram, facebook, mail, photo, name, title, cover_photo, categoria, description, ubicacion, salario, vacantes, lugar, seller_id, category_id, user_id } = req.body;

            const user = await User.findById(user_id); // encuentra el usuario por su id

            if (!user) {
                return res.status(404).json({
                    success: false,
                    message: "User not found!",
                });
            }

            const trabajo = await Trabajos.create({

                modalidad,
                jornada,
                requisitos,
                title,
                cover_photo,
                description,
                categoria,
                ubicacion,
                lugar,
                salario,
                vacantes,
                seller_id,
                category_id,
                name,
                photo,
                mail,
                telefono,
                web,
                instagram,
                facebook,
                user_id: req.user._id // Agregar el user_id aquí
            });

            console.log(req.body)

            return res.status(201).json({
                success: true,
                message: "Trabajo creado",
                trabajo,
            });
        } catch (err) {
            next(err);
        }
    },
};

export default trabajoos;
