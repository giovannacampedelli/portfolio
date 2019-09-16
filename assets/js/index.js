
document.addEventListener('DOMContentLoaded', function() {
  let db = coDesConnect('https://avengers-2.firebaseio.com/')

  db.download('/', function(data) {
  	console.log(data)
    coDesReplace('.section-menu', data)
  })
})
