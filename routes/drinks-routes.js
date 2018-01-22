const drinksController = require('../controllers/drinksController.js');
const auth = require('../middleware/auth');

// TODO add the three routes and have them render the related drink views
// each app.get needs to have three parameters passed to them
// the route as called in the browser the middelware isLoggedIn and the related Controller
// newDrink should load drinks/editdrink
// updateDrink should do the drinks/newdrink
// showDrinks should show the drinks/showdrink
module.exports = (app) => {
    app.get('/drinks', drinksController.drinks);
      
    // drinks/new
    app.get('/drinks/new', drinksController.newDrink);

    // drinks/edit
    app.get('drinks/edit', drinksController.updateDrink);

    // drinks/show
    app.get('/drinks/:id', drinksController.showDrink);

};

