let str = prompt("Введите нмер карты")
		let lastNumbers = str.slice(-4)
		let firstNumbers = str.slice(0, -4);
		let others = "*";
		let otherStartNumbers = others.repeat(firstNumbers.length);
		let result = otherStartNumbers + lastNumbers;
		alert("Номер вашей карты: " + result)