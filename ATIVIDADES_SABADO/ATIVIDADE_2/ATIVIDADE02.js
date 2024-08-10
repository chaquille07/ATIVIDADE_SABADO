let valor, rendimento

valor = parseFloat (prompt ("Digite o Valor que você Deseja Depositar na sua Conta: "))

rendimento = (valor/100) * 0.7 + valor

document.write (`Após 1 Mês de Rendimento, o Valor Depositado + 0.7%  é: R$ ${rendimento.toFixed(2)}`)
