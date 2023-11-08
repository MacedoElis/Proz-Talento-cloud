def calculadora(num1 ,num2, operacao):
    if operacao == 1:
        return num1 + num2
    elif operacao == 2:
        return num1 - num2
    elif operacao == 3:
        return num1   * num2 
    elif operacao == 4:
        return num2 / num2   
    else:
        return 0


executar = True

while (executar== True):
    print("Qual operação voce deseja realizar?")
    print("1 : soma, 2: Subtraçao , 3: Multiplicação , 4 : Divisão , 0 : sair")
    operacao = int(input())
    if (operacao < 0) or (operacao > 4):
        print("Essa operacao não existe")
    elif (operacao == 0):  
        executar = False
    else:
        print("Insira o primeiro numero da operaçao")
        nun1 = int(input())
        print("Insira o segundo numero da operaçao")
        nun2 = int(input())
        resultado = calculadora(nun1, nun2, operacao)
        print("O resultado é :" , resultado)

    
# Utilizado estrutura de repeticão e operadores lógicos
#resultado = calculadora(4, 2 ,2) 
#print(resultado)    
     