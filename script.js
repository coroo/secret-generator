// Initialize Random HEX Color Code
const hexColorCode = [
	0,
	1,
	2,
	3,
	4,
	5,
	6,
	7,
	8,
	9,
	"a",
	"b",
	"c",
	"d",
	"e",
	"f"
];

// Initialize All Required DOM Elements
const mainSection = document.getElementById("mainSection");
const pickColor = document.getElementById("pickColor");
const pickPassword = document.getElementById("pickPassword");
const copyButton = document.getElementById("copyButton");

// Initialize the Random HEX Color Picker for 5 Length
// Initialize Password
pickPassword.addEventListener("input", () => {
	if (pickPassword.value.length==0) {
		pickColor.style.color = "#8e71ed";
		mainSection.style.backgroundColor = "#8e71ed";
	} else if (pickPassword.value.length%5==0) {
		let hexColorName = "#";

		for (let i = 0; i < 6; i++) {
			hexColorName += hexColorCode[getRandomArray()];
		}

		pickColor.style.color = hexColorName;
		mainSection.style.backgroundColor = hexColorName;
	}
	
	var hash= pickPassword.value;
	hash= Sha1.hash(pickPassword.value);
	pickColor.textContent = hash;
});

const getRandomArray = () => {
	return Math.floor(Math.random() * hexColorCode.length);
};

// Initialize Copy to Clipboard Button
copyButton.addEventListener("click", () => {
	const useRange = document.createRange();
	const useSelection = window.getSelection();

	useRange.selectNodeContents(pickColor);
	useSelection.removeAllRanges();
	useSelection.addRange(useRange);
	document.execCommand("copy");
});