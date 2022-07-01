import {Request, Response} from 'express';
import { getFromName} from '../models/pets';
import { creatMenuObject } from '../helpers/menuObject';

export const search = (req:Request, res:Response, )=>{
    let name = req.query.q as string;
    let list = getFromName(name);

    if(!name){
        res.redirect('/')
        return;
    }

    res.render('pages/page',{
        menu:creatMenuObject(""),
        list,
        name
    });
}
