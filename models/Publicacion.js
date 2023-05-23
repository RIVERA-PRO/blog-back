import mongoose from 'mongoose'

let schema = new mongoose.Schema(
  {

    user_id: { type: mongoose.Types.ObjectId, ref: "user", required: true },
    name: { type: String, required: false, ref: "user" },
    mail: { type: String, required: false, ref: "user" },
    photo: { type: String, required: false, ref: "user" },
    title: { type: String, required: true },
    cover_photo: { type: String, required: false },
    description: { type: String, required: true },
    categoria: { type: String, required: true },
    likes: { type: Number, required: false, }

  }, {
  timestamps: true
}

);
let Destino = mongoose.model("publicacion", schema);
export default Destino;


