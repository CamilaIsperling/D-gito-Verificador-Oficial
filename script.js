document.getElementById('pisForm').addEventListener('submit', function(event) {
  event.preventDefault();

  // Remover pontuação e manter apenas dígitos
  let pis = document.getElementById('pisInput').value.replace(/\D/g, '');

  // Validar se o PIS/PASEP tem exatamente 12 dígitos
  if (pis.length !== 12 || !/^\d+$/.test(pis)) {
    alert('Por favor, insira exatamente 12 algarismos numéricos.');
    return;
  }

  let soma = 0;
  const pesos = [3, 2, 9, 8, 7, 6, 5, 4, 3, 2, 9, 8]; // números multiplicadores conforme a fórmula

  for (let i = 0; i < 12; i++) {
    soma += parseInt(pis.charAt(i)) * pesos[i];
  }

  let digitoVerificador = soma % 11;

  if (digitoVerificador < 2 || digitoVerificador === 10) {
    digitoVerificador = 0; // Se o resultado for menor que 2 ou igual a 10, o dígito verificador será 0
  } else {
    digitoVerificador = 11 - digitoVerificador; // Calculando o dígito verificador
  }

  document.getElementById('resultado').innerText = `O dígito verificador do PIS/PASEP é: ${digitoVerificador}`;
});
