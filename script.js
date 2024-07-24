document.addEventListener('DOMContentLoaded', () => {
    const terminalInput = document.getElementById('input');
    const outputDiv = document.getElementById('output');
    const commandLineDiv = document.getElementById('command-line');

    const email = 'corentincherville.fretful655@passinbox.com';
    const password = 'Kokocaca!14';
    const validSites = [
        'https://pornhub.com',
        'https://tukiff.com',
        'https://xhamster.com',
        'https://F1.tv',
        'https://bdsmxxx.com',
        'https://megaporn.com',
        'https://bellebite.com'
    ];

    let commandHistory = [];
    let historyIndex = -1;

    const welcomeMessage = "Bonjour Corentin Cherville, vous pouvez utiliser la commande \"help\" si vous êtes devenu trop con pour utiliser un terminal de commande.";

    const typeText = (text, index = 0) => {
        if (index < text.length) {
            outputDiv.innerHTML += text.charAt(index);
            setTimeout(() => typeText(text, index + 1), 50);
        } else {
            const newLine = document.createElement('div');
            outputDiv.appendChild(newLine);
            commandLineDiv.style.display = 'flex';
            terminalInput.focus();
        }
    };

    const printOutput = (text) => {
        const newLine = document.createElement('div');
        newLine.textContent = text;
        outputDiv.appendChild(newLine);
        outputDiv.scrollTop = outputDiv.scrollHeight;
    };

    const handleCommand = (command) => {
        const parts = command.split(' ');
        const mainCommand = parts[0];
        const args = parts.slice(1);

        if (mainCommand === 'nAccount' && args.length === 2 && args[0] === '-m' && args[1] === email) {
            validSites.sort(() => 0.5 - Math.random()).forEach(site => printOutput(site));
        } else if (mainCommand === 'check' && args.length === 5 && args[0] === 'F1.tv' && args[1] === '-m' && args[2] === email && args[3] === '-p') {
            const enteredPassword = args[4];
            if (enteredPassword === password) {
                printOutput('Valid');
            } else {
                printOutput('Invalid');
            }
        } else if (mainCommand === 'help') {
            printOutput('Commandes disponibles:');
            printOutput('nAccount -m [email] : Vérifie sur quels sites l\'adresse email spécifiée est inscrite.');
            printOutput('check [nomdusite] -m [email] -p [motdepasse] : Vérifie si le mot de passe est correct pour le site spécifié.');
        } else {
            printOutput('Invalid command or parameters.');
        }
    };

    terminalInput.addEventListener('keydown', (event) => {
        if (event.key === 'Enter') {
            const command = terminalInput.value;
            printOutput('> ' + command);
            handleCommand(command);
            commandHistory.push(command);
            historyIndex = commandHistory.length;
            terminalInput.value = '';
        } else if (event.key === 'ArrowUp') {
            if (historyIndex > 0) {
                historyIndex -= 1;
                terminalInput.value = commandHistory[historyIndex];
            }
        } else if (event.key === 'ArrowDown') {
            if (historyIndex < commandHistory.length - 1) {
                historyIndex += 1;
                terminalInput.value = commandHistory[historyIndex];
            } else {
                historyIndex = commandHistory.length;
                terminalInput.value = '';
            }
        }
    });

    typeText(welcomeMessage);
});
