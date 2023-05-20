const teamOptions = [
    {value: "ARI", label: "Arizona Diamondbacks"},
    {value: "ATL", label: "Atlanta Braves"},
    {value: "BAL", label: "Baltimore Orioles"},
    {value: "BOS", label: "Boston Red Sox"},
    {value: "CHW", label: "Chicago White Sox"},
    {value: "CHC", label: "Chicago Cubs"},
    {value: "CIN", label: "Cincinnati Reds"},
    {value: "CLE", label: "Cleveland Guardians"},
    {value: "COL", label: "Colorado Rockies"},
    {value: "DET", label: "Detroit Tigers"},
    {value: "HOU", label: "Houston Astros"},
    {value: "KC", label: "Kansas City Royals"},
    {value: "LAA", label: "Los Angeles Angels"},
    {value: "LAD", label: "Los Angeles Dodgers"},
    {value: "MIA", label: "Miami Marlins"},
    {value: "MIL", label: "Milwaukee Brewers"},
    {value: "MIN", label: "Minnesota Twins"},
    {value: "NYY", label: "New York Yankees"},
    {value: "NYM", label: "New York Mets"},
    {value: "OAK", label: "Oakland Athletics"},
    {value: "PHL", label: "Philadelphia Phillies"},
    {value: "PIT", label: "Pittsburgh Pirates"},
    {value: "SD", label: "San Diego Padres"},
    {value: "SF", label: "San Francisco Giants"},
    {value: "SEA", label: "Seattle Mriners"},
    {value: "STL", label: "St. Louis Cardinals"},
    {value: "TB", label: "Tampa Bay Rays"},
    {value: "TEX", label: "Texas Rangers"},
    {value: "TOR", label: "Toronto Blue Jays"},
    {value: "WAS", label: "Washington Nationals"}
];

function populateForm() {
    const parentForm = document.getElementById("leagueleadersform");
    divisions = ["East", "Central", "West", "Wildcard"]
    for (var i = 0; i < divisions.length; i++) {
        const header = document.createElement('h3');
        header.textContent = `${divisions[i]} Standings`;
        parentForm.appendChild(header);
        for (var j = 0; j < 5; j++) {
            const rowLabel = document.createElement('label');
            rowLabel.textContent = `${j+1}. `;
            const teamInput = document.createElement('select');
            teamInput.id = `${divisions[i].toLowerCase()}-team-${j+1}`;
            createOptions(teamInput, teamOptions);
            const recordInput = document.createElement('input');
            recordInput.id = `${divisions[i].toLowerCase()}-record-${j+1}`;
            recordInput.placeholder = 'Record';
            const gamesBehind = document.createElement('input');
            gamesBehind.id = `${divisions[i].toLowerCase()}-gb-${j+1}`;
            gamesBehind.placeholder = 'Games Behind';
            const breakElement = document.createElement('br');
            parentForm.appendChild(rowLabel);
            parentForm.appendChild(teamInput);
            parentForm.appendChild(recordInput);
            parentForm.appendChild(gamesBehind);
            parentForm.appendChild(breakElement);
        }
    }
    statsCategories = ["Average", "Home Runs", "RBI", "Wins", "Saves", "ERA", "Strikeouts"];
    parentForm.appendChild(document.createElement('br'));
    for (var i = 0; i < statsCategories.length; i++) {
        const header = document.createElement('h3');
        header.textContent = `${statsCategories[i]}`;
        parentForm.appendChild(header);
        for (var j = 0; j < 5; j++) {
            const rowLabel = document.createElement('label');
            rowLabel.textContent = `${j+1}. `;
            const playerName = document.createElement('input');
            playerName.id = `${statsCategories[i].toLowerCase().replace(/\s/g, "")}-name-${j+1}`;
            playerName.placeholder = 'Player Name'
            const teamInput = document.createElement('select');
            teamInput.id = `${statsCategories[i].toLowerCase().replace(/\s/g, "")}-team-${j+1}`;
            createOptions(teamInput, teamOptions);
            const statInput = document.createElement('input');
            statInput.id = `${statsCategories[i].toLowerCase().replace(/\s/g, "")}-value-${j+1}`;
            statInput.placeholder = 'Stat Value'
            const breakElement = document.createElement('br');
            parentForm.appendChild(rowLabel);
            parentForm.appendChild(playerName);
            parentForm.appendChild(teamInput);
            parentForm.appendChild(statInput);
            parentForm.appendChild(breakElement);
        }
    }

}

function createOptions(selectEl, options) {
    options.forEach(option => {
        const optionEl = document.createElement("option");
        optionEl.value = option.value;
        optionEl.textContent = option.label;
        selectEl.appendChild(optionEl);
    });
}

populateForm();