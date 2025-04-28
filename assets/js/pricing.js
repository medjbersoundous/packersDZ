// Global variable to store pricing data
let pricingData = [];

// Fetch pricing data for selected wilaya and populate destination dropdown
async function loadPricingData(wilaya) {
  const destinationSelect = document.getElementById('destinationSelect');
  const errorMessage = document.getElementById('errorMessage');

  try {
    const response = await fetch(`assets/json/${wilaya}.json`);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    pricingData = await response.json();

    // Clear previous options
    destinationSelect.innerHTML = '<option value="" disabled selected>Select a destination</option>';
    destinationSelect.disabled = false;

    // Populate destination dropdown
    pricingData.forEach(item => {
      const option = document.createElement('option');
      option.value = item.destination;
      option.textContent = item.destination;
      destinationSelect.appendChild(option);
    });

    errorMessage.style.display = 'none';
  } catch (error) {
    console.error(`Error fetching pricing data for ${wilaya}:`, error);
    errorMessage.style.display = 'block';
    destinationSelect.disabled = true;
    document.querySelector('.btn-check-price').disabled = true;
    document.querySelector('.btn-download').style.pointerEvents = 'none';
    document.querySelector('.btn-download').classList.add('disabled');
    pricingData = [];
  }
}

// Check price function
function checkPrice() {
  const wilaya = document.getElementById('wilayaSelect').value;
  const destination = document.getElementById('destinationSelect').value;
  const deliveryType = document.querySelector('input[name="deliveryType"]:checked').value;
  const resultElement = document.getElementById('priceResult');

  if (!wilaya) {
    resultElement.innerHTML = 'Please select a starting wilaya.';
    new bootstrap.Modal(document.getElementById('priceModal')).show();
    return;
  }

  if (!destination) {
    resultElement.innerHTML = 'Please select a destination wilaya.';
    new bootstrap.Modal(document.getElementById('priceModal')).show();
    return;
  }

  const pricing = pricingData.find(item => item.destination === destination);
  if (pricing) {
    const price = deliveryType === 'home' ? pricing.home_delivery : pricing.stopdesk_delivery;
    resultElement.innerHTML = `Delivery from <strong>${wilaya}</strong> to <strong>${destination}</strong> (${deliveryType}): <strong>${price} DZD</strong><br>Duration: ${pricing.duration}`;
  } else {
    resultElement.innerHTML = 'Pricing information not available for this destination.';
  }

  new bootstrap.Modal(document.getElementById('priceModal')).show();
}

// Download pricing function
function downloadPricing() {
  const wilaya = document.getElementById('wilayaSelect').value;

  if (!wilaya || pricingData.length === 0) {
    new bootstrap.Modal(document.getElementById('warningModal')).show();
    return;
  }

  const dataStr = 'data:text/json;charset=utf-8,' + encodeURIComponent(JSON.stringify(pricingData, null, 2));
  const downloadAnchor = document.createElement('a');
  downloadAnchor.setAttribute('href', dataStr);
  downloadAnchor.setAttribute('download', `${wilaya}.json`); // Fixed to .json as per original intent
  document.body.appendChild(downloadAnchor);
  downloadAnchor.click();
  document.body.removeChild(downloadAnchor);
}

// Load data when starting wilaya selection changes
document.getElementById('wilayaSelect').addEventListener('change', async (event) => {
  const selectedWilaya = event.target.value;
  if (selectedWilaya) {
    await loadPricingData(selectedWilaya);
  } else {
    document.getElementById('destinationSelect').disabled = true;
    document.getElementById('destinationSelect').innerHTML = '<option value="" disabled selected>Select a destination</option>';
    pricingData = [];
  }
});

// Initialize on page load
document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('destinationSelect').disabled = true;
});