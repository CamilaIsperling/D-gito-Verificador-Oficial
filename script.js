document.getElementById('pisForm').addEventListener('submit', function(event) {
  event.preventDefault();

  const pis = document.getElementById('pisInput').value;

  if (pis.length !== 10 || !/^\d+$/.test(pis)) {
    alert('Por favor, insira exatamente 10 algarismos numéricos.');
    return;
  }

  let soma = 0;
  const pesos = [3, 2, 9, 8, 7, 6, 5, 4, 3, 2]; // numeros multiplicadores conforme a formula

  for (let i = 0; i < 10; i++) {
    soma += parseInt(pis.charAt(i)) * pesos[i];
  }

  let digitoVerificador = soma % 11;

  if (digitoVerificador < 2 || digitoVerificador === 10) {
    digitoVerificador = 0; // Se o resultado for menor que 2 ou igual a 10, o digito verificador sera 0
  } else {
    digitoVerificador = 11 - digitoVerificador; // Calculando o dígito verificador
  }

  document.getElementById('resultado').innerText = `O dígito verificador do PIS/PASEP é: ${digitoVerificador}`;
});
