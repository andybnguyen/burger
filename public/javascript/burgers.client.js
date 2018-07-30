$('#addBurgerBtn').on('click', function() {
    event.preventDefault();
    const newBurger = $('#newBurger').val().trim();
    console.log(`From Client: ${newBurger}`);

    axios.post('/burgers/create', {data: newBurger})
    .then(res => {
        location.reload();
    });
});

$('.devourBtn').on('click', function () {
    const burgerID = $(this).attr('id');
    axios.put(`burgers/update/${burgerID}`, {data: burgerID})
    .then(res => {
        location.reload();
    });
})