const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			people: [],
			planets: [],
			vehicles: []
		},
		actions: {
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			fetchGetAllPeople: () => { //switch this to async await to practice
				fetch("https://www.swapi.tech/api/people")
				.then(response => response.json())	
				.then(data => {
					// console.log(data);
					setStore({people:data.results});
				})
				.catch(error => console.log("Something went wrong, check me out:", error))
			},
			fetchGetAllPlanets: async () => {
				const response = await fetch("https://www.swapi.tech/api/planets");
				let data = await response.json();
				// console.log(data);
				setStore({planets:data.results});
			},
			fetchGetAllVehicles: async () => {
				const response = await fetch("https://www.swapi.tech/api/vehicles");
				let data = await response.json();
				// console.log(data);
				setStore({vehicles:data.results});
			},
			initialLoading: () => {
				/**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
				getActions().fetchGetAllPeople();
				getActions().fetchGetAllPlanets();
				getActions().fetchGetAllVehicles();
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
