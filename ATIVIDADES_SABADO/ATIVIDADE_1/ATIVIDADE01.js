let real, dolar, conversao

real = parseFloat (prompt ("Digite o Valor em R$ que você tem disponível: "))
dolar = parseFloat (prompt ("Qual será o Valor da Cotação de R$ para US$? "))

conversao = real/ 5.51

document.write (`O Valor que você possui em R$ é: ${real.toFixed(2)}. Já o Valor você que você quer converter para US$ é: ${dolar.toFixed(2)}, que convertido é: US$ ${conversao.toFixed(2)} `)


