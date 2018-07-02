fetch("assets/js/datos.js").then(res => { return res.json(); }).then(function(resultado){  
	var contenedor = document.querySelector("#menu-principal >.nav");
	resultado.menu.forEach(element => { 
		var template = `<a href='${element.link}'>${element.txt}</a>`;
        var caja = document.createElement('li'); 
        caja.innerHTML = template;
        contenedor.appendChild(caja);
	}); 
    var contenedor = document.querySelector("#servicios > .container > .row"); 
    resultado.servicios.forEach(element => { 
        var template = 
            `<div class="col-sm-3">
            	<span class="icon blue">
            		<i aria-hidden="true" class="${element.icon}"></i>
            	</span>
        	</div> 
        	<figcaption class="col-sm-9">	
                <h3>${element.title}</h3>
                <p>${element.txt}</p>
        	</figcaption>`
        ; 
        var caja = document.createElement('figure');
        caja.classList.add("col-sm-6", "col-md-4");
        caja.innerHTML = template;
        contenedor.appendChild(caja);
    });  
    var contenedor = document.querySelector("#soluciones > .container > .row"); 
    resultado.soluciones.forEach(element => { 
        var template = 
            `<div class="col-sm-3">
            	<span class="icon blue">
            		<i aria-hidden="true" class="${element.icon}"></i>
            	</span>
        	</div> 
        	<figcaption class="col-sm-9">	
                <h3>${element.title}</h3>
                <p>${element.txt}</p>
        	</figcaption>`
        ; 
        var caja = document.createElement('figure');
        caja.classList.add("col-sm-6", "col-md-4");
        caja.innerHTML = template;
        contenedor.appendChild(caja);
    }); 
    var contenedor = document.querySelector(".footer nav ul"); 
    resultado.rrss.forEach(element => { 
        let template = `<a class='icon' href='${element.link}'><i class='${element.logo}'></i></a>`;  
        var caja = document.createElement('li'); 
        caja.innerHTML = template;
        contenedor.appendChild(caja);
    });  
});  