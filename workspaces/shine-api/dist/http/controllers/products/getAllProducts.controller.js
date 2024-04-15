"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const getAllProducts = (req, res) => {
    res
        .status(200)
        .json({ message: 'Hello World!' });
};
exports.default = getAllProducts;
