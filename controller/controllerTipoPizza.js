const {MESSAGE_ERROR, MESSAGE_SUCCESS} = require('../modulo/config.js')
const tipo = require('../model/DAO/tipoPizza.js')

const listarTipos = async function(){
    let tipospizzaJSON = {}
    
    
    const dados = await tipo.selectAllTipos()
    
    if (dados) {
        tipospizzaJSON.Tipos = dados
        tipospizzaJSON.status = 200
    } else{
        tipospizzaJSON.message = MESSAGE_ERROR.NOT_FOUND_DB
        tipospizzaJSON.status = 404
    }
    
    return tipospizzaJSON
    
}

const novoTipoPizza = async function(tipoPizza){
    
    if(tipoPizza.tipo == undefined || tipoPizza.tipo == undefined){ 
        return {status:400, message: MESSAGE_ERROR.REQUIRED_FIELDS}
     
    }else{
        const newType = require('../model/DAO/tipoPizza.js')
        
            const rsTipo = await newType.insertTipoPizza(tipoPizza)
           console.log(rsTipo);
         
            if(rsTipo){
                return {status: 200, message: MESSAGE_SUCCESS.INSERT_ITEM}
            }else{
                return {status:500, message:MESSAGE_ERROR.INTERNAL_SERVER_ERROR}
            }
    }
}

const listarSalgado = async function(){
    let salgadoJSON = {}
    
    
    const dados = await tipo.selectAllSalgado()
    
    if (dados) {
        salgadoJSON.Salgados = dados
        salgadoJSON.status = 200
    } else{
        salgadoJSON.message = MESSAGE_ERROR.NOT_FOUND_DB
        salgadoJSON.status = 404
    }
    
    return  salgadoJSON
    
}

const listarDoce = async function(){
    let doceJSON = {}
    
    
    const dados = await tipo.selectAllDoce()
    
    if (dados) {
        doceJSON.Salgados = dados
        doceJSON.status = 200
    } else{
        doceJSON.message = MESSAGE_ERROR.NOT_FOUND_DB
        doceJSON.status = 404
    }
    
    return  doceJSON
    
}

const listarVegetariana = async function(){
    let doceJSON = {}
    
    
    const dados = await tipo.selectAllVegetal()
    
    if (dados) {
        doceJSON.Salgados = dados
        doceJSON.status = 200
    } else{
        doceJSON.message = MESSAGE_ERROR.NOT_FOUND_DB
        doceJSON.status = 404
    }
    
    return  doceJSON
    
}

module.exports = {
    novoTipoPizza,
    listarTipos,
    listarSalgado,
    listarDoce,
    listarVegetariana

}