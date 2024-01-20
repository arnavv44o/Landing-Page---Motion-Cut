function updateCustomization() {
    const currency = document.getElementById("currency").value;
    const unit = document.getElementById("unit").value;

    const pricingCards = document.querySelectorAll('.pricing-card');
    pricingCards.forEach(card => {
        updateCardPrice(card, currency, unit);
    });
}

function updateCardPrice(card, currency, unit) {
    const priceElement = card.querySelector('.price');
    const unitElement = card.querySelector('.unit');

    const priceINR = parseFloat(card.dataset.priceInr);
    const convertedPrice = convertCurrency(priceINR, currency);

    priceElement.textContent = convertedPrice;
    unitElement.textContent = unit;
}

function convertCurrency(priceINR, currency) {
    switch (currency) {
        case "$":
            return `$${(priceINR / 73).toFixed(2)}`;
        case "€":
            return `€${(priceINR / 86).toFixed(2)}`;
        case "₹":
            return `₹${priceINR.toFixed(2)}`;
        default:
            return `${currency}${priceINR.toFixed(2)}`;
    }
}

document.getElementById("currency").addEventListener("change", updateCustomization);
document.getElementById("unit").addEventListener("change", updateCustomization);

function selectPlan(planName) {
    alert(`Plan selected: ${planName}`);
}

updateCustomization();

