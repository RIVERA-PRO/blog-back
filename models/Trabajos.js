import mongoose from 'mongoose'


let schema = new mongoose.Schema(
    {
        user_id: { type: mongoose.Types.ObjectId, ref: "user", required: true },
        name: { type: String, required: false, ref: "user" },
        mail: { type: String, required: false, ref: "user" },
        photo: { type: String, required: false, ref: "user" },
        title: { type: String, required: true },
        lugar: { type: String, required: true },
        ubicacion: { type: String, required: true },
        description: { type: String, required: true },
        requisitos: { type: String, required: true },
        categoria: { type: String, required: true },
        salario: { type: Number, required: true },
        vacantes: { type: Number, required: true },
        jornada: { type: String, required: true },
        modalidad: { type: String, required: true },
        telefono: { type: Number, required: true },
        web: { type: String, required: false },
        facebook: { type: String, required: false },
        instagram: { type: String, required: false },
    }, {
    timestamps: true
}

);
let Trabajo = mongoose.model("trabajos", schema);
export default Trabajo;
