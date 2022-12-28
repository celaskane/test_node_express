//import { Request, Response, NextFunction } from "express";
//export const criaAfazeres = (req: Request, res: Response, next: NextFunction) => {};

import { RequestHandler } from "express";
import { Afazer } from "../models/afazeres";

const AFAZERES: Afazer[] = [];

export const criaAfazeres: RequestHandler = (req, res, next) => {
    const text = (req.body as {text: string}).text;
    const novoAfazer = new Afazer(Math.random().toString(), text);

    AFAZERES.push(novoAfazer);

    res.status(201).json({mensagem: 'Afazeres criado', afazerCriado: criaAfazeres});
};