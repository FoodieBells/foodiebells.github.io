class Recipe {
    constructor(id,title, timestamp, pic, description, genericIngredients,
        prepTime, cookTime, servings, ingredients, directions) {
        this.id = id;
        this.title = title;
        this.timestamp = timestamp;
        this.pic = pic;
        this.description = description;
        this.genericIngredients = genericIngredients;
        this.prepTime = prepTime;
        this.cookTime = cookTime;
        this.servings = servings;
        this.ingredients = ingredients;
        this.directions = directions;
    }

}

export default Recipe;