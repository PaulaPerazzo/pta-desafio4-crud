import { Request, Response } from 'express';
import { Student } from '@models/Student';
import { Citi, Crud } from '../global';

export default class StudentController implements Crud {

    async create(request : Request, response : Response) {
        const {school, name} = request.body;

        const isAnyUndefined = Citi.areValuesUndefined(school, name);
        if(isAnyUndefined) return response.status(400).send();

        const newStudent = {
            school, 
            name
        };

        const {httpStatus, message} = await Citi.insertIntoDatabase(Student, newStudent);
        return response.status(httpStatus).send({message});   

    }

    async get(request : Request, response : Response) {
        const {httpStatus, values} = await Citi.getAll(Student);
        return response.status(httpStatus).send(values);
    }

}