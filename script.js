function getCumprimentoDoDia() {
    const now = new Date();
    const hour = now.getHours();

    if (hour >= 6 && hour < 12) {
        return "Bom dia";
    } else if (hour >= 12 && hour < 18) {
        return "Boa tarde";
    } else {
        return "Boa noite";
    }
}

function inputMessage() {
    const nomePessoa = prompt('Digite o nome da pessoa:').trim();
    const nomePet = prompt('Digite o nome do pet:').trim();
    const nomeVacina = prompt('Digite o nome da vacina:').trim();
    const cumprimentoDoDia = getCumprimentoDoDia();
    const inputMessage = `${cumprimentoDoDia}, ${nomePessoa}, estamos passando para lembrar da vacina ${nomeVacina} do seu animalzinho ${nomePet}.\n\nQualquer dúvida ficamos à disposição!`;
    return encodeURIComponent(inputMessage);
}

function sendMessages() {
    const textNumbers = document.getElementById('inputNumbers').value;
    const cellphoneNumbers = textNumbers.split('\n').map(number => number.trim()).filter(number => number);

    if (cellphoneNumbers.length === 0) {
        alert('Por favor, insira pelo menos um número de celular.');
        return;
    }

    const message = inputMessage().trim();
    if (!message) {
        alert("A mensagem deve conter ao menos um número!");
        return;
    }

    cellphoneNumbers.forEach(number => {
        const url = `https://wa.me/${number}?text=${message}`;
        window.open(url, '_blank');
    });
}
