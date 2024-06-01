const calculadora = require("../models/calculadora.js")

test("somar 2 + 2 deveria retornar 4", ()=>{
  const resultado = calculadora.somar(2,2)
  expect(resultado).toBe(4)
})


test("somar 10 + 10 deveria retornar 20", ()=>{
  const resultado = calculadora.somar(10,10)
  expect(resultado).toBe(20)
})

test("somar 'banana' + 10 deveria retornar 'Erro'", ()=>{
  const resultado = calculadora.somar("banana",10)
  expect(resultado).toBe('Erro')
})

// nao é meu

test("Teste com números inteiros pequenos", () => {
  const resultado = calculadora.somar(2, 2);
  expect(resultado).toBe(4);
});

test("Teste com números inteiros grandes", () => {
  const resultado = calculadora.somar(5500, 10258);
  expect(resultado).toBe(15758);
});

test("Teste com numeros decimais positivos", () => {
  const resultado = calculadora.somar(2.04, 12.753);
  expect(resultado).toBe(14.793);
});

test("Teste com decimais negativos", () => {
  const resultado = calculadora.somar(-75.891, -50.011);
  expect(resultado).toBe(-125.902);
});

test("Teste com nome + número", () => {
  const resultado = calculadora.somar("anderson", 100);
  expect(resultado).toBe("Erro");
});

test("Teste com numero + nome", () => {
  const resultado = calculadora.somar(555, "freitas");
  expect(resultado).toBe("Erro");
});

test("Teste com nomes", () => {
  const resultado = calculadora.somar("salada", "mista");
  expect(resultado).toBe("Erro");
});

test("Teste com espaços vazios", () => {
  const resultado = calculadora.somar("", "");
  expect(resultado).toBe("Erro");
});

test("Teste com booleanos", () => {
  const resultado = calculadora.somar(true, false);
  expect(resultado).toBe("Erro");
});