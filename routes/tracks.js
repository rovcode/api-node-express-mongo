const express = require('express')
const router = express.Router()
const {validaCreateItem, validaGetItem} = require('../validators/tracks')
const {authMiddleware} = require("../middleware/session")
const checkRol = require("../middleware/rol")
const {getItems, showdetailsItem, createItem, updateItem, deleteItem} = require('../controllers/tracks')
const customHeader = require('../middleware/customHeader')
/**
 * Get all tracks
 * @openapi
 * /tracks:
 *    get:
 *      tags:
 *        - tracks
 *      summary: "List all tracks"
 *      description: Get all tracks
 *      security:
 *        - bearerAuth: []
 *      responses:
 *        '200':
 *          description: Returns the list of all tracks
 *          content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/track'
 *        '422':
 *          description: Error de validacion.
 */
router.get("/", authMiddleware, getItems)
/**
 * Register new track
 * @openapi
 * /tracks:
 *    post:
 *      tags:
 *        - tracks
 *      summary: "Register new track"
 *      description: Register new track 
 *      security:
 *        - bearerAuth: []
 *      responses:
 *        '200':
 *          description: Returns the object created 
 *        '422':
 *          description: Error of validations.
 *      requestBody:
 *          content:
 *            application/json:
 *              schema:
 *                 $ref: "#/components/schemas/track"
 *    responses:
 *      '201':
 *        description: Returns the object inserted in the collections whith state '201'
 *      '403':
 *        description: You don't have permissions '403'
 */
router.post("/",authMiddleware, checkRol(["Usuario"]),validaCreateItem,createItem)
/**
 * Get details track
 * @openapi
 * /tracks/{id}:
 *    get:
 *      tags:
 *        - tracks
 *      summary: "Detail of a track"
 *      description: Get details of a track
 *      security:
 *        - bearerAuth: []
 *      parameters:
 *      - name: id
 *        in: path
 *        description: Song ID to return
 *        required: true
 *        schema:
 *          type: string
 *      responses:
 *        '200':
 *          description: Returns the song object.
 *          content:
 *             application/json:
 *               schema:
 *                   $ref: '#/components/schemas/track'
 *        '422':
 *          description: Error de validacion.
 */
 router.get("/:id",validaGetItem,showdetailsItem)
/**
 * Update track
 * @openapi
 * /tracks/{id}:
 *    put:
 *      tags:
 *        - tracks
 *      summary: "Update track"
 *      description: Update the song and get all the details
 *      security:
 *        - bearerAuth: []
 *      parameters:
 *      - name: id
 *        in: path
 *        description: Song ID to return
 *        required: true
 *        schema:
 *          type: string
 *      responses:
 *        '200':
 *          description: Returns the object of tracks updated in the collection
 *        '422':
 *          description: Error of validation
 *      requestBody:
 *          content:
 *            application/json:
 *              schema:
 *                 $ref: "#/components/schemas/track"
 *    responses:
 *      '201':
 *        description: Returns the object inserted in the collections whith state '201'
 *        content:
 *           application/json:
 *             schema:
 *                $ref: '#/components/schemas/track'
 *      '403':
 *        description: You don't have permissions '403'
 */
 router.put("/:id",validaCreateItem, validaGetItem, updateItem)
/**
 * Delete track
 * @openapi
 * /tracks/{id}:
 *    delete:
 *      tags:
 *        - tracks
 *      summary: "Delete track"
 *      description: Delete the details of a track
 *      security:
 *        - bearerAuth: []
 *      parameters:
 *      - name: id
 *        in: path
 *        description: Song ID to delete
 *        required: true
 *        schema:
 *          type: string
 *      responses:
 *        '200':
 *          description: Returns the object of the song
 *        '422':
 *          description: Error of validation
 */
 router.delete("/:id",validaGetItem, deleteItem)

module.exports = router