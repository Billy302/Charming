const Joi = require("joi");

// Register Validation
const registerValidation = (data) => {
    const schema = Joi.object({
    user_account: Joi.string().min(3).max(50).required()
    });

    return schema.validate(data);
};

const loginValidation = (data) => {
    const schema = Joi.object({
        user_account: Joi.string().min(3).max(50).required()
    });
    return schema.validate(data);
};

module.exports.registerValidation = registerValidation;
module.exports.loginValidation = loginValidation;