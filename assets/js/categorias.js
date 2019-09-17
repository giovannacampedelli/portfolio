document.addEventListener('DOMContentLoaded', function() {
  let params = coDesExtract()
  let value = params['key']

  let db = coDesConnect('https://avengers-2.firebaseio.com/')

  db.download('/', function(data) {
    console.log(data)

    /*
      NUNCA, JAMAIS, EM HIPÓTESE ALGUMA faça
      replace em múltiplas tags se alguma
      estiver dentro de outra! Veja o HTML
      e note que não é o caso das abaixo.

      É sério. Se fizer isso, você realmente
      vai se arrepender. Você foi avisado.
    */

    
    context = data['portfolio'][value]
    console.log(context)
    coDesReplace('.grupos', context)


    coDesReplace('.title_2', context)

    context = data

    context = data['portfolio'][value]
    coDesReplace('.caminho_item', context)

    coDesReplace('.link_', context)

    coDesReplace('title', context)

  })
})