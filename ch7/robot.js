// NOTE: This is Chapter 7 from the 3rd edition of the book

const roads = [
	"Alice's House-Bob's House",   "Alice's House-Cabin",
	"Alice's House-Post Office",   "Bob's House-Town Hall",
	"Daria's House-Ernie's House", "Daria's House-Town Hall",
	"Ernie's House-Grete's House", "Grete's House-Farm",
	"Grete's House-Shop",          "Marketplace-Farm",
	"Marketplace-Post Office",     "Marketplace-Shop",
	"Marketplace-Town Hall",       "Shop-Town Hall"
];

const mailRoute = [
	"Alice's House", "Cabin", "Alice's House", "Bob's House",
	"Town Hall", "Daria's House", "Ernie's House",
	"Grete's House", "Shop", "Grete's House", "Farm",
	"Marketplace", "Post Office"
];

class VillageState {
	constructor(place, parcels) {

		// Robot's current location
		this.place = place;

		// Undelivered parcels
		// Each has current location and destination address
		this.parcels = parcels;
	}

	move(destination) {
		if (!roadGraph[this.place].includes(destination)) {

			// Can't move somewhere not in the roadGraph
			return this;
		} else {
			let parcels = this.parcels.map(p => {

				// Determine which parcels are still undelivered
				if (p.place != this.place) return p;
				return {place: destination, address: p.address};

			// Deliver parcels for current location
			}).filter(p => p.place != p.address);

			// Don't modify state, instead compute new
			return new VillageState(destination, parcels);
		}
	}
}

VillageState.random = function(parcelCount = 5) {
	let parcels = [];
	for (let i = 0; i < parcelCount; i++) {
		let address = randomPick(Object.keys(roadGraph));
		let place;

		// Do loop runs if it gets a place that matches address
		// Prevents parcels sent from same place they are addressed
		// to from being pushed
		do {
			place = randomPick(Object.keys(roadGraph));
		} while (place == address);
		parcels.push({place, address});
	}

	return new VillageState("Post Office", parcels);
};

function runRobot(state, robot, memory) {
	for (let turn = 0; ; turn++) {
		if (state.parcels.length == 0) {
			console.log(`Done in ${turn} turns`);
			break;
		}

		let action = robot(state, memory);
		state = state.move(action.direction);
		memory = action.memory;
		console.log(`Moved to ${action.direction}`);
	}
}

function randomPick(array) {
	let choice = Math.floor(Math.random() * array.length);
	return array[choice];
}

function randomRobot(state) {
	return {direction: randomPick(roadGraph[state.place])};
}

// Takes max 26 turns, but requires being fed a route to follow
function routeRobot(state, memory) {
	if (memory.length == 0) {

		// Restart the route
		memory = mailRoute;
	}

	return {direction: memory[0], memory: memory.slice(1)};
}

function goalOrientedRobot({place, parcels}, route) {
	if (route.length == 0) {
		let parcel = parcels[0];

		if (parcel.place != place) {

			// Create route toward parcel to pick up
			route = findRoute(roadGraph, place, parcel.place);
		} else {

			// Create route toward parcel delivery address
			route = findRoute(roadGraph, place, parcel.address);
		}
	}

	return {direction: route[0], memory: route.slice(1)};
}

function findRoute(graph, from, to) {

	// Array of places to explore and the route to get there
	// Begins at start position
	let work = [{at: from, route: []}];

	for (let i = 0; i < work.length; i++) {
		let {at, route} = work[i];

		for (let place of graph[at]) {
			if (place == to) return route.concat(place);

			// If we have not looked at this place before,
			// add to the route, set current location
			if (!work.some(w => w.at == place)) {
				work.push({at: place, route: route.concat(place)});
			}
		}
	}
}

function buildGraph(edges) {
	let graph = Object.create(null);

	function addEdge(from, to) {
		if (graph[from] == null) {
			graph[from] = [to];
		} else {
			graph[from].push(to);
		}
	}

	for (let [from, to] of edges.map(r => r.split("-"))) {
		addEdge(from, to);
		addEdge(to, from);
	}

	return graph;
}

const roadGraph = buildGraph(roads);

// runRobot(VillageState.random(), randomRobot);
// runRobot(VillageState.random(), routeRobot, []);
runRobot(VillageState.random(), goalOrientedRobot, []);