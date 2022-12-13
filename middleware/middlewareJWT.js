/**
 * Objetivo: Implementação do JWT no projeto
 * Data: 12/12/2022
 * Versao: 1.0
 * Desenvolverdor: Eduardo Perucci
 */

const jwt = require('jsonwebtoken')
//CHAVE SECRETA PARA A CRIAÇÃO DO JWT
const SECRET = '123'
//TEMPO PARA VALIDAR O TOKEN
const EXPIRES = 120

//Criacao do jwt (retorna um token)
const createJWT = async function(payload){

    //Gera o token
        //Payload - a identificação do usuario autenticado
        //SECRET -  a chave secreta
        //expiresIn - tempo de expiração do token
    const token = jwt.sign({userID: payload}, SECRET, {expiresIn: EXPIRES})

    return token
}
//Validacao da autenticidade do jwt (recebe o token para a validação)
const validateJWT = async function(token){
    let status
    //Valida a autenticidade do token
    jwt.verify(token, SECRET, async function(err,decode){

        if (err)
            status = false
        else    
            status = true
    })

        return status
}

module.exports = {
    createJWT,
    validateJWT
}