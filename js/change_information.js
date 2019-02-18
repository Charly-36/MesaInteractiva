function cambia(boton){
 
     var color=boton.name;
        document.getElementById("prueba").style.background=color;
}

function cambia_info(boton){
	var menu = document.getElementById('contenido');
	if(boton.name=='camera'){
		menu.className='borde-on';
	}
	if(boton.name=='connection'){
		menu.className='borde-off';
	}
	if(boton.name=='purchase'){
		menu.className='borde-on1';
	}
	if(boton.name=='system'){
		menu.className='borde-off2';
	}
}