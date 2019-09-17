document.addEventListener('DOMContentLoaded', function() {
  let params = coDesExtract()
  let value = params['key']
  let value2 = params["chave"]

  let db = coDesConnect('https://avengers-2.firebaseio.com/')

  db.download('/', function(data) {
    
    context = data['portfolio'][value]
    // console.log(context)
    // coDesReplace('.grupos', context)


    // coDesReplace('.title_2', context)

    // context = data

    // context = data['portfolio'][value]
    // coDesReplace('.caminho_item', context)

    // coDesReplace('.link_', context)

    // coDesReplace('title', context)

  })
})