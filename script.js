let score = 0;
let clickValue = 0.1;
let upgrades = [
    {name: "Trade Tapes", clickIncrease: 0.1, cost: 5 },
    {name: "Lot Grilled Cheese", clickIncrease: 0.3, cost: 10 },
    {name: "Halley's Meat Balls", clickIncrease: 0.5, cost: 25 },
    {name: "Call the Opener", clickIncrease: 1, cost: 75},
    {name: "Travel Package", clickIncrease: 1.5, cost: 250},
    {name: "Get a Harpua", clickIncrease: 2, cost: 750},
    {name: "Attend Festival", clickIncrease: 4, cost: 2000},
    {name: "Get Gamehendge Set", clickIncrease: 10, cost: 10000}
];

const scoreDisplay = document.getElementById('score');
const clickButton = document.getElementById('clickButton');
const upgradesContainer = document.getElementById('upgrades');
const showsPerClickDisplay = document.getElementById('showsPerClick'); // Moved it outside of the forEach loop

clickButton.addEventListener('click', () => {
    score += clickValue;
    scoreDisplay.textContent = score.toFixed(2);
});

upgrades.forEach((upgrade, index) => {
    const upgradeButton = document.createElement('button');
    upgradeButton.innerHTML = `<h3>${upgrade.name}</h3><br><strong>Cost:</strong> ${upgrade.cost.toFixed(2)} shows<br>(+${upgrade.clickIncrease} Shows/click)`;

    upgradeButton.addEventListener('click', () => {
        if (score.toFixed(1) >= upgrade.cost) {
            score -= Math.abs(upgrade.cost);
            clickValue += upgrade.clickIncrease;
            scoreDisplay.textContent = Math.abs(score.toFixed(1));
            upgrade.cost *= 1.5; // Increase upgrade cost for next upgrade
            upgradeButton.innerHTML = `<h3>${upgrade.name}</h3><br><strong>Cost:</strong> ${upgrade.cost.toFixed(2)} shows<br>(+${upgrade.clickIncrease} Shows/click)`;
            showsPerClickDisplay.textContent = clickValue.toFixed(2); // Update shows per click display
        } else {
            alert('Not enough points to upgrade!');
        }
    });

    upgradesContainer.appendChild(upgradeButton);
});

showsPerClickDisplay.textContent = clickValue.toFixed(2); // Initialize shows per click display
