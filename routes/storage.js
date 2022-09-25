const express = require('express');
const router = express.Router();
const uploadMiddleware = require('../helpers/helperStorage')
const { validaGetItem } = require("../validators/storage");
const {getItems, createItem, showdetailsItem, updateItem, deleteItem} = require('../controllers/storage')
/**
 * Get all storages
 * @openapi
 * /storage:
 *    get:
 *      tags:
 *        - storage
 *      summary: "Lists files"
 *      description: Get all the lists of files
 *      security:
 *        - bearerAuth: []
 *      responses:
 *        '200':
 *          description: Return the list of files.
 *          content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/storage'
 *        '422':
 *          description: Error of validation
 */
router.get('/', getItems);
/**
 * Get detail from storage
 * @openapi
 * /storage/{id}:
 *    get:
 *      tags:
 *        - storage
 *      summary: "Detail storage"  
 *      description: Get detail from storage
 *      security:
 *        - bearerAuth: []
 *      parameters:
 *      - name: id
 *        in: path
 *        description: Storage ID to return
 *        required: true
 *        schema:
 *          type: string
 *      responses:
 *        '200':
 *          description: Returns the object from storage.
 *          content:
 *             application/json:
 *               schema:
 *                   $ref: '#/components/schemas/storage'
 *        '422':
 *          description: Error of validation
 */
router.get('/:id', validaGetItem, showdetailsItem);
/**
 * Upload file
 * @openapi
 * /storage:
 *    post:
 *      tags:
 *        - storage
 *      summary: "Upload file"
 *      description: Subir un archivo
 *      security:
 *        - bearerAuth: []
 *      responses:
 *        '200':
 *          description: Retorna el objeto insertado en la coleccion.
 *        '422':
 *          description: Error de validacion.
 *      requestBody:
 *        content:
 *         multipart/form-data:
 *           schema:
 *             type: object
 *             properties:
 *               myfile:
 *                 type: string
 *                 format: binary
 *    responses:
 *      '201':
 *        description: Retorna el objeto insertado en la coleccion con stado '201'
 *      '403':
 *        description: No tiene permisos '403'
 */
router.post('/',uploadMiddleware.single("miarchivo"),createItem);

router.get('/:id', validaGetItem, updateItem);
/**
 *  Delete storage
 * @openapi
 * /storage/{id}:
 *    delete:
 *      tags:
 *        - storage
 *      summary: "Delete storage"
 *      description: Delete the detail of a storage.
 *      security:
 *        - bearerAuth: []
 *      parameters:
 *      - name: id
 *        in: path
 *        description: Song ID to return.
 *        required: true
 *        schema:
 *          type: string
 *      responses:
  *        '200':
 *          description: Return the object from the storage
 *        '422':
 *          description: Error of validation.       
 */
router.delete('/:id', validaGetItem, deleteItem);

module.exports = router
