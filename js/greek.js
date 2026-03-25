/* ---------- DATOS DEL MENÚ ---------- */
const categories = [
  {id:'entres',     name:'Entrantes'},
  {id:'ensaladas',  name:'Ensaladas / Green'},
  {id:'souvlakis',  name:'Souvlakis'},
  {id:'principales',name:'Platos Principales / Carnes'},
  {id:'pastas',     name:'Pastas'},
  {id:'risottos',   name:'Risottos'},
  {id:'seafood',    name:'Seafood'},
  {id: 'congelados',  name:'Productos Congelados'},
];

const items = [
/* -------------- ENTRANTES -------------- */
{id:'hummus',     name:'Hummus',                desc:'Garbanzos procesados acompañados de pan pita.',                                                  price:1200, cat:'entres', img:'fotos/hummus.jpg'},
{id:'tzatziki2',   name:'Tzatziki',              desc:'Yogurt griego, pepino y hierbabuena acompañados de pan pita',                                   price:1000, cat:'entres', img:'fotos/tzatziki.jpg'},
{id:'melitz',      name:'Melitzanozalata',       desc:'Dip de berenjena acompañados de pan pita.',                                                     price:1200, cat:'entres', img:'fotos/melitzano.jpg'},
{id:'tyrop',       name:'Tyropitakias',          desc:'Empanadas de Queso Feta.',                                                                      price:1000, cat:'entres', img:'fotos/tyropitakias.jpg'},
{id:'sagan',       name:'Saganaki',              desc:'Queso Feta frito con miel.',                                                                    price:1300, cat:'entres', img:'fotos/saganki.jpg'},
{id:'griegoPobre', name:'El Griego Pobre',       desc:'Croquetas de arroz, espinaca y queso azul',                                                     price:1300, cat:'entres', img:'fotos/griegopobre.jpg'},
{id:'papas',       name:'Papas Fritas',          desc:'Clásicas papas doradas.',                                                                       price:900, cat:'entres', img:'fotos/papas_fritas.jpg'},
{id:'papasFeta',   name:'Papas Fritas con Feta', desc:'Papas fritas cubiertas con queso feta y orégano.',                                              price:1300, cat:'entres', img:'fotos/papasfeta.jpg'},
{id:'aceitunas',   name:'Aceitunas Marinadas',   desc:'Aceitunas con aceite de oliva.',                                                                price:750, cat:'entres', img:'fotos/aceitunasmarinada.jpg'},
{id:'pikilia',     name:'Pikilia',               desc:'Hummus, Tzatziki, Melitzanozalata, Queso Feta y Aceitunas (para dos personas)',                 price:3600, cat:'entres', img:'fotos/pikilia.jpg'},
{id:'keftedes',    name:'Keftedes',              desc:'Albóndigas de carne especiadas',            price:1200, cat:'entres', img:'fotos/keftedes.jpg'},
{id:'halloumi',    name:'Queso Halloumi Grill',  desc:'Queso halloumi a la plancha.',             price:3500, cat:'entres', img:'fotos/halloumi_grill.jpg'},

/* -------------- ENSALADAS -------------- */
{id:'ensaladaG',   name:'Ensalada Griega',       desc:'Mix de vegetales con aceitunas y queso feta',             price:1750, cat:'ensaladas', img:'fotos/ensaladagriega.jpg'},
{id:'imam',        name:'Imam',                  desc:'Berenjena asada rellena de vegetales',          price:2000, cat:'ensaladas', img:'fotos/imam.jpg'},
{id:'musa',        name:'Musaka',                desc:'Láminas de berenjena, papa, bechamel y queso',                     price:2500, cat:'ensaladas', img:'fotos/musaka.jpg'},
{id:'verdeHall',   name:'Ensalada Verde Halloumi',desc:'Mix de hojas verdes y halloumi grill.',   price:3000, cat:'ensaladas', img:'fotos/ensalada_verde_halloumi.jpg'},

/* -------------- SOUVLAKIS -------------- */
{id:'sCerdo',      name:'Souvlaki de Cerdo',     desc:'Carne de cerdo con vegetales y pan pita.',                      price:2500, cat:'souvlakis', img:'fotos/souvlakicerdo.jpg'},
{id:'sPechuga',    name:'Souvlaki de Pechuga',   desc:'Pechuga de pollo con vegetales y pan pita. }.',              price:2200, cat:'souvlakis', img:'fotos/souvlakipollo.jpg'},
{id:'sRes',        name:'Souvlaki de Res',       desc:'Carne de Res con vegetales y pan pita.',                       price:2800, cat:'souvlakis', img:'fotos/souvlakires.jpg'},
{id:'sFeta',       name:'Souvlaki de Queso Feta',desc:'Queso Feta con vegetales y pan pita.',                 price:2500, cat:'souvlakis', img:'fotos/souv_feta.jpg'},
{id:'sVegano',     name:'Souvlaki Vegano',       desc:'Vegetales y pan pita.',                 price:2000, cat:'souvlakis', img:'fotos/souvlakivegano.jpg'},

/* -------------- PLATOS PRINCIPALES -------------- */
{id:'solomillo',   name:'Solomillo de Cerdo',    desc:'Tierno solomillo en salsa de mostaza y miel.',                price:3600, cat:'principales', img:'fotos/solomillocerdo.jpg'},
{id:'polloLimon',  name:'Pollo al Limón',        desc:'Pollo a la parilla con salsa a base de limon.',             price:3500, cat:'principales', img:'fotos/pollolimon.jpg'},
{id:'entrecot',    name:'Entrecot de Res',       desc:'Entrecot a la parrilla con mantequilla de hierbas.',          price:5500,cat:'principales', img:'fotos/entrecot.jpg'},

/* -------------- PASTAS -------------- */
{id:'pastitsio',   name:'Pastitsio',             desc:'Láminas de pasta, carne y salsa bechamel.',                  price:2200, cat:'pastas', img:'fotos/pastisio.jpg'},
{id:'medPasta',    name:'Pasta Mediterránea',    desc:'Pasta con aceitunas, vegetales, aceite de oliva y queso feta.',    price:3000, cat:'pastas', img:'fotos/pastamedite.jpg'},
{id:'camPasta',    name:'Pasta de Camarones',    desc:'Pasta de camarones con tomate',          price:3200, cat:'pastas', img:'fotos/pastacamaron.jpg'},

/* -------------- RISOTTOS -------------- */
{id:'risPulpo',    name:'Risotto de Pulpo',      desc:'Arroz cremoso con pulpo ',          price:3700, cat:'risottos', img:'fotos/ris_pulpo.jpg'},
{id:'risMar',      name:'Risotto Frutos del Mar',desc:'Arroz cremoso con mezcla de mariscos.',             price:4000,cat:'risottos', img:'fotos/rissottofrutosmar.jpg'},
{id:'risYog',      name:'Risotto Yogurt Griego', desc:'Arroz cremoso con yogurt griego.',           price:3000, cat:'risottos', img:'fotos/rissottoyogurt.jpg'},
{id:'risSeta',     name:'Risotto Setas y Trufas',desc:'Arroz cremoso con pasta de setas y trufas',       price:4000, cat:'risottos', img:'fotos/ris_setas.jpg'},

/* -------------- SEAFOOD -------------- */
{id:'sagMar',      name:'Saganaki de Frutos del Mar',desc:'Langosta, camarones y pulpo con queso feta, salsa de tomate y pan pita.',              price:3500,cat:'seafood', img:'fotos/saganakifrutos.jpg'},
{id:'sagCam',      name:'Saganaki de Camarón/Langosta',   desc:'Langosta o camarones  salsa de tomate y pan pita',                price:3000,cat:'seafood', img:'fotos/saganakilangosta.jpg'},
{id:'pulpoGrill',  name:'Pulpo al Grill',        desc:'Pulpo tierno a la parrilla.',            price:4200,cat:'seafood', img:'fotos/pulpo_grill.jpg'},
{id:'filePesc',    name:'Filete de Pescado',     desc:'Filete del día a la plancha con limón y hierbas.',            price:3200, cat:'seafood', img:'fotos/filete_pesc.jpg'},

/* -------------- CONGELADOS ------------*/

]

/* ---------- CARRITO ---------- */
let cart = [];

/* ---------- RENDER NAVEGACIÓN ---------- */
const menuNav = document.getElementById('menuNav');
if (menuNav) {
  categories.forEach(c => {
    const btn = document.createElement('button');
    btn.textContent = c.name;
    btn.dataset.cat = c.id;
    btn.addEventListener('click', () => scrollToCat(c.id));
    menuNav.appendChild(btn);
  });
}

/* ---------- RENDER PLATOS ---------- */
const platosSection = document.getElementById('platos');
if (platosSection) {
  categories.forEach(c => {
    const catDiv = document.createElement('div');
    catDiv.className = 'category';
    catDiv.id = c.id;
    catDiv.innerHTML = `<h2>${c.name}</h2><div class="items"></div>`;
    const itemsCat = items.filter(i => i.cat === c.id);
    itemsCat.forEach(p => catDiv.querySelector('.items').appendChild(createDishCard(p)));
    platosSection.appendChild(catDiv);
  });
}

function createDishCard(p) {
  const card = document.createElement('div');
  card.className = 'dish-card';
  card.innerHTML = `
    <img src="${p.img}" alt="${p.name}">
    <div class="dish-body">
      <h4>${p.name}</h4>
      <p>${p.desc}</p>
      <div class="dish-foot">
        <span class="price">$${p.price.toFixed(2)}</span>
        <button class="addBtn" onclick="addCart('${p.id}')">Añadir</button>
      </div>
    </div>`;
  return card;
}

function scrollToCat(id) {
  document.getElementById(id).scrollIntoView({behavior: 'smooth'});
  // marca activo
  document.querySelectorAll('.menu-nav button').forEach(b => b.classList.toggle('active', b.dataset.cat === id));
}

/* ---------- CARRITO ---------- */
function addCart(id) {
  const product = items.find(i => i.id === id);
  const inCart = cart.find(i => i.id === id);
  if (inCart) inCart.qty++; else cart.push({...product, qty: 1});
  renderCart();
}

function renderCart() {
  const list = document.getElementById('cartList');
  const totalEl = document.getElementById('cartTotal');
  list.innerHTML = '';
  let total = 0;
  cart.forEach(i => {
    total += i.price * i.qty;
    const li = document.createElement('li');
    li.innerHTML = `
      <span>${i.name} x${i.qty}</span>
      <span>
        $${(i.price * i.qty).toFixed(2)}
        <button onclick="removeCart('${i.id}')" style="margin-left:6px;background:none;border:none;color:red;cursor:pointer;">✖</button>
      </span>`;
    list.appendChild(li);
  });
  totalEl.textContent = `Total: $${total.toFixed(2)}`;
}

function removeCart(id) {
  cart = cart.filter(i => i.id !== id);
  renderCart();
}

/* ---------- WHATSAPP ---------- */
const waBtn = document.getElementById('waBtn');
if (waBtn) {
  waBtn.addEventListener('click', () => {
    if (!cart.length) return alert('Tu carrito está vacío.');
    const tel = '5354289596'; // ← cambia por tu número
    let text = 'Hola MYTHOS, quiero hacer el siguiente pedido:%0A%0A';
    let total = 0;
    cart.forEach(i => {
      text += `• ${i.name} (x${i.qty}) = $${(i.price * i.qty).toFixed(2)}%0A`;
      total += i.price * i.qty;
    });
    text += `%0A*Total: $${total.toFixed(2)}*%0A`;
    text += '*Por favor enviar direccion para costearle el delivery*%0A';
    text += '*Gracias%0A*'
    window.open(`https://wa.me/${tel}?text=${text}`, '_blank');
    
  });
}