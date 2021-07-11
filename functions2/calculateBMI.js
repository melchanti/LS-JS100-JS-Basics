function calculateBMI(weight, height) {
	return (Math.round((height / ((weight / 100) ** 2)) * 100) / 100).toString();
}

console.log (calculateBMI(180, 80));