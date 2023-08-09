//resetResults()
describe('resetResults', () => {
    it('deve redefinir a exibição e o conteúdo dos elementos de resultado', () => {
      // Simular elementos do DOM
      const elementoResultado = document.createElement('div');
      elementoResultado.id = 'resultado';
      const elementoPassosMatriz = document.createElement('div');
      elementoPassosMatriz.id = 'passos-matriz';
      const elementoMatrizL = document.createElement('div');
      elementoMatrizL.id = 'matriz-l';
      const elementoMatrizU = document.createElement('div');
      elementoMatrizU.id = 'matriz-u';
      const elementoMatrizP = document.createElement('div');
      elementoMatrizP.id = 'matriz-p';
      const elementoSolucao = document.createElement('div');
      elementoSolucao.id = 'solucao';
  
      // Anexar os elementos ao corpo do documento
      document.body.appendChild(elementoResultado);
      document.body.appendChild(elementoPassosMatriz);
      document.body.appendChild(elementoMatrizL);
      document.body.appendChild(elementoMatrizU);
      document.body.appendChild(elementoMatrizP);
      document.body.appendChild(elementoSolucao);
  
      // Chamar a função para redefinir os resultados
      resetResults();
  
      // Verificar as mudanças esperadas
      expect(elementoResultado.style.display).toBe('none');
      expect(elementoPassosMatriz.innerHTML).toBe('');
      expect(elementoMatrizL.innerHTML).toBe('');
      expect(elementoMatrizU.innerHTML).toBe('');
      expect(elementoMatrizP.innerHTML).toBe('');
      expect(elementoSolucao.innerHTML).toBe('');
    });
  });

// clearPage
describe('clearPage', () => {
    it('deve redefinir a exibição e o conteúdo de todos os elementos de resultado e entrada', () => {
      // Simular elementos do DOM
      const elementoMatrizInput = document.createElement('div');
      elementoMatrizInput.id = 'entrada-matriz';
      const elementoResultado = document.createElement('div');
      elementoResultado.id = 'resultado';
      const elementoPassosMatriz = document.createElement('div');
      elementoPassosMatriz.id = 'passos-matriz';
      const elementoMatrizL = document.createElement('div');
      elementoMatrizL.id = 'matriz-l';
      const elementoMatrizU = document.createElement('div');
      elementoMatrizU.id = 'matriz-u';
      const elementoMatrizP = document.createElement('div');
      elementoMatrizP.id = 'matriz-p';
      const elementoSolucao = document.createElement('div');
      elementoSolucao.id = 'solucao';
  
      // Anexar os elementos ao corpo do documento
      document.body.appendChild(elementoMatrizInput);
      document.body.appendChild(elementoResultado);
      document.body.appendChild(elementoPassosMatriz);
      document.body.appendChild(elementoMatrizL);
      document.body.appendChild(elementoMatrizU);
      document.body.appendChild(elementoMatrizP);
      document.body.appendChild(elementoSolucao);
  
      // Chamar a função para limpar a página
      clearPage();
  
      // Verificar as mudanças esperadas
      expect(elementoMatrizInput.style.display).toBe('none');
      expect(elementoResultado.style.display).toBe('none');
      expect(elementoPassosMatriz.innerHTML).toBe('');
      expect(elementoMatrizL.innerHTML).toBe('');
      expect(elementoMatrizU.innerHTML).toBe('');
      expect(elementoMatrizP.innerHTML).toBe('');
      expect(elementoSolucao.innerHTML).toBe('');
    });
  });

// createMatrixInput(numRows, numColumns, matrixId)
describe('createMatrixInput', () => {
    it('deve criar uma tabela de entrada de matriz com o número dado de linhas e colunas', () => {
      // Simular o elemento do DOM para entrada da matriz
      const tabelaMatriz = document.createElement('table');
      tabelaMatriz.id = 'matriz-a';
  
      // Anexar o elemento ao corpo do documento
      document.body.appendChild(tabelaMatriz);
  
      // Chamar a função para criar uma entrada de matriz
      createMatrixInput(3, 3, 'matriz-a');
  
      // Verificar as mudanças esperadas
      expect(tabelaMatriz.innerHTML).toContain('<tr><td><input></td><td><input></td><td><input></td></tr>');
      expect(tabelaMatriz.innerHTML).toContain('<tr><td><input></td><td><input></td><td><input></td></tr>');
      expect(tabelaMatriz.innerHTML).toContain('<tr><td><input></td><td><input></td><td><input></td></tr>');
      expect(tabelaMatriz.style.display).toBe('block');
    });
  });

// getMatrixInput(matrixId)
describe('getMatrixInput', () => {
    it('deve retornar os dados da matriz da tabela de entrada com o matrixId dado', () => {
      // Simular o elemento do DOM para entrada da matriz
      const tabelaMatriz = document.createElement('table');
      tabelaMatriz.id = 'matriz-a';
      const linha1 = document.createElement('tr');
      linha1.innerHTML = '<td><input value="1"></td><td><input value="2"></td>';
      const linha2 = document.createElement('tr');
      linha2.innerHTML = '<td><input value="3"></td><td><input value="4"></td>';
      tabelaMatriz.appendChild(linha1);
      tabelaMatriz.appendChild(linha2);
  
      // Anexar o elemento ao corpo do documento
      document.body.appendChild(tabelaMatriz);
  
      // Chamar a função para obter a entrada da matriz
      const matriz = getMatrixInput('matriz-a');
  
      // Verificar os dados da matriz esperados
      expect(matriz).toEqual([[1, 2], [3, 4]]);
    });
  
    it('deve retornar uma matriz vazia quando a tabela de entrada não for encontrada', () => {
      // Chamar a função para obter a entrada da matriz
      const matriz = getMatrixInput('matriz-inexistente');
  
      // Verificar o resultado esperado
      expect(matriz).toEqual([]);
    });
  
    it('deve retornar uma matriz vazia quando os valores de entrada não forem números válidos', () => {
      // Simular o elemento do DOM para entrada da matriz
      const tabelaMatriz = document.createElement('table');
      tabelaMatriz.id = 'matriz-a';
      const linha = document.createElement('tr');
      linha.innerHTML = '<td><input value="1"></td><td><input value="abc"></td>';
      tabelaMatriz.appendChild(linha);
  
      // Anexar o elemento ao corpo do documento
      document.body.appendChild(tabelaMatriz);
  
      // Chamar a função para obter a entrada da matriz
      const matriz = getMatrixInput('matriz-a');
  
      // Verificar o resultado esperado
      expect(matriz).toEqual([]);
    });
  });
  

  