"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router_1 = __importDefault(require("./http/controllers/products/router"));
class Server {
    init() {
        this.app = (0, express_1.default)();
        this.loadRoutes();
    }
    listen() {
        this.app.listen(3333, () => console.log('Shine-Api succefully initialized on port 3333.'));
    }
    loadRoutes() {
        (0, router_1.default)(this.app);
    }
}
exports.default = Server;
