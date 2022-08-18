const nome = prompt("Qual ê o teu nome ?")
let player1 = parseInt(prompt(" Hello " + nome + " Você ê o Jogador 1 , Digite um número de Sorte? "))
let player2 = alert(" O Jogador 2 escolheu o número de Sorte : " + parseInt(Math.random() *2))



    if ( player1 === player2 ){

        alert('Eitar! vocês Empataram')
    
    }else{
    
       let lucky = parseInt(Math.random() *2) 
       alert('E o número de Sorte foi :' + lucky  )
    
       if (lucky  === 0 && player1 < player2 || lucky ===1 && player1 > player2 ){
            alert('Ganhou o ' + nome )
            document.write('Ganhou o ' + nome )
    
           } else{
               alert('Ganhou o Jogador 2')
               document.write('Ganhou o Jogador 2')
           }
           
    }


