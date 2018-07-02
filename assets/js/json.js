fetch("assets/js/datos.js") 
.then(res => {
    return res.json();
})
.then(function(resultado){  
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
            		<i aria-hidden="true" class="fa fa-${element.icon}"></i>
            	</span>
        	</div> 
        	<figcaption class="col-sm-9">	
                <h3>${element.title}</h3>
                <p>${element.txt}</p>
        	</figcaption>`
        ; 
        var caja = document.createElement('figure');
        caja.classList.add("col-sm-4");
        caja.innerHTML = template;
        contenedor.appendChild(caja);
    });  
    var contenedor = document.querySelector("#soluciones > .container > .row"); 
    resultado.soluciones.forEach(element => { 
        var template = 
            `<div class="col-sm-3">
            	<span class="icon blue">
            		<i aria-hidden="true" class="fa fa-${element.icon}"></i>
            	</span>
        	</div> 
        	<figcaption class="col-sm-9">	
                <h3>${element.title}</h3>
                <p>${element.txt}</p>
        	</figcaption>`
        ; 
        var caja = document.createElement('figure');
        caja.classList.add("col-sm-4");
        caja.innerHTML = template;
        contenedor.appendChild(caja);
    });
    /* 
    var contenedor = document.querySelector("#tecnologia > .container > .swiper-container1 > .swiper-wrapper"); 
    resultado.tecnologia.forEach(element => { 
        var template = `<img src='${element.logo}' alt='${element.alt}'>`; 
        var caja = document.createElement('div');
        caja.classList.add("swiper-slide");
        caja.innerHTML = template;
        contenedor.appendChild(caja);
    }); */
/*
    var contenedor = document.querySelector("#clientes > .container > .swiper-container > .swiper-wrapper"); 
    resultado.clientes.forEach(element => { 
        var template = `<img src='${element.logo}' alt='${element.alt}' class='img-responsive'>`; 
        var caja = document.createElement('div');
        caja.classList.add("swiper-slide");
        caja.innerHTML = template;
        contenedor.appendChild(caja);
    }); 
*/
    var contenedor = document.querySelector(".footer > .container"); 
    resultado.rrss.forEach(element => { 
        var template = 
            `<a href='${element.link}'><i class='fa ${element.logo}'></i></a>`
        ; 
        var caja = document.createElement('nav');
        caja.classList.add("nav", "navbar-nav", "navbar-right");
        caja.innerHTML = template;
        contenedor.appendChild(caja);
    }); 
});  