var newPolitician = function (name, partyColor) {
  var politician = {};
  
  politician.name = name;
  politician.partyColor = partyColor;
  politician.electionResults = null;
  politician.totalVotes = 0;
  
  politician.tallyTotalVotes = function() {
    
    this.totalVotes = 0;
    
    for (i = 0; i < this.electionResults.length; i++)
      {
        this.totalVotes = this.totalVotes + this.electionResults[i];
      }
  };
  
  return politician;
};

var Glenda = newPolitician ("Glenda Glader", [132,17,11]);

var Harry = newPolitician ("Harry Hedberg", [245,141,136]); 

Glenda.electionResults = [5,1,7,2,33,6,4,2,1,14,8,3,1,11,11,0,5,3,3,3,7,4,8,9,3,7,2,2,4,2,8,3,15,15,2,12,0,4,13,1,3,2,8,21,3,2,11,1,3,7,2];

Harry.electionResults = [4,2,4,4,22,3,3,1,2,15,8,1,3,9,0,6,1,5,5,1,3,7,8,1,3,3,1,3,2,2,6,2,14,0,1,6,7,3,7,3,6,1,3,17,3,1,2,11,2,3,1]

Glenda.electionResults[9] = 1;
Harry.electionResults[9] = 28;

Glenda.electionResults[4] = 17;
Harry.electionResults[4] = 38;

Glenda.electionResults[43] = 11;
Harry.electionResults[43] = 27;

var setStateResults = function (state) {
  
  theStates[state].winner = null;
  
  if (Glenda.electionResults[state] > Harry.electionResults[state]) {
      theStates[state].winner = Glenda;
      
  } else if (Harry.electionResults[state] > Glenda.electionResults[state])   {
    theStates[state].winner = Harry;
    
  }
  
  var stateWinner = theStates[state].winner;
  
  if (stateWinner != null) {
    
    theStates[state].rgbColor = stateWinner.partyColor;
  
  } else {
    
    theStates[state].rgbColor = [11, 32, 57];
  }
  
var stateResults = document.getElementById("stateResults");

var header = stateResults.children[0].children[0];

var body = stateResults.children[1];

var stateName = header.children[0];

var stateAbbrev = header.children[1];

var name1 = body.children[0].children[0];

var results1 = body.children[0].children[1];

var name2 = body.children[1].children[0];

var results2 = body.children[1].children[1];

var winnerName = body.children[2].children[1];

stateName.innerText = theStates[state].nameFull;

stateAbbrev.innerText = "(" + theStates[state].nameAbbrev + ")";

name1.innerText = Glenda.name;

name2.innerText = Harry.name;
  
results1.innerText = Glenda.electionResults[state];
  
results2.innerText = Harry.electionResults[state];
  
if (theStates[state].winner === null) {
  winnerName.innerText = "DRAW";
} else {
  winnerName.innerText = theStates[state].winner.name;
}
};

Glenda.tallyTotalVotes();
Harry.tallyTotalVotes();

var winner;

if (Glenda.totalVotes > Harry.totalVotes) {
  winner = Glenda.name;

} else if (Harry.totalVotes > Glenda.totalVotes) {
  winner = Harry.name;

} else if (Harry.totalVotes == Glenda.totalVotes) {
 
  winner = "Draw";

}

var countryResults = document.getElementById("countryResults");

countryResults.children[0].children[0].children[0].innerText = Glenda.name;

countryResults.children[0].children[0].children[1].innerText = Glenda.totalVotes;

countryResults.children[0].children[0].children[2].innerText = Harry.name;

countryResults.children[0].children[0].children[3].innerText = Harry.totalVotes;

countryResults.children[0].children[0].children[5].innerText = winner;