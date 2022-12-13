const { PrismaClient } = require('@prisma/client')

    const prisma = new PrismaClient()



    const selectAllTipos = async () => {

        const { PrismaClient } = require('@prisma/client')
    
        const prisma = new PrismaClient()
    
    
        let sql = `select tbl_produto.nome, tbl_produto.foto, tbl_produto.preco, tbl_produto.descricao, tbl_tipoPizza.tipo, tbl_produto.status_promocao, tbl_produto.status_favoritos, tbl_produto.id from tbl_produto
        inner join tbl_tipoPizza
            on tbl_produto.id = tbl_tipoPizza.id_produto`
    
        const rsTipo = await prisma.$queryRawUnsafe(sql)
    
        if (rsTipo.length > 0) {
            return rsTipo
        } else{
            return false
        }
    }

    const insertTipoPizza = async (tipoPizza) => {
        try {
           
        const sql = `insert into tbl_tipoPizza(tipo, id_produto) values( '${tipoPizza.tipo}', ${tipoPizza.id_produto})`
        
        const result = await prisma.$executeRawUnsafe(sql)
        console.log(result)
        if(result){
            return true
        }else{
            return false
        }
        
        } catch (error) {
            return false
        }
    }
    
    const updateTipoPizza = async (tipoPizza) => {
        try {
            
        const sql = `update tbl_tipoPizza set tipo = '${tipoPizza.tipo}' where id = ${tipoPizza.id_produto}`
    
        const result = await prisma.$executeRawUnsafe(sql)
    
        if(result){
            return true
        }else{
            return false
        }
    
        } catch (error) {
            return false
        }
    }

    const selectTypetByID = async (id) => {

        const { PrismaClient } = require('@prisma/client')
    
        const prisma = new PrismaClient()
    
        const sql = `select * from tbl_tipoPizza where id = ${id}`
        const search = await prisma.$queryRawUnsafe(sql)
    
      
    
        if (search){
            return search
        }else{
            return false
        }
    
    }

    const selectAllSalgado = async () => {

        const { PrismaClient } = require('@prisma/client')
    
        const prisma = new PrismaClient()
    
    
        let sql = `select tbl_produto.nome, tbl_produto.foto, tbl_produto.preco, tbl_produto.descricao,  tbl_produto.status_promocao, tbl_produto.status_favoritos, tbl_tipoPizza.tipo, tbl_produto.id from tbl_produto
        inner join tbl_tipoPizza
            on tbl_produto.id = tbl_tipoPizza.id_produto where tipo = 'Salgado';`
    
        const rspromo = await prisma.$queryRawUnsafe(sql)
    
        if (rspromo.length > 0) {
            return rspromo
        } else{
            return false
        }
    }

    const selectAllDoce = async () => {

        const { PrismaClient } = require('@prisma/client')
    
        const prisma = new PrismaClient()
    
    
        let sql = `select tbl_produto.nome, tbl_produto.foto, tbl_produto.preco, tbl_produto.descricao,  tbl_produto.status_promocao, tbl_produto.status_favoritos, tbl_tipoPizza.tipo, tbl_produto.id from tbl_produto
        inner join tbl_tipoPizza
            on tbl_produto.id = tbl_tipoPizza.id_produto where tipo = 'Doce';`
    
        const rspromo = await prisma.$queryRawUnsafe(sql)
    
        if (rspromo.length > 0) {
            return rspromo
        } else{
            return false
        }
    }

    const selectAllVegetal = async () => {

        const { PrismaClient } = require('@prisma/client')
    
        const prisma = new PrismaClient()
    
    
        let sql = `select tbl_produto.nome, tbl_produto.foto, tbl_produto.preco, tbl_produto.descricao,  tbl_produto.status_promocao, tbl_produto.status_favoritos, tbl_tipoPizza.tipo, tbl_produto.id from tbl_produto
        inner join tbl_tipoPizza
            on tbl_produto.id = tbl_tipoPizza.id_produto where tipo = 'Vegetariana';`
    
        const rspromo = await prisma.$queryRawUnsafe(sql)
    
        if (rspromo.length > 0) {
            return rspromo
        } else{
            return false
        }
    }

    module.exports = {
        insertTipoPizza,
        updateTipoPizza,
        selectAllTipos,
        selectTypetByID,
        selectAllSalgado,
        selectAllDoce,
        selectAllVegetal
    }

    