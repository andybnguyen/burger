$('#addBurgerBtn').on('click', () => {
    event.preventDefault();
    const newBurger = $('#newBurger').val().trim();
    console.log(`From Client: ${newBurger}`);

    axios.post('/burgers/create', {data: newBurger})
    .then(res => {
        location.reload();
    });
});