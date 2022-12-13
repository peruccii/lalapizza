const { PrismaClient } = require('@prisma/client')

    const prisma = new PrismaClient()


const selectAllProdutos = async function() {
    
    const { PrismaClient } = require('@prisma/client')

    const prisma = new PrismaClient()

    let sql = `select tbl_produto.nome, tbl_produto.foto, tbl_produto.preco, tbl_produto.descricao, tbl_tipoPizza.tipo, tbl_bebida.litragem, tbl_bebida.teor_alcoolico, tbl_produto.status_promocao, tbl_produto.status_favoritos, tbl_produto.id from tbl_produto
    left join tbl_pizza 
        on tbl_produto.id = tbl_pizza.id_produto
    left join tbl_bebida
        on tbl_produto.id = tbl_bebida.id_produto
    left join tbl_tipoPizza
        on tbl_produto.id = tbl_tipoPizza.id_produto;` 

   
    const rsProdutos = await prisma.$queryRawUnsafe(sql)

    if (rsProdutos.length > 0) {
        return rsProdutos
    } else{
        return false
    }
}

const selectAllPizzas = async function() {

    const { PrismaClient } = require('@prisma/client')

    const prisma = new PrismaClient()


    const sql = `select tbl_produto.nome, tbl_produto.foto, tbl_produto.preco, tbl_produto.descricao, tbl_produto.status_promocao, tbl_produto.status_favoritos, tbl_produto.id from tbl_produto
    inner join tbl_pizza 
        on tbl_produto.id = tbl_pizza.id_produto`
    
    
    const rsPizza = await prisma.$queryRawUnsafe(sql)
   
    if (rsPizza.length > 0) {
        return rsPizza
    } else{
        return false
    }

}

const selectAllBebidas = async () => {

    const { PrismaClient } = require('@prisma/client')

    const prisma = new PrismaClient()


    let sql = `select tbl_produto.nome, tbl_produto.foto, tbl_produto.preco, tbl_produto.descricao, tbl_bebida.litragem,tbl_bebida.teor_alcoolico, tbl_produto.status_promocao, tbl_produto.status_favoritos, tbl_bebida.id from tbl_produto
    inner join tbl_bebida 
        on tbl_produto.id = tbl_bebida.id_produto;`

    const rsBebida = await prisma.$queryRawUnsafe(sql)

    if (rsBebida.length > 0) {
        return rsBebida
    } else{
        return false
    }
}

const selectAllPromocao = async () => {

    const { PrismaClient } = require('@prisma/client')

    const prisma = new PrismaClient()


    let sql = `select tbl_produto.nome, tbl_produto.foto, tbl_produto.preco, tbl_produto.descricao, tbl_tipoPizza.tipo, tbl_bebida.litragem, tbl_bebida.teor_alcoolico, tbl_produto.status_promocao, tbl_produto.status_favoritos, tbl_produto.id from tbl_produto
    left join tbl_pizza 
        on tbl_produto.id = tbl_pizza.id_produto
    left join tbl_bebida
        on tbl_produto.id = tbl_bebida.id_produto
    left join tbl_tipoPizza
        on tbl_produto.id = tbl_tipoPizza.id_produto where status_promocao = 1`

    const rspromo = await prisma.$queryRawUnsafe(sql)

    if (rspromo.length > 0) {
        return rspromo
    } else{
        return false
    }
}

const selectAllFavorito = async () => {

    const { PrismaClient } = require('@prisma/client')

    const prisma = new PrismaClient()


    let sql = `select tbl_produto.nome, tbl_produto.foto, tbl_produto.preco, tbl_produto.descricao, tbl_tipoPizza.tipo, tbl_bebida.litragem, tbl_bebida.teor_alcoolico, tbl_produto.status_promocao, tbl_produto.status_favoritos, tbl_produto.id from tbl_produto
    left join tbl_pizza 
        on tbl_produto.id = tbl_pizza.id_produto
    left join tbl_bebida
        on tbl_produto.id = tbl_bebida.id_produto
    left join tbl_tipoPizza
        on tbl_produto.id = tbl_tipoPizza.id_produto where status_favoritos = 1`

    const rsfav = await prisma.$queryRawUnsafe(sql)

    if (rsfav.length > 0) {
        return rsfav
    } else{
        return false
    }
}



const selectProdutoById = async (id) => {

    const { PrismaClient } = require('@prisma/client')

    const prisma = new PrismaClient()


    const sql = `select tbl_produto.nome, tbl_produto.foto, tbl_produto.preco, tbl_produto.descricao, tbl_tipoPizza.tipo, tbl_bebida.litragem, tbl_bebida.teor_alcoolico, tbl_produto.status_promocao, tbl_produto.status_favoritos, tbl_produto.id from tbl_produto
    left join tbl_pizza 
        on tbl_produto.id = tbl_pizza.id_produto
    left join tbl_bebida
        on tbl_produto.id = tbl_bebida.id_produto
    left join tbl_tipoPizza
        on tbl_produto.id = tbl_tipoPizza.id_produto where tbl_produto.id = ${id}`

 
    const result = await prisma.$queryRawUnsafe(sql)

    if(result){
        return result
    } else{
        return false
    }
}

const selectBebidaById = async (id) => {

    const { PrismaClient } = require('@prisma/client')

    const prisma = new PrismaClient()


    const sql = `select * from tbl_bebida where id = ${id}`

    const result = await prisma.$queryRawUnsafe(sql)

    if(result){
        return result
    } else{
        return false
    }
}






const selectLastIdProduto = async () => {

    const { PrismaClient } = require('@prisma/client')

    const prisma = new PrismaClient()

    let sql = `select id from tbl_produto order by id desc limit 1`
    const result = await prisma.$queryRawUnsafe(sql)

    if (result) {
        return result[0].id
    } else{
        return false
    }
}

const insertProduto = async (produto) => {
    try{

    const sql = `insert into tbl_produto(nome, foto, preco, descricao, status_promocao, status_favoritos) values('${produto.nome}', '${produto.foto}', '${produto.preco}', '${produto.descricao}','${produto.status_promocao}','${produto.status_favoritos}')`
    
    const result = await prisma.$executeRawUnsafe(sql)
    
    if (result) {
        return true
    }else{
        return false
     }

    }catch(error){
        return false
    }
}

const updateProduto = async (produto) => {
    try {
        
    const sql = `update tbl_produto set nome = '${produto.nome}', foto = '${produto.foto}', preco = '${produto.preco}', descricao = '${produto.descricao}', status_promocao = ${produto.status_promocao}, status_favoritos = ${produto.status_favoritos} where id = ${produto.id}`
       
    const result = await prisma.$executeRawUnsafe(sql)
        
    if(result){
        return true
    }else{
        return false
    }

    }catch (error) {
      return false
    }
}

const deleteProduto = async (id) => {
    try {    
    const sql = `delete from tbl_produto where id = ${id}`
        console.log(sql);
    const result = await prisma.$executeRawUnsafe(sql)
        
    if (result){
        return true
    }else{
        return false
    }

    }catch (error) {
        return false
    }
}

const insertPizza = async (pizza) => {
     try {
        
    const sql = `insert into tbl_pizza(descricao, id_produto) values(${pizza.descricao}, ${pizza.id_produto})`


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



const updatePizza = async (pizza) => {
    try {
        
    const sql = `update tbl_pizza set descricao = ${pizza.descricao}, id_produto = ${pizza.id_produto} where id = ${pizza.id_pizza}`

    const result = await prisma.$executeRawUnsafe(sql)

    if(result){
        return true
    }else{
        return false
    }

    }catch (error) {
        return false
    }
}

const insertBebida = async (bebida) => {
    try {
        
    const sql = `insert into tbl_bebida(litragem,teor_alcoolico, id_produto) values(${bebida.litragem},${bebida.teor_alcoolico}, ${bebida.id_produto})`
        
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

const updateBebida = async (bebida) => {
    try {
        
    const sql = `update tbl_bebida set litragem = ${bebida.litragem}, teor_alcoolico = ${bebida.teor_alcoolico} where id = ${bebida.id}`
 
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

module.exports = {
    selectAllPizzas,
    selectAllBebidas,
    selectLastIdProduto,
    selectAllProdutos,
    insertProduto,
    updateProduto,
    deleteProduto,
    insertPizza,
    updatePizza,
    insertBebida,
    updateBebida,
    selectProdutoById,
    selectAllPromocao,
    selectAllFavorito,
    selectBebidaById
   
}