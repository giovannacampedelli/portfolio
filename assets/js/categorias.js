document.addEventListener('DOMContentLoaded', function() {
  let params = coDesExtract()
  let value = params['key']

  let db = coDesConnect('https://avengers-2.firebaseio.com/')

  db.download('/', function(data) {
    console.log(data)

    coDesReplace('.app_menu', data)
    
    context = data['portfolio'][value]
    context["catid"] = value
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