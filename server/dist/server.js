"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const port = 3001;
const cors = require('cors');
app.use(cors());
// Middleware to parse JSON bodies
app.use(express_1.default.json());
app.get('/api/hello', (req, res) => {
    res.json({ message: 'Hello from server!' });
});
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
