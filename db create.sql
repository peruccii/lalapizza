create database db_la_pizza;
use db_la_pizza;
######################################################
create table tbl_produto(
id int not null auto_increment primary key,
nome varchar (80) not null,
foto varchar(500) not null,
preco varchar(10) not null,
status_promocao int,
status_favoritos int,
unique index(id)
);
													##
create table tbl_pizza(								##
id int not null auto_increment primary key,			##
descricao text not null,					##
id_produto int not null,							##
													##
constraint FK_produto_pizza							##
foreign key (id_produto)							##
	references tbl_produto (id),    				##
	unique index(id)								##
);													##
													##
create table tbl_bebida(							##
id int not null auto_increment primary key,			##
litragem double,									##
teor_alcoolico double,								##
id_produto int not null,

constraint FK_produto_bebida
foreign key (id_produto)
	references tbl_produto (id), 

unique index(id)
);
#####################################################
create table tbl_ingrediente(
id int not null auto_increment primary key,
acompanhamento varchar(150),
unique index(id)
);

create table tbl_pizza_ingrediente(					##
id int not null auto_increment primary key,			##
id_pizza int not null,								##
constraint FK_pizza_ingrediente						##
	foreign key (id_pizza)							##
	references tbl_pizza (id),						##
													##
id_ingrediente int not null,
constraint FK_ingrediente_pizza
	foreign key (id_ingrediente)
    references tbl_ingrediente (id),
unique index(id)
);
######################################################
create table tbl_login(
id int not null auto_increment primary key,
usuario varchar(70) not null,
senha varchar(70) not null,
unique index(id)										##
);														##
														##
create table tbl_servico(								##
id int not null auto_increment primary key,				##
foto varchar(500) not null,	
nome varchar(50) not null,
descricao varchar(155),
unique index(id)
);
######################################################
create table tbl_contato(
id int not null auto_increment primary key,
nome varchar(70) not null,
email varchar(256) not null,
numero varchar(20) not null,
telefone varchar(20) not null,
mensagem varchar(200),

id_ddd int not null,

constraint FK_ddd_contato
													##
foreign key (id_ddd)							    ##
	references tbl_dddr (id),					    ##
										
unique index(id)									##
);													##

########################################################