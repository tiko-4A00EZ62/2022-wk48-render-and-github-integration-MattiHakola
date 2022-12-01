const electricity = require("../models/electricty");
const Joi = require("joi");

const getElectricity = async (req, res) => {
    try {
        const response = await electricity.findAll();
        if (response) {
            res.send(response);
        }
    } catch (e) {
        res.sendStatus(500);
    }
};

const getElectricityById = async (req, res) => {
    const id = parseInt(req.params.id, 10);
    try {
        const response = await electricity.findById(id);
        if (response.length === 1) {
            res.send(response[0]);
        } else {
            res.status(404).send("Not Found");
        }
    } catch (e) {
        res.sendStatus(500);
    }
};

const createElectricity = async (req, res) => {
    const schema = Joi.object({
        month: Joi.string().min(1).required(),
        consumption: Joi.number.required(),
        cost: Joi.number.required(),
    });
    const { error } = schema.validate(req.body);
    if (error) {
        res.status(400).send(error.details[0].message);
        return;
    }
    const invoice = {
        month: req.body.month,
        consumption: req.body.consumption,
        cost: req.body.cost,
    };
    try {
        const response = await electricity.save(invoice);
        if (response) {
            invoice.id = response.insertId;
            res.status(201).send(invoice);
        }
    } catch (e) {
        res.sendStatus(500);
    }
};

const updateElectricity = async (req, res) => {
    const invoice = {
        id: req.body.id,
        month: req.body.month,
        cost: req.body.cost,
        consumption: req.body.consumption,
    };
    try {
        const response = await electricity.updateById(invoice);
        if (response) {
            res.send(invoice);
        }
    } catch (e) {
        res.sendStatus(500);
    }
};

const deleteElectricity = async (req, res) => {
    const id = parseInt(req.params.id, 10);
    try {
        const response = await electricity.deleteById(id);
        if (response) {
            res.send("Electricity deleted");
        }
    } catch (e) {
        res.sendStatus(500);
    }
};

module.exports = {
    createElectricity,
    deleteElectricity,
    getElectricity,
    getElectricityById,
    updateElectricity,
};
