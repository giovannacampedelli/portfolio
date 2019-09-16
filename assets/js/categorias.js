document.addEventListener('DOMContentLoaded', function() {
  let params = coDesExtract()
  let value = params['key']

  let db = coDesConnect('https://avengers-2.firebaseio.com/')

  db.download('/', function(data) {


    context = data['projetos'][value]
    coDesReplace('.grupos', context)

    context = data
    coDesReplace('.grupos', context)

    context = data['biblioteca'][value]
    coDesReplace('.call', context)

    context = data['biblioteca'][value]
    coDesReplace('.book-list', context)
  })
})