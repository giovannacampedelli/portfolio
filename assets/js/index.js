	console.log(`oi`)
document.addEventListener('DOMContentLoaded', function() {
	
	let params = coDesExtract()
	console.log(params)

  	let db = coDesConnect('https://avengers-2.firebaseio.com/')
  	console.log(db)
  	db.download('/portfolio', function(data) {

	    for(let key in data) {
	      console.log(data[key])
	    }
	  })
})
