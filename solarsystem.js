// 1. public property for holding the last modified date
// 2. getter/setter for planets
// 3. getter/setter for active spacecraft
// 4. getter/setter for planetsLandedOn

var SolarSystem = (function (){
  var planets = ["Mercury", "Venus", "Earth", "Mars", "Jupiter", "Uranus", "Saturn", "Neptune"];
  var activeSpacecraft = ["Space Station", "Rocket Ship", "Probe", "Hubble Telescope"];
  var planetsLandedOn = 0;

  return {
  lastModified: new Date(),
   getPlanets: function(){
    return planets;
  },

  setPlanets: function(newPlanets) {
    planets = planets.push(newPlanets);
  },

  getActiveSpaceCraft: function(){
    return activeSpacecraft;
  },

  setActiveSpaceCraft: function(newSpaceCraft){
    activeSpacecraft = activeSpacecraft.push(newSpaceCraft);
  },

  getPlanetsLandedOn: function(){
    return planetsLandedOn;
  },

  setPlanetsLandedOn: function(newLanded){
    planetsLandedOn = newLanded;
  }
  }
})();