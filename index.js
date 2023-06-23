var pricingSwitch = document.querySelector('.pricing-switch');
var monthlyPricing = document.querySelectorAll('.monthly');
var annualPricing = document.querySelectorAll('.annually');

function changePrice() {
	if (pricingSwitch.checked) {
		// monthly pricing
		for (var i = 0; i < monthlyPricing.length; i++) {
			monthlyPricing[i].style.display = 'flex';
			annualPricing[i].style.display = 'none';
		}
	} else {
		// annual pricing
		for (var i = 0; i < monthlyPricing.length; i++) {
			monthlyPricing[i].style.display = 'none';
			annualPricing[i].style.display = 'flex';
		}
	}
}

pricingSwitch.addEventListener('change', changePrice);
