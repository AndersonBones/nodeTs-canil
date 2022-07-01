import {Request, Response} from 'express';
import {creatMenuObject} from '../helpers/menuObject';
import { getFromType, getAll, getFromName } from '../models/pets';

export const home = (req:Request, res:Response,)=>{
    let list = getAll();

    res.render('pages/page',{
        banner:{
            title: 'Todos os animais',
            background: 'allanimals.jpg'
        },
        menu:creatMenuObject('all'),
        list
    });
}

export const dogs = (req:Request, res:Response, )=>{
    let list = getFromType('dog');

    res.render('pages/page',{
        banner:{
            title: 'Cachorros',
            background: 'banner_dog.jpg'
        },
        menu:creatMenuObject('dog'),
        list
    });
}

export const cats = (req:Request, res:Response, )=>{
    let list = getFromType('cat');

    res.render('pages/page',{
        banner:{
            title: 'Gatos',
            background: 'banner_cat.jpg'
        },
        menu:creatMenuObject('cat'),
        list
    })
}

export const fishes = (req:Request, res:Response, )=>{
    let list = getFromType('fish');

    res.render('pages/page',{
        banner:{
            title: 'Peixes',
            background: 'banner_fish.jpg'
        },
        menu:creatMenuObject('fish'),
        list
    })
}