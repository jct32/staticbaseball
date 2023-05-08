const team = "Cardinals";
const generateBtn = document.getElementById("generate-btn");
const copyButton = document.getElementById("copy-btn");
const outputTextArea = document.getElementById("output-text");
outputString = '';


function populateForm() {
  const hitting = document.getElementById("hittingStats");
  const pitching = document.getElementById("pitchingStats");
  for (let i = 0; i < 15; i++) {
    const break1 = document.createElement("br");
    const break2 = document.createElement("br");
    const pitchingInput = document.createElement("input");
    pitchingInput.id = `pitching-stats-${i+1}`;
    pitchingInput.style.width = "20%";
    pitching.appendChild(pitchingInput);
    pitching.appendChild(break1);
    const hittingInput = document.createElement("input");
    hittingInput.id = `hitting-stats-${i+1}`;
    hittingInput.style.width = "20%";
    hitting.appendChild(hittingInput);
    hitting.appendChild(break2);
  }
}

function parseDate() {
  const dateInput = document.getElementById("date");
  const dateValue = dateInput.value;
  const date = new Date(dateValue);
  return `${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear().toString().slice(2)}`;
}

function generateText() {
  generateHeader();
  generateHittingStats();
  generatePitchingStats();
  outputTextArea.value = outputString;
}

function generateHittingStats() {
  for (let i = 0; i < 15; i++) {
    player = document.getElementById(`hitting-stats-${i+1}`);
    if (i < 9) {
      outputString += `${i+1}. ${player.value}\n`;
    }
    else {
      if (player.value != '') {
        outputString += `${player.value}\n`;
      }
    }
  }
}

function generatePitchingStats() {
  outputString += `\n[b][u]Cardinals Pitching Stats, Updated ${parseDate()}[/u][/b]\n`
  for (let i = 0; i < 15; i++) {
    player = document.getElementById(`pitching-stats-${i+1}`);
    if (i < 5) {
      outputString += `${i+1}. ${player.value}\n`;
    }
    else {
      if (player.value != '') {
        outputString += `${player.value}\n`;
      }
    }
  }
}

function generateHeader() {
  outputString = '[FONT=TAHOMA]\n';
  outputString += `[b][u]Cardinals Hitting Stats, Updated ${parseDate()}[/u][/b]\n`;
}

function copyText() {
  outputTextArea.select();
  document.execCommand("copy");
  document.body.removeChild(input);
}

generateBtn.addEventListener("click", generateText);
copyButton.addEventListener("click", copyText);

populateForm();
