document.addEventListener('DOMContentLoaded', function() {

	let params = coDesExtract()
	console.log(params)
	
	let db = coDesConnect('https://avengers-2.firebaseio.com/')


	/*   comando de substituicao  coDesReplace('.main', context) */


/*nao colocar nada depois dessa chave */
})

/*
{{#each bigfour}}
        <li>
          <p>
            <strong>Chave:</strong> {{@key}}
          </p>
          <p>
            <strong>Valor:</strong> {{this}}
          </p>
          <p>
            <strong>Campo "nome" do valor:</strong> {{this.nome}}
          </p>
          <p>
            <strong>Campo "numSlams" do valor:</strong> {{this.numSlams}}
          </p>
          */