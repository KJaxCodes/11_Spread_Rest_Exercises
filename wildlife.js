/* Task 1: Track Animal Sightings */
// TODO: Write a function with rest parameters to print sightings of different animals within the sanctuary. 
//This function should accept an arbitrary number of animal names.

function animalSightings(...names) {
    console.log(`Animal Sightings: ${names}`);
}

//animalSightings('lions', 'tigers', 'bears')
//Animal Sightings: lions,tigers,bears



/* Task 2: Merge Habitat Areas */
const forestHabitats = ["Forest A", "Forest B"];
const savannahHabitats = ["Savannah C", "Savannah D"];
// TODO: You are given two arrays of habitat names. Use the spread operator to combine them into 
//a comprehensive list of protected areas within the sanctuary.

const protectedAreas = [...forestHabitats, ...savannahHabitats]
console.log(`Protected Areas: ${protectedAreas}`);

//Protected Areas: Forest A,Forest B,Savannah C,Savannah D



/* Task 3: Update Conservation Status */
const rhinoStatus = {
    population: 500,
    status: "Endangered"
};
// TODO: You are given an object representing an animal's conservation status. Use the spread operator 
//to update this status with new information, such as an increase in population or a change in habitat.

const newRhinoStatus = { ...rhinoStatus, population: 6000, status: "least concern" };
console.log(`New Rhino Status: ${newRhinoStatus}`);

//New Rhino Status: population: 6000, status: least concern


/* Task 4: Catalog Genetic Diversity */
const lionProfile = {
    name: "Leo",
    age: 5,
    species: "Lion"
};
// TODO: Duplicate an animal profile object using a shallow copy. Add genetic diversity information using 
//the `genetics` property to this copy. Observe and explain how changes to nested properties affect both the original and the copied object.

const geneticLionProfile = { ...lionProfile, genetics: "mutant" };
console.log(`Original Lion Profile: ${lionProfile}`);
console.log(`Updated Lion Profile: ${geneticLionProfile}`);


/*
 * Observations: Because the spread operator creates a shallow copy 1 level deep, changes to properties in the cloned profile do not affect the original.
 * TODO: Explain here.
 */

/* Task 5: Analyze Ecosystem Health */
const ecosystemHealth = {
    waterQuality: "Good",
    foodSupply: {
        herbivores: "Abundant",
        carnivores: "Sufficient"
    }
};
// TODO: You are given an object with a nested structure detailing the ecosystem's health, 
//including water quality and food supply. Perform a shallow copy and modify a nested property. 
//Observe and explain how changes to nested properties affect both the original and the copied object.

const updatedEcosystemHealth = { ...ecosystemHealth, foodSupply: { ...ecosystemHealth.foodSupply, carnivores: "Plentiful" } };
console.log("Original Ecosystem Health:", ecosystemHealth);
console.log("Updated Ecosystem Health:", updatedEcosystemHealth);

/*
 * Observations: Modifying a nested property in a shallow copy also affects the original object.
 * This occurs because the spread operator performs a shallow copy, meaning that nested objects are not duplicated but 
 * rather reference the same object in memory.
 * TODO: Explain here.
 */
