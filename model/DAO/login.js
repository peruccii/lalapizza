const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()

const insertUser = async (user) => {

    try{

    const sql = `insert into tbl_login(usuario,senha) values('${user.usuario}',md5('${user.senha}'))`

    const result = await prisma.$executeRawUnsafe (sql);

    if (result) {
        return true;
    }else
        return false;


}catch (error) {
    return false;
    }
}

const selectUser = async () => {

    const sql = `select * from tbl_login`

    const dados = await prisma.$queryRawUnsafe(sql)

    if (dados.length > 0) {
        return dados
    } else{
        return false
    }
}

const selectUserLogin = async () => {

    const sql = `select * from tbl_login where usuario = 'zezinho' and senha = md5('1234')`
    console.log(sql);
    const dados = await prisma.$queryRawUnsafe(sql)

    if (dados.length > 0) {
        return dados
    } else{
        return false
    }
}

const deleteUser = async (id) => {
    try {

    let sql = `delete from tbl_login where id = '${id}'`;

    const result = await prisma.$executeRawUnsafe (sql);
    
    if (result) {
        return true;
    }else
        return false;
                                
    } catch (error) {
        return false;
    }                         
}

const selectUserById = async function (id) {


   const sql = `select * from tbl_login where id = '${id}'`;

//Criamos um objeto de tipo RecordSet (rsAlunos) para receber os dados de BD atraves do script SQL (select)
const rsUser = await prisma.$queryRawUnsafe(sql)

if (rsUser)
return rsUser;
else 
return false;
}

module.exports = {
    selectUser,
    insertUser,
    selectUserById,
    deleteUser,
    selectUserLogin
}