use db_la_pizza;
#INSERTS

#################################################################################################################################################################################################################################################################################################################

insert into tbl_produto(nome,foto,preco,status_promocao,status_favoritos)
	values('Pizza de peperoni','https://assets.stickpng.com/images/580b57fcd9996e24bc43c1e1.png','R$27,99', null, null),
		  ('Pizza 4 queijo','https://www.imagensempng.com.br/wp-content/uploads/2020/12/002-2.png','R$32,99', null, null),
		  ('Pizza de calabresa','https://www.imagensempng.com.br/wp-content/uploads/2020/12/005-1.png','R$32,99', null, null),
		  ('Tulipa de Chopp','https://imagensemoldes.com.br/wp-content/uploads/2020/05/Tulipa-de-Chopp-PNG.png','R$8,50', null, null),
		  ('Coca-Cola zero','https://imagensemoldes.com.br/wp-content/uploads/2020/05/Copo-Descart%C3%A1vel-Coca-Cola-PNG.png','R$6,66', null, null);

################################################################################################################################################################################################################################################################################################################

insert into tbl_pizza(descricao, id_produto)
	values('A Pizza de pepperoni é uma variedade ítalo-americana apimentada do salame seco, feita de carne de porco e bovina, incluindo algumas vezes toucinho', 1 ),#colocar o id do produto aqui
		  ('A Pizza 4 Queijos é saborosa pois é coberta com os deliciosos queijos gorgonzola, parmesão, provolone e mussarela. A massa é fermentada de forma traducional e assada em forno de pedra, ficando no ponto certo: macia por dentro e crocante por fora!', 2 ), #colocar o id do produto aqui)
          ('Pizza Calabresa é especialmente preparada com recheio generoso de linguiça calabresa de primeira qualidade, queijo muçarela e orégano. A linguiça calabresa agrega um sabor único e levemente picante à pizza.', 3 ); #colocar o id do produto aqui)
          
###############################################################################################################################################################################################################################################################################################################

insert into tbl_bebida(litragem,teor_alcoolico,id_produto)
	values('600ml', '34.4%', 4), #colocar o id do produto aqui
		  ('500ml', 5); #colocar o id do produto aqui
          
###############################################################################################################################################################################################################################################################################################################
       
insert into tbl_ingrediente(acompanhamento)
	values('Queijo, oregano e pepperoni.'),									# Revisar esse pois esta confuso, fora que o que devo inserir na tabela tbl_pizza_ingrediente
		  ('Queijo, requeijão, oregano e parmesão ralado.'),
		  ('Queijo, calabresa e cebola, oregano.');
	
###############################################################################################################################################################################################################################################################################################################	
        
insert into tbl_servico(foto,nome,descricao)
	values('https://static.thenounproject.com/png/26575-200.png','Delivery','Seu pedido chegara em seu estabelecimento com os nossos entregadores.'),
		  ('https://cdn-icons-png.flaticon.com/512/6680/6680472.png','Drive Thru','Retira seu produto no proprio estabelecimento pelo drive thru.'),
		  ('https://cdn-icons-png.flaticon.com/512/2354/2354268.png','Servicos na loja','Retira seu produto no proprio estabelecimento onde o pedido foi efetuado.'),
		  ('https://cdn-icons-png.flaticon.com/512/2274/2274681.png','Entregas pelo drone','Seu pedido é enviado por um drone até seu local de entrega.');
          
###############################################################################################################################################################################################################################################################################################################

insert into tbl_login(usuario,senha)
	values('root','12345678');
    
###############################################################################################################################################################################################################################################################################################################

