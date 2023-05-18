import express from "express";
import trabajos from "../controllers/trabajos/create.js";
import oneT from '../controllers/trabajos/get_one.js'
import destroyT from "../controllers/trabajos/destroy.js";
import updateT from '../controllers/trabajos/update.js'
import todos from '../controllers/trabajos/get_public.js'
import passport from '../middlewares/passport.js'
import destinoSchemas from '../schemas/trabajos.js'
import validator from '../middlewares/validator.js'

let router = express.Router()
const { create } = trabajos
const { getOne } = oneT
const { destroy } = destroyT
const { update } = updateT
const { read } = todos

router.post('/', passport.authenticate("jwt", { session: false }), validator(destinoSchemas), create)

router.get('/', read)
router.get('/:id', getOne)

router.put('/:id', passport.authenticate('jwt', { session: false }), update)

router.delete('/:id', passport.authenticate('jwt', { session: false }), destroy)

export default router
