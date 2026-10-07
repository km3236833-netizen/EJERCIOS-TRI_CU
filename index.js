// Ejercicio 1: r = a + (b - c) * d + (e / f * g);
function ejercicio1() {
  let a = 2, b = 5, c = 3, d = 4, e = 8, f = 2, g = 3;
  let t1 = b - c;
  let t2 = t1 * d;
  let t3 = a + t2;
  let t4 = e / f;
  let t5 = t4 * g;
  let t6 = t3 + t5;
  let r = t6;
  return r;
}

// Ejercicio 2: x = ((m * n) / (p + q)) * (r * k);
function ejercicio2() {
  let m = 6, n = 4, p = 2, q = 4, r = 3, k = 2;
  let t1 = m * n;
  let t2 = p + q;
  let t3 = t1 / t2;
  let t4 = r * k;
  let t5 = t3 * t4;
  let x = t5;
  return x;
}

// Ejercicio 3: total = (a + b * c) * (d - e) - (f + g);
function ejercicio3() {
  let a = 5, b = 8, c = 78, d = 96, e = 14, f = 91, g = 23;
  let t1 = b * c;
  let t2 = a + t1;
  let t3 = d - e;
  let t4 = t2 * t3;
  let t5 = f + g;
  let t6 = t4 - t5;
  let total = t6;
  return total;
}

// Ejercicio 4: val = a * (b + (c / d)) - e * (f + g);
function ejercicio4() {
  let a = 3.1, b = 2.2, c = 8.5, d = 4.5, e = 2.8, f = 1.6, g = 4.5;
  let t1 = c / d;
  let t2 = b + t1;
  let t3 = a * t2;
  let t4 = f + g;
  let t5 = e * t4;
  let t6 = t3 - t5;
  let val = t6;
  return val;
}

// Ejercicio 5: z = (x + y / o) * r + ((a * b + k) / (c + d));
function ejercicio5() {
  let x = 19, y = 8.2, o = 4.9, r = 3.3, a = 2.7, b = 3.4, k = 2.8, c = 1.6, d = 3.7;
  let t1 = y / o;
  let t2 = x + t1;
  let t3 = t2 * r;
  let t4 = a * b;
  let t5 = t4 + k;
  let t6 = c + d;
  let t7 = t5 / t6;
  let t8 = t3 + t7;
  let z = t8;
  return z;
}

// Lista de ejercicios: expresión y función que calcula el resultado
const ejercicios = [
  { expresion: "r = a + (b - c) * d + (e / f * g);", calcular: ejercicio1, variable: "r" },
  { expresion: "x = ((m * n) / (p + q)) * (r * k);", calcular: ejercicio2, variable: "x" },
  { expresion: "total = (a + b * c) * (d - e) - (f + g);", calcular: ejercicio3, variable: "total" },
  { expresion: "val = a * (b + (c / d)) - e * (f + g);", calcular: ejercicio4, variable: "val" },
  { expresion: "z = (x + y / o) * r + ((a * b + k) / (c + d));", calcular: ejercicio5, variable: "z" }
];

// Mostrar en la página cada ejercicio con su resultado
const contenedor = document.getElementById("resultados");

ejercicios.forEach(function (ej, i) {
  const resultado = Math.round(ej.calcular() * 100) / 100;

  const titulo = document.createElement("h3");
  titulo.textContent = "Ejercicio " + (i + 1);

  const expresion = document.createElement("p");
  expresion.textContent = ej.expresion;

  const res = document.createElement("p");
  res.textContent = "Resultado: " + ej.variable + " = " + resultado;

  contenedor.appendChild(titulo);
  contenedor.appendChild(expresion);
  contenedor.appendChild(res);
});