function showGauss() {
    document.getElementById("gaussContainer").style.display = "block";
    document.getElementById("seidelContainer").style.display = "none";
}

function showSeidel() {
    document.getElementById("gaussContainer").style.display = "none";
    document.getElementById("seidelContainer").style.display = "block";
}

// Eliminação de Gauss
let ordemGauss = 0;
let matrizGauss = [];

function criarMatrizGauss() {
    const ordemInput = document.getElementById("ordem-gauss");
    ordemGauss = parseInt(ordemInput.value);

    const matrizInputsDiv = document.getElementById("matrizInputsGauss");
    matrizInputsDiv.innerHTML = "";

    const title = document.createElement("p");
    title.textContent = "Coeficientes da matriz:";
    matrizInputsDiv.appendChild(title);

    for (let i = 0; i < ordemGauss; i++) {
        for (let j = 0; j < ordemGauss + 1; j++) {
            const input = document.createElement("input");
            input.type = "number";
            input.id = "input-" + i + "-" + j;

            const label = document.createElement("label");
            label.textContent = j === ordemGauss ? " = " : " x " + (j + 1) + ": ";
            label.appendChild(input);

            matrizInputsDiv.appendChild(label);
        }
        matrizInputsDiv.appendChild(document.createElement("br"));
    }
}


function calcularSolucaoGauss() {
    matrizGauss = [];

    for (let i = 0; i < ordemGauss; i++) {
        const linha = [];
        for (let j = 0; j < ordemGauss + 1; j++) {
            const input = document.getElementById("input-" + i + "-" + j);
            linha.push(parseFloat(input.value));
        }
        matrizGauss.push(linha);
    }

    const solucao = gauss(matrizGauss);

    const resultadoGaussDiv = document.getElementById("resultadoGauss");
    resultadoGaussDiv.innerHTML = "Solução: ";

    const table = document.createElement("table");

    for (let i = 0; i < solucao.length; i++) {
        const row = document.createElement("tr");

        const variable = document.createElement("p");
        variable.textContent = " x " + (i + 1) + ": ";
        row.appendChild(variable);

        const value = document.createElement("td");
        value.textContent = solucao[i];
        row.appendChild(value);

        table.appendChild(row);
    }

    resultadoGaussDiv.appendChild(table);
}


function gauss(matriz) {
    const n = matriz.length;

    for (let i = 0; i < n; i++) {
        let max = i;
        for (let j = i + 1; j < n; j++) {
            if (Math.abs(matriz[j][i]) > Math.abs(matriz[max][i])) {
                max = j;
            }
        }

        [matriz[i], matriz[max]] = [matriz[max], matriz[i]];

        for (let k = i + 1; k < n; k++) {
            const f = -matriz[k][i] / matriz[i][i];
            for (let j = i + 1; j <= n; j++) {
                matriz[k][j] += f * matriz[i][j];
            }
            matriz[k][i] = 0;
        }
    }

    const solucao = new Array(n);
    for (let i = n - 1; i >= 0; i--) {
        solucao[i] = matriz[i][n] / matriz[i][i];
        for (let k = i - 1; k >= 0; k--) {
            matriz[k][n] -= matriz[k][i] * solucao[i];
        }
    }

    return solucao;
}

// Gauss-Seidel
let ordemSeidel = 0;
let matrizASeidel = [];
let vetorBSeidel = [];
let epsilonSeidel = 0;
let maxIterationsSeidel = 0;

function createInputsSeidel() {
    const orderInput = document.getElementById("order-seidel");
    ordemSeidel = parseInt(orderInput.value);

    const inputsSeidelDiv = document.getElementById("inputsSeidel");
    const vectorBSeidelDiv = document.getElementById("vector-bSeidel");

    inputsSeidelDiv.innerHTML = "";
    vectorBSeidelDiv.innerHTML = "";

    const title = document.createElement("p");
    title.textContent = "Coeficientes da matriz:";
    inputsSeidelDiv.appendChild(title);

    for (let i = 0; i < ordemSeidel; i++) {
        for (let j = 0; j < ordemSeidel; j++) {
            const input = document.createElement("input");
            input.type = "number";
            input.id = "input-seidel-" + i + "-" + j;
            inputsSeidelDiv.appendChild(input);
        }
        inputsSeidelDiv.appendChild(document.createElement("br"));
    }

    const vectorBTitle = document.createElement("p");
    vectorBTitle.textContent = "Função independente B";
    inputsSeidelDiv.appendChild(vectorBTitle);

    for (let i = 0; i < ordemSeidel; i++) {
        const input = document.createElement("input");
        input.type = "number";
        input.id = "vector-b-seidel-" + i;
        inputsSeidelDiv.appendChild(input);
    }

    const convergenceTitle = document.createElement("p");
    convergenceTitle.textContent = "Critério de convergência:";
    inputsSeidelDiv.appendChild(convergenceTitle);

    const convergenceInput = document.createElement("input");
    convergenceInput.type = "number";
    convergenceInput.id = "epsilonSeidel";
    inputsSeidelDiv.appendChild(convergenceInput);

    const maxIterationsTitle = document.createElement("p");
    maxIterationsTitle.textContent = "Número máximo de iterações:";
    inputsSeidelDiv.appendChild(maxIterationsTitle);

    const maxIterationsInput = document.createElement("input");
    maxIterationsInput.type = "number";
    maxIterationsInput.id = "maxIterationsSeidel";
    inputsSeidelDiv.appendChild(maxIterationsInput);
}


function calculateSeidel() {
    matrizASeidel = [];
    vetorBSeidel = [];

    for (let i = 0; i < ordemSeidel; i++) {
        const linha = [];
        for (let j = 0; j < ordemSeidel; j++) {
            const input = document.getElementById("input-seidel-" + i + "-" + j);
            linha.push(parseFloat(input.value));
        }
        matrizASeidel.push(linha);
    }

    for (let i = 0; i < ordemSeidel; i++) {
        const input = document.getElementById("vector-b-seidel-" + i);
        vetorBSeidel.push(parseFloat(input.value));
    }

    epsilonSeidel = parseFloat(document.getElementById("epsilonSeidel").value);
    maxIterationsSeidel = parseInt(document.getElementById("maxIterationsSeidel").value);

    const solucaoSeidel = gaussSeidel(matrizASeidel, vetorBSeidel, epsilonSeidel, maxIterationsSeidel);

    const resultSeidelDiv = document.getElementById("resultSeidel");
    resultSeidelDiv.innerHTML = "Solução: ";

    const table = document.createElement("table");

    for (let i = 0; i < solucaoSeidel.length; i++) {
        const row = document.createElement("tr");

        const variable = document.createElement("p");
        variable.textContent = "x" + (i + 1);
        row.appendChild(variable);

        const value = document.createElement("td");
        value.textContent = solucaoSeidel[i];
        row.appendChild(value);

        table.appendChild(row);
    }

    resultSeidelDiv.appendChild(table);

}


function gaussSeidel(matrizA, vetorB, epsilon, maxIterations) {
    const n = matrizA.length;
    const x = new Array(n).fill(0);
    let iteration = 0;
    let error = epsilon + 1;

    while (error > epsilon && iteration < maxIterations) {
        error = 0;
        for (let i = 0; i < n; i++) {
            const sigma = matrizA[i].reduce((accumulator, currentValue, j) => {
                if (j !== i) {
                    return accumulator + currentValue * x[j];
                }
                return accumulator;
            }, 0);
            const temp = (vetorB[i] - sigma) / matrizA[i][i];
            error += Math.abs(temp - x[i]);
            x[i] = temp;
        }
        iteration++;

        if (error <= epsilon) {
            break;
        }
    }

    return x;
}