const teamOptions = [
    {value: "Arizona Diamondbacks", label: "Arizona Diamondbacks"},
    {value: "Atlanta Braves", label: "Atlanta Braves"},
    {value: "Baltimore Orioles", label: "Baltimore Orioles"},
    {value: "Boston Red Sox", label: "Boston Red Sox"},
    {value: "Chicago White Sox", label: "Chicago White Sox"},
    {value: "Chicago Cubs", label: "Chicago Cubs"},
    {value: "Cincinnati Reds", label: "Cincinnati Reds"},
    {value: "Cleveland Guardians", label: "Cleveland Guardians"},
    {value: "Colorado Rockies", label: "Colorado Rockies"},
    {value: "Detroit Tigers", label: "Detroit Tigers"},
    {value: "Houston Astros", label: "Houston Astros"},
    {value: "Houston Astros", label: "Houston Astros"},
    {value: "Los Angeles Angels", label: "Los Angeles Angels"},
    {value: "Los Angeles Dodgers", label: "Los Angeles Dodgers"},
    {value: "Miami Marlins", label: "Miami Marlins"},
    {value: "Milwaukee Brewers", label: "Milwaukee Brewers"},
    {value: "Minnesota Twins", label: "Minnesota Twins"},
    {value: "New York Yankees", label: "New York Yankees"},
    {value: "New York Mets", label: "New York Mets"},
    {value: "Oakland Athletics", label: "Oakland Athletics"},
    {value: "Philadelphia Phillies", label: "Philadelphia Phillies"},
    {value: "Pittsburgh Pirates", label: "Pittsburgh Pirates"},
    {value: "San Diego Padres", label: "San Diego Padres"},
    {value: "San Francisco Giants", label: "San Francisco Giants"},
    {value: "Seattle Mariners", label: "Seattle Mariners"},
    {value: "St. Louis Cardinals", label: "St. Louis Cardinals"},
    {value: "Tampa Bay Rays", label: "Tampa Bay Rays"},
    {value: "Texas Rangers", label: "Texas Rangers"},
    {value: "Toronto Blue Jays", label: "Toronto Blue Jays"},
    {value: "Washington Nationals", label: "Washington Nationals"}
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

function parseDate(date) {
    const dateValue = new Date(date);
    const month = dateValue.getMonth() + 1;
    const day = dateValue.getDate() + 1;
    const year = dateValue.getFullYear().toString().substr(-2);

    return `${month.toString()}/${day.toString()}/${year}`;
}

function parseForm() {
    const outputText = document.getElementById('output-text');
    const americanLeagueRadio = document.getElementById('american-league');
    const nationalLeagueRadio = document.getElementById('national-league');
    selectedLeague = ''
    if (americanLeagueRadio.checked) {
        selectedLeague = 'American League'
    }
    else if (nationalLeagueRadio.checked) {
        selectedLeague = 'National League'
    }
    const dateValue = parseDate(document.getElementById("date").value)
    outputText.textContent = `[font=TAHOMA]\n`;
    outputText.textContent += `[b][u]${selectedLeague} Standings, Updated ${dateValue}[/b][/u]\n`;
    divisions = ["East", "Central", "West", "Wildcard"]
    for (var i = 0; i < divisions.length; i++) {
        outputText.textContent += `${selectedLeague} ${divisions[i]}\n`;
        for (var j = 0; j < 5; j++) {
            if (document.getElementById(`${divisions[i].toLowerCase()}-team-${j+1}`).value == "St. Louis Cardinals") {
                outputText.textContent += `[b]${j+1}. ${document.getElementById(`${divisions[i].toLowerCase()}-team-${j+1}`).value}, ${document.getElementById(`${divisions[i].toLowerCase()}-record-${j+1}`).value}, ${document.getElementById(`${divisions[i].toLowerCase()}-gb-${j+1}`).value} GB[/b]\n`
            }
            else {
                outputText.textContent += `${j+1}. ${document.getElementById(`${divisions[i].toLowerCase()}-team-${j+1}`).value}, ${document.getElementById(`${divisions[i].toLowerCase()}-record-${j+1}`).value}, ${document.getElementById(`${divisions[i].toLowerCase()}-gb-${j+1}`).value} GB\n`
            }
            
        }
        outputText.textContent += `\n`;
    }
    statsCategories = ["Average", "Home Runs", "RBI", "Wins", "Saves", "ERA", "Strikeouts"];
    outputText.textContent += `[b][u]${selectedLeague} Leaders, Updated ${dateValue}[/b][/u]\n`;
    for (var i = 0; i < statsCategories.length; i++) {
        outputText.textContent += `${statsCategories[i]}\n`;
        for (var j = 0; j < 5; j++) {
            if (document.getElementById(`${statsCategories[i].toLowerCase().replace(/\s/g, "")}-team-${j+1}`).value == "St. Louis Cardinals") {
                outputText.textContent += `[b]${j+1}. ${document.getElementById(`${statsCategories[i].toLowerCase().replace(/\s/g, "")}-name-${j+1}`).value}, ${document.getElementById(`${statsCategories[i].toLowerCase().replace(/\s/g, "")}-team-${j+1}`).value} - ${document.getElementById(`${statsCategories[i].toLowerCase().replace(/\s/g, "")}-value-${j+1}`).value}[/b]\n`;
            }
            else {
                outputText.textContent += `${j+1}. ${document.getElementById(`${statsCategories[i].toLowerCase().replace(/\s/g, "")}-name-${j+1}`).value}, ${document.getElementById(`${statsCategories[i].toLowerCase().replace(/\s/g, "")}-team-${j+1}`).value} - ${document.getElementById(`${statsCategories[i].toLowerCase().replace(/\s/g, "")}-value-${j+1}`).value}\n`;
            }
        }
        outputText.textContent += '\n';
    }


}

populateForm();
const generateBtn = document.getElementById("generate-btn");
generateBtn.addEventListener("click", () => {
    parseForm();
});