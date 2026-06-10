const unidades={1:8,2:11};
function mostrarUnidad(numero){
  const contenedor=document.getElementById('pageGrid');
  contenedor.innerHTML='';
  for(let i=1;i<=unidades[numero];i++){
    const card=document.createElement('article');
    card.className='page-card';
    card.innerHTML=`<img src="assets/pages/unidad${numero}_p${i}.jpg" alt="Unidad ${numero} - página ${i}"><p>Unidad ${numero} - Página ${i}</p>`;
    contenedor.appendChild(card);
  }
  document.getElementById('visor').scrollIntoView({behavior:'smooth'});
}
document.addEventListener('DOMContentLoaded',()=>mostrarUnidad(1));