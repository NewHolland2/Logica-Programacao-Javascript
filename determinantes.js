// Função para calcular o determinante de uma matriz 3x3
function calcularDeterminante(matriz) {
    if (matriz.length !== 3 || matriz[0].length !== 3) {
      console.error("A matriz fornecida não é uma matriz 3x3.");
      return;
    }
  
    const det =
      matriz[0][0] * (matriz[1][1] * matriz[2][2] - matriz[2][1] * matriz[1][2]) -
      matriz[0][1] * (matriz[1][0] * matriz[2][2] - matriz[2][0] * matriz[1][2]) +
      matriz[0][2] * (matriz[1][0] * matriz[2][1] - matriz[2][0] * matriz[1][1]);
  
    return det;
  }
  
  // Exemplo de uso
  const matrizExemplo = [
    [2, 3, 1],
    [4, 5, 6],
    [7, 8, 9]
  ];
  
  const determinante = calcularDeterminante(matrizExemplo);
  console.log("Determinante:", determinante);