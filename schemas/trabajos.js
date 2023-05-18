import Joi from 'joi-oid';

const schema = Joi.object({
    photo: Joi
        .string()
        .min(8)
        .uri()
        .messages(
            {
                'string.min': 'La foto debe tener al menos 8 caracteres',
                'string.empty': 'La foto no puede estar vacía',
                'any.required': 'Se requiere una foto',
                'string.uri': 'Se necesita una URL válida'
            }
        ),
    mail: Joi
        .string()
        .min(3)
        .max(100)
    ,
    vacantes: Joi
        .number(),
    salario: Joi
        .number(),
    jornada: Joi
        .string()
        .min(1)
        .max(100)
    ,
    modalidad: Joi
        .string()
        .min(1)
        .max(100)
    ,
    instagram: Joi
        .string()
        .min(0)
        .max(100)
    ,
    facebook: Joi
        .string()
        .min(0)
        .max(100)
    ,
    telefono: Joi
        .number()
    ,
    web: Joi
        .string()
        .min(0)
        .max(100)
    ,
    name: Joi
        .string()
        .min(3)
        .max(100)
        .messages({
            "string.min": "El nombre debe tener al menos 3 caracteres",
            "string.max": "El nombre debe tener como máximo 100 caracteres",
            'string.required': 'El nombre es obligatorio',
        }),
    title: Joi
        .string()
        .required()
        .min(3)
        .max(100)
        .messages({
            "string.min": "El título debe tener al menos 3 caracteres",
            "string.max": "El título debe tener como máximo 100 caracteres",
            'string.required': 'El título es obligatorio',
        }),
    description: Joi
        .string()
        .required()
        .min(3)
        .max(1500)
        .messages({
            "string.min": "La descripción debe tener al menos 3 caracteres",
            "string.max": "La descripción debe tener como máximo 1500 caracteres",
            'string.required': 'La descripción es obligatoria',
        }),
    requisitos: Joi
        .string()
        .required()
        .min(3)
        .max(500)
        .messages({
            "string.min": "Los requisitos deben tener al menos 3 caracteres",
            "string.max": "Los requisitos deben tener como máximo 500 caracteres",
            'string.required': 'Los requisitos son obligatorios',
        }),
    ubicacion: Joi
        .string()
        .required()
        .min(3)
        .max(500)
        .messages({
            "string.min": "La ubicación debe tener al menos 3 caracteres",
            "string.max": "La ubicación debe tener como máximo 500 caracteres",
            'string.required': 'La ubicación es obligatoria',
        }),
    lugar: Joi
        .string()
        .required()
        .min(3)
        .max(500)
        .messages({
            "string.min": "El lugar debe tener al menos 3 caracteres",
            "string.max": "El lugar debe tener como máximo 500 caracteres",
            'string.required': 'El lugar es obligatorio',
        }),
    cover_photo: Joi
        .string()
        .uri()
        .required(),
    categoria: Joi

        .required()

        .messages({
            "string.min": "The description must have at least 20 characters",
            "string.max": "The description must have a maximum of 200 characters",
            'string.required': 'the description is required',
        }),

    user_id: Joi
        .objectId()
        .required(),

})

export default schema