async function getInfo (){
	let resultado
	let aprobados = document.querySelector(".num-aprobados")
	let desaprobados = document.querySelector(".num-desaprobados")

	try {
		resultado = await axios ('info2.txt');
			
		aprobados.textContent = resultado.data.aprobados;
		desaprobados.textContent = resultado.data.desaprobados;
	} catch (e) {
		aprobados.textContent = "No encontrado";
		desaprobados.textContent = "No encontrado";
	}
};

document.getElementById("getInfo").addEventListener('click', getInfo)
