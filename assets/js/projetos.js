document.addEventListener('DOMContentLoaded', function() {
  let params = coDesExtract()
  let value1= params['key']
  let value2 = params["chave"]

  let db = coDesConnect('https://avengers-2.firebaseio.com/')


  db.download('/', function(data) {
  	coDesReplace('.app_menu', data)

    
    
    context = data['portfolio'][value1]['projetos'][value2]
    console.log(context)

    coDesReplace('.vazio', context)
    coDesReplace('.caminho_item', context)
    coDesReplace('.link_', context)
    coDesReplace('title', context)



    // coDesReplace('.title_2', context)

  })
})