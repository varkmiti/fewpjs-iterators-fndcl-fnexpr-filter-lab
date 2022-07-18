// First 
function findMatching(drivers, string) { 
  return drivers.filter(d => d.toLowerCase() == string.toLowerCase()
  );
}

// Second 
function fuzzyMatch(drivers, string) { 
  let l = string.length ;
  return drivers.filter(d => d.slice(0, l) == string)
}

// Third 
function matchName(drivers, string) {
  return drivers.filter(d => d.name == string)
}
