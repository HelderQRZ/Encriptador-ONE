// O conteúdo abaixo não afetou o programa
// const textArea = document.getElementById("inputText");
// const message = document.getElementById("outputText");

// Criptografar

function btnEncrypt() {
	const textEncrypted = encrypt(document.getElementById("inputText").value);
	document.getElementById("outputText").value = textEncrypted;
	document.getElementById("inputText").value = "";
}

function encrypt(stringEncrypted) {
	// Matriz com os códigos de criptografia e descriptografia
	let arrayCode = [["e" , "enter"] , ["i" , "imes"] , ["a" , "ai"] , ["o" , "ober"] , ["u" , "ufat"]];
	stringEncrypted = stringEncrypted.toLowerCase();

	// Condicional de substituição da criptografia
	for (let i = 0; i < arrayCode.length; i++) {
		if(stringEncrypted.includes(arrayCode[i][0])) {
			stringEncrypted = stringEncrypted.replaceAll(arrayCode[i][0], arrayCode[i][1]);
		}
	}

	return stringEncrypted
}


//Descriptografar

function btnUncrypt() {
	const textUncrypted = Uncrypt(document.getElementById("inputText").value);
	document.getElementById("outputText").value = textUncrypted;
	document.getElementById("inputText").value = "";
}

function Uncrypt(stringUncrypted) {
	// Matriz com os códigos de criptografia e descriptografia
	let arrayCode = [["e" , "enter"] , ["i" , "imes"] , ["a" , "ai"] , ["o" , "ober"] , ["u" , "ufat"]];
	stringUncrypted = stringUncrypted.toLowerCase();

	// Condicional de substituição da descriptografia
	for (let i = 0; i < arrayCode.length; i++) {
		if(stringUncrypted.includes(arrayCode[i][1])) {
			stringUncrypted = stringUncrypted.replaceAll(arrayCode[i][1], arrayCode[i][0]);
		}
	}

	return stringUncrypted
}

// Botão Copiar

function btnCopy() {
	const output = document.getElementById("outputText");
	output.select();
	document.execCommand('cut');
}