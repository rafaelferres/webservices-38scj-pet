import { addBpmController } from '@useCases/AddBpm'
import { addPetController } from '@useCases/AddPet'
import { addUserController } from '@useCases/AddUser'
import { getBpmController } from '@useCases/GetBpm'
import { getPetsController } from '@useCases/GetPets'
import { loginUserController } from '@useCases/LoginUser'
import { Router } from 'express'
const router = Router()

router.get('/', (req, res) => res.json({ status: 'running' }))
router.post('/api/v1/user', (req, res) => addUserController.handler(req, res))
router.post('/api/v1/user/login', (req, res) => loginUserController.handler(req, res))
router.post('/api/v1/pets', (req, res) => addPetController.handler(req, res))
router.get('/api/v1/pets', (req, res) => getPetsController.handler(req, res))
router.post('/api/v1/bpm', (req, res) => addBpmController.handler(req, res))
router.get('/api/v1/bpm', (req, res) => getBpmController.handler(req, res))

export { router }
