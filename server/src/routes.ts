import express from 'express';
import UserController from '@controllers/UserController'
import { Student } from '@models/Student';
import StudentController from '@controllers/StudentController';
import SchoolController from '@controllers/SchoolController';

const routes = express.Router();
const userController = new UserController();
const studentController = new StudentController();
const schoolController = new SchoolController();

routes.post('/user', userController.create);
routes.get('/user', userController.get);
routes.delete('/user/:id', userController.delete);
routes.put('/user/:id', userController.update);

routes.post('/student', studentController.create);
routes.get('/student', studentController.get);

routes.post('/school', schoolController.create);
routes.get('/school', schoolController.get);
routes.delete('/school/:id', schoolController.delete);
routes.put('/school/:id', schoolController.update);

export default routes;
