const { Router } = require('express');
const { usuariosGet, usuariosPut, usuariosPost, usuariosDetele, usuariosPatch } = require('../controllers/user');
const router = Router();

module.exports = router;

router.get('/', usuariosGet);

router.put('/:id', usuariosPut);

router.post('/', usuariosPost);

router.delete('/', usuariosDetele);

router.patch('/', usuariosPatch);