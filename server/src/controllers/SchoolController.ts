import { Request, Response } from 'express';
import { School } from '@models/School';
import { Citi, Crud } from '../global';
import exp from 'constants';
import { RepositoryNotTreeError } from 'typeorm';

export default class SchoolController implements Crud {

    async create(request : Request, response : Response) {
        const {name, adress, age} = request.body;

        const isAnyUndefined = Citi.areValuesUndefined(name, adress, age)
        if(isAnyUndefined) return response.status(400).send();

        const newSchool = {name, adress, age};
        const {httpStatus, message} = await Citi.insertIntoDatabase(School, newSchool);

        return response.status(httpStatus).send({message});
        
    }

    async get(request: Request, response: Response){
        const {httpStatus, values} = await Citi.getAll(School);
        return response.status(httpStatus).send(values);
    }

    async delete(request : Request, response : Response) {
        const {id} = request.params;
        const {value : schoolFound, message} = await Citi.findByID(School, id);

        if(!schoolFound) return response.status(400).send({message});

        const {httpStatus, messageFromDelete} = await Citi.deleteValue(School, schoolFound);
        return response.status(httpStatus).send({messageFromDelete});

    }

    async update(request : Request, response : Response) {
        const {id} = request.params;
        const {name, adress, age} = request.body;

        const isAnyUndefined = Citi.areValuesUndefined(name, adress, age)
        if(isAnyUndefined) return response.status(400).send();

        const schoolWithUpdatedValues = {name, adress, age};

        const {httpStatus, messageFromUpdate} = await Citi.updateValue(School, id, schoolWithUpdatedValues);
        return response.status(httpStatus).send({messageFromUpdate});
    }   
}

// import { Request, Response } from 'express';
// import { School } from '@models/School';
// import { Citi, Crud } from '../global';

// export default class SchoolController implements Crud {

//     async create(request: Request, response: Response){
//         const {name, adress, age} = request.body;

//         const isAnyUndefined = Citi.areValuesUndefined(name, adress, age);
//         if(isAnyUndefined) return response.status(400).send();

//         const newSchool = { name, adress, age };
//         const {httpStatus, message} = await Citi.insertIntoDatabase(School, newSchool);

//         return response.status(httpStatus).send({ message });
//     }

//     async get(request: Request, response: Response){
//         const {httpStatus, values} = await Citi.getAll(School);
//         console.log(httpStatus, values)
//         console.log('klfjsdkj')
//         return response.status(httpStatus).send(values);
//     }

//     async delete(request: Request, response: Response){
//         const { id } = request.params;
//         const {value: SchoolFound, message } = await Citi.findByID(School, id); 
           
//         if(!SchoolFound) return response.status(400).send({ message });

//         const {httpStatus, messageFromDelete } = await Citi.deleteValue(School, SchoolFound);
//         return response.status(httpStatus).send({ messageFromDelete });
//     }

//     async update(request: Request, response: Response){
//         const { id } = request.params;
//         const {name, adress, age } = request.body;

//         const isAnyUndefined = Citi.areValuesUndefined(name, adress, age, id);
//         if(isAnyUndefined) return response.status(400).send();

//         const schoolWithUpdatedValues = { name, adress, age };

//         const { httpStatus, messageFromUpdate } = await Citi.updateValue(School, id, schoolWithUpdatedValues);
//         return response.status(httpStatus).send({ messageFromUpdate });
//     }

// }