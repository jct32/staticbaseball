const teamOptions = [
    {value: "ARI", label: "Arizona Diamondbacks"},
    {value: "ATL", label: "Atlanta Braves"},
    {value: "BAL", label: "Baltimore Orioles"},
    {value: "BOS", label: "Boston Red Sox"},
    {value: "CWS", label: "Chicago White Sox"},
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

function createOptions(selectEl, options) {
    options.forEach(option => {
        const optionEl = document.createElement("option");
        optionEl.value = option.value;
        optionEl.textContent = option.label;
        selectEl.appendChild(optionEl);
    });
}

createOptions(document.getElementById("away-team"), teamOptions);
createOptions(document.getElementById("home-team"), teamOptions);