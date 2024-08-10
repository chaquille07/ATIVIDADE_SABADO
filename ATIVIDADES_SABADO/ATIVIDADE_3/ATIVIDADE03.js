let preco_custo, porcentagem, preco_venda

preco_custo = parseFloat (prompt ("Digite o Preço de Custo do Produto: "))
porcentagem = parseFloat (prompt ("Digite a Porcentagem que voce quer Adicionar sob o Preço de Custo: "))

preco_venda = (preco_custo/100) * porcentagem + preco_custo

document.write (`O Valor que o Produto deve ser Vendido é de: R$ ${preco_venda.toFixed(2)} `)
