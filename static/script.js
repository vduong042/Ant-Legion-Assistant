document.addEventListener("DOMContentLoaded", () => {
    // Reference price data
    const priceData = {
        food: 400,
        leaf: 400,
        water: 2000,
        fungus: 8000,
    };

    // Function to update price values in the price-detail elements
    function updatePrices() {
        document.getElementById("price-food").textContent = `${priceData.food}đ / 1M`;
        document.getElementById("price-leaf").textContent = `${priceData.leaf}đ / 1M`;
        document.getElementById("price-water").textContent = `${priceData.water.toLocaleString("vi-VN")}đ / 1M`;
        document.getElementById("price-fungus").textContent = `${priceData.fungus.toLocaleString("vi-VN")}đ / 1M`;
    }

    // Call updatePrices when the page has fully loaded
    updatePrices();

    // Get input elements and total display element
    const inputs = {
        food: document.getElementById("food"),
        leaf: document.getElementById("leaf"),
        water: document.getElementById("water"),
        fungus: document.getElementById("fungus"),
    };

    const totalElement = document.getElementById("total");

    // Function to calculate the total value
    const calculateTotal = () => {
        const total = Object.keys(inputs).reduce((sum, key) => {
            const value = parseInt(inputs[key].value) || 0;
            return sum + (value * priceData[key]) / 1000000;
        }, 0);

        totalElement.textContent = total.toLocaleString("vi-VN");
    };

    // Attach calculateTotal function to the input event of each input field
    Object.values(inputs).forEach(input => {
        input.addEventListener("input", calculateTotal);
    });
});