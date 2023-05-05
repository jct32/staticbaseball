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

class Team {
    constructor(city, nickname, abbreviation, stadium, location) {
        this.city = city;
        this.nickname = nickname;
        this.abbreviation = abbreviation;
        this.stadium = stadium;
        this.location = location;
    }
}
const teams = [
    new Team("Arizona", "Diamondbacks", "ARI", "Chase Field", "Phoenix, AZ"),
    new Team("Atlanta", "Braves", "ATL", "Truist Park", "Atlanta, GA"),
    new Team("Baltimore", "Orioles", "BAL", "Oriole Park at Camden Yards", "Baltimore, MD"),
    new Team("Boston", "Red Sox", "BOS", "Fenway Park", "Boston, MA"),
    new Team("Chicago", "White Sox", "CWS", "Guaranteed Rate Field", "Chicago, IL"),
    new Team("Chicago", "Cubs", "CHC", "Wrigley Field", "Chicago, IL"),
    new Team("Cincinnati", "Reds", "CIN", "Great American Ball Park", "Cincinnati, OH"),
    new Team("Cleveland", "Guardians", "CLE", "Progressive Field", "Cleveland, OH"),
    new Team("Colorado", "Rockies", "COL", "Coors Field", "Denver, CO"),
    new Team("Detroit", "Tigers", "DET", "Comerica Park", "Detroit, MI"),
    new Team("Houston", "Astros", "HOU", "Minute Maid Park", "Houston, TX"),
    new Team("Kansas City", "Royals", "KC", "Kauffman Stadium", "Kansas City, MO"),
    new Team("Los Angeles", "Angels", "LAA", "Angel Stadium", "Anaheim, CA"),
    new Team("Los Angeles", "Dodgers", "LAD", "Dodger Stadium", "Los Angeles, CA"),
    new Team("Miami", "Marlins", "MIA", "Loan Depot Park", "Miami, FL"),
    new Team("Milwaukee", "Brewers", "MIL", "American Family Field", "Milwaukee, WI"),
    new Team("Minnesota", "Twins", "MIN", "Target Field", "Minneapolis, MN"),
    new Team("New York", "Yankees", "NYY", "Yankee Stadium", "The Bronx, NY"),
    new Team("New York", "Mets", "NYM", "Citi Field", "Queens, NY"),
    new Team("Oakland", "Athletics", "OAK", "RingCentral Coliseum", "Oakland, CA"),
    new Team("Philadelphia", "Phillies", "PHL", "Citizens Bank Park", "Philadelphia, PA"),
    new Team("Pittsburgh", "Pirates", "PIT", "PNC Park", "Pittsburgh, PA"),
    new Team("San Diego", "Padres", "SD", "Petco Park", "San Diego, CA"),
    new Team("San Francisco", "Giants", "SF", "Oracle Park", "San Francisco, CA"),
    new Team("Seattle", "Mariners", "SEA", "T-Mobile Park", "Seattle, WA"),
    new Team("St. Louis", "Cardinals", "STL", "Busch Stadium", "St. Louis, MO"),
    new Team("Tampa Bay", "Rays", "TB", "Tropicana Field", "Tampa, FL"),
    new Team("Texas", "Rangers", "TEX", "Globe Life Field", "Arlington, TX"),
    new Team("Toronto", "Blue Jays", "TOR", "Rogers Centre", "Toronto, ON"),
    new Team("Washington", "Nationals", "WAS", "Nationals Park", "Washington, D.C.")
]

function createOptions(selectEl, options) {
    options.forEach(option => {
        const optionEl = document.createElement("option");
        optionEl.value = option.value;
        optionEl.textContent = option.label;
        selectEl.appendChild(optionEl);
    });
}

function findTeam(teams, name) {
    return teams.find(team => team.abbreviation == name);
}

function parseDate(date) {
    const dateValue = new Date(date);
    const month = dateValue.getMonth() + 1;
    const day = dateValue.getDate() + 1;
    const year = dateValue.getFullYear().toString().substr(-2);

    return `${month.toString()}/${day.toString()}/${year}`;
}

function generateLayout() {
    const textBox = document.getElementById("update-box");
    const homeTeam = findTeam(
        teams,
        document.getElementById("home-team").value
    );
    const awayTeam = findTeam(
        teams,
        document.getElementById("away-team").value
    );

    textBox.textContent = `[CENTER][size=150][FONT=TAHOMA][B][U]${document.getElementById("title").value}[/B][/U][/FONT][/size]\n`;
    textBox.textContent += `[size=85]Highlight Game: ${parseDate(document.getElementById("date").value)} - ${homeTeam.stadium}, ${homeTeam.location}[/size]\n\n`;
    textBox.textContent += `[img]https://a.espncdn.com/combiner/i?img=/i/teamlogos/mlb/500/${awayTeam.abbreviation}.png&scale=crop&cquality=40&location=origin&w=80&h=80[/img]`
    textBox.textContent += `@ [img]https://a.espncdn.com/combiner/i?img=/i/teamlogos/mlb/500/${homeTeam.abbreviation}.png&scale=crop&cquality=40&location=origin&w=80&h=80[/img]\n\n`;
    textBox.textContent += `[B]${awayTeam.abbreviation}[/B] | [B]${document.getElementById("away-runs").value}[/B] |`;
    textBox.textContent += ` ${document.getElementById("away-hits").value} | ${document.getElementById("away-errors").value}\n`;
    textBox.textContent += `[B]${homeTeam.abbreviation}[/B] | [B]${document.getElementById("home-runs").value}[/B] |`;
    textBox.textContent += ` ${document.getElementById("home-hits").value} | ${document.getElementById("home-errors").value}\n`;
    textBox.textContent += `W: ${document.getElementById("win").value}\n`;
    textBox.textContent += `L: ${document.getElementById("loss").value}\n`;
    if (document.getElementById("save").value != '') {
        textBox.textContent += `S: ${document.getElementById("save").value}\n`;
    };
    textBox.textContent += `\n[img]${document.getElementById("image-url").value}[/img]\n\n`

    textBox.textContent += `[u][b]${awayTeam.city} ${awayTeam.nickname}:[/b][/u]\n`;
    textBox.textContent += `${document.getElementById("away-stats").value}\n\n`;

    textBox.textContent += `[u][b]${homeTeam.city} ${homeTeam.nickname}:[/b][/u]\n`;
    textBox.textContent += `${document.getElementById("home-stats").value}\n\n`;
    textBox.textContent += `--\n\n`;

}

createOptions(document.getElementById("away-team"), teamOptions);
createOptions(document.getElementById("home-team"), teamOptions);

const updateBtn = document.getElementById("generate-btn");
updateBtn.addEventListener("click", () => {
    generateLayout();
})
