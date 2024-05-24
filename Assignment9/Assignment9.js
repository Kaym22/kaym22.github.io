function changeMainImage(smallImage) {
    var mainImage = document.getElementById('mainImage');
    var newSrc = smallImage.src;
    var oldSrc = mainImage.src;
    mainImage.src = newSrc;
    smallImage.src = oldSrc;
}
function changeMainImage1(smallImage1) {
    var mainImage1 = document.getElementById('mainImage1');
    var newSrc = smallImage1.src;
    var oldSrc = mainImage1.src;
    mainImage1.src = newSrc;
    smallImage1.src = oldSrc;
}

document.getElementById('addToCartForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    var quantity = document.getElementById('quantityInput').value;

    if (quantity !== '') {
        alert(quantity + ' orders received!');
        document.getElementById('quantityInput').value = '';
    }
});


document.getElementById('addToCartFormapple').addEventListener('submit', function(event) {
    event.preventDefault();
    
    var quantity = document.getElementById('quantityInput1').value;
    
    if (quantity !== '') {
        alert(quantity + ' orders received!');
        document.getElementById('quantityInput1').value = '';
    }
});



document.getElementById('addToCartFormpear').addEventListener('submit', function(event) {
    event.preventDefault();
    
    var quantity = document.getElementById('quantityInput2').value;
    
    if (quantity !== '') {
        alert(quantity + ' orders received!');
        document.getElementById('quantityInput2').value = '';
    }
});