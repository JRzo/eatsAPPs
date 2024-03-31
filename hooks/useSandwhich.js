
export const INGREDIENTS ={
    bread: {
        price: 0.5,
        extraScaleY: 5,
        icon: "🍞"
    },

    lettuce:{
        price:0.5,
        icon: "🥬"
    },
    mushroom:{
        price:1,
        icon:  "🍄"
    },
    tomato:{
        price:0.5,
        icon: "🍅"
    },
    cheese:{
        price:1, 
        icon: "🧀"
    },
    chicken:{
        price:1.5,
        icon: "🍗"

    },

    sausage: {
        price:1.5,
        icon: "🌭"
    },
    salami:{
        price:1.5,
        icon:"🍖"
    },
    patty:{
        price:2,
        icon: "🍔"
    },




};
export const useSandwhich  = create((set) => ({
    ingredients: [
        {
            id:0,
            name:"bread",
        },
        {
            id:1,
            name: "bread"
        },

    ],
    total:5,
    addIngredient: (ingredient) => 
        set((state) => ({
            total: state.total + INGREDIENTS[ingredient].price,
            ingredients:[
                ...state.ingredients.slice(0,-1),
                {
                name:ingredient,
                id: state.ingredients.length,
                },
                {
                name: "bread",
                id: 1,

                },

        ],

    })),
    removeIngredient: (ingredient) => 
        set((state) => ({
            total:
                state.total - 
                ( INGREDIENTS[state.ingredients[ingredient.name]]?.price || 0),
            ingredients:state.ingredients.filter((ing)=> ing.id !== ingredient.id),

    })),

}));


