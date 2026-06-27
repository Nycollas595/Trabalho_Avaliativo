function consultarLinha(){

    const linha = document.getElementById("linha").value;
    const resultado = document.getElementById("resultado");

    if(linha === ""){
        alert("Digite o número da linha!");
        return;
    }

    resultado.innerHTML = `
        <h3>Linha: ${linha}</h3>
        <p><strong>Itinerário:</strong> Via Barueri (Petrobras) e Osasco (Vila Yara)</p>
        <p><strong>Tarifa:</strong> R$ 6,45</p>
        <p><strong>Empresa:</strong> Anhanguera</p>
    `;
}