function changeMainImage(smallImage) {
    var mainImage = document.querySelector('#mainImage');
    var newSrc = smallImage.src;
    var oldSrc = mainImage.src;
    mainImage.src = newSrc;
    smallImage.src = oldSrc;
}
function changeMainImage1(smallImage1) {
    var mainImage1 = document.querySelector('#mainImage1');
    var newSrc = smallImage1.src;
    var oldSrc = mainImage1.src;
    mainImage1.src = newSrc;
    smallImage1.src = oldSrc;
}

document.querySelector('#addToCartForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    var quantity = document.querySelector('#quantityInput').value;
    
    if (quantity !== '') {
        var message;
        if (quantity === '1') {
            message = ' order is received!';
        } else {
            message = ' orders received!';
        }
        alert(quantity + ' ' + message);
        document.querySelector('#quantityInput').value = '';
    }
});


document.querySelector('#addToCartFormapple').addEventListener('submit', function(event) {
    event.preventDefault();
    
    var quantity = document.querySelector('#quantityInput1').value;
    
    if (quantity !== '') {
        var message;
        if (quantity === '1') {
            message = ' order is received!';
        } else {
            message = ' orders received!';
        }
        alert(quantity + ' ' + message);
        document.querySelector('#quantityInput1').value = '';
    }
});

document.querySelector('#addToCartFormpear').addEventListener('submit', function(event) {
    event.preventDefault();
    
    var quantity = document.querySelector('#quantityInput2').value;
    
    if (quantity !== '') {
        var message;
        if (quantity === '1') {
            message = ' order is received!';
        } else {
            message = ' orders received!';
        }
        alert(quantity + ' ' + message);
        document.querySelector('#quantityInput2').value = '';
    }
});






