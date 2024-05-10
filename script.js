const checkbox = document.getElementById('circleBtn')

checkbox.addEventListener('change', function() {
    if (this.checked) {
        document.getElementById("priceBs").innerHTML = "19.99";
        document.getElementById("pricePs").innerHTML = "24.99";
        document.getElementById("priceMs").innerHTML = "39.99";
    }else{
        document.getElementById("priceBs").innerHTML = "199.99";
        document.getElementById("pricePs").innerHTML = "249.99";
        document.getElementById("priceMs").innerHTML = "399.99";
    }
});