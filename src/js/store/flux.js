const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			people: [],
			planets: [],
			vehicles: [],
			films: [],
			favorites: []
		},
		actions: {
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			fetchGetAllPeople: () => { //switch this to async await to practice
				fetch("https://swapi.dev/api/people")
				.then(response => response.json())	
				.then(data => {
					// console.log(data);
					setStore({people:data.results});
				})
				.catch(error => console.log("Something went wrong, check me out:", error))
			},
			fetchGetAllPlanets: async () => {
				const response = await fetch("https://swapi.dev/api/planets");
				let data = await response.json();
				// console.log(data);
				setStore({planets:data.results});
			},
			fetchGetAllVehicles: async () => {
				const response = await fetch("https://swapi.dev/api/vehicles");
				let data = await response.json();
				// console.log(data);
				setStore({vehicles:data.results});
			},
			fetchGetAllFilms: async () => {
				const response = await fetch("https://swapi.dev/api/films");
				let data = await response.json();
				// console.log(data);
				setStore({films:data.results});
			},
			addFavorite: (name) => {
				const favorites = getStore().favorites
				favorites.push(name)
				setStore({favorites: favorites})
			},
			removeFavorite: (idx) => {
				const favorites = getStore().favorites
				let filteredFavorites = favorites.filter((item, index) => {
					return(
						index !== idx
					);
				});
				setStore({favorites: filteredFavorites})
			},
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			}
		}
	};
};

export default getState;
