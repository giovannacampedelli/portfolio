document.addEventListener('DOMContentLoaded', function() {
  let params = coDesExtract()
  let value1= params['key']
  let value2 = params["chave"]

  let db = coDesConnect('https://avengers-2.firebaseio.com/')

  db.download('/', function(data) {
    
    context = data['portfolio'][value1]['projetos'][value2]
    coDesReplace('.vazio', context)


    // coDesReplace('.title_2', context)

  })
})