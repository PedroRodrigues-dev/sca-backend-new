const express = require('express');
const authRoutes = require('./authRoutes');
const usuarioRoutes = require('./usuarioRoutes');
const authMiddleware = require('../middlewares/authMiddleware');

const router = express.Router();

router.use("/auth", authRoutes);
router.use("/usuarios", authMiddleware, usuarioRoutes);

module.exports = router;