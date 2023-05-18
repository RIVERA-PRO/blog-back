import Publicacion from "../../models/Publicacion.js";
import User from "../../models/User.js";

const publicaciones = {
    create: async (req, res, next) => {
        try {
            const { likes, cover_photo, mail, photo, name, title, categoria, description, user_id } = req.body;
            const user = await User.findById(user_id); // encuentra el usuario por su id

            if (!user) {
                return res.status(404).json({
                    success: false,
                    message: "User not found!",
                });
            }

            const publicacion = await Publicacion.create({
                likes,
                title,
                cover_photo,
                description,
                categoria,
                name,
                photo,
                mail,
                user_id: req.user._id // Agregar el user_id aquí
            });

            console.log(req.body)

            return res.status(201).json({
                success: true,
                message: "Publicacion creada",
                publicacion,
            });
        } catch (err) {
            next(err);
        }
    },
};

export default publicaciones;
