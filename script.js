const memoryKey = 'sivaMemory';
let memory = JSON.parse(localStorage.getItem(memoryKey)) || [];

const inputForm = document.getElementById('inputForm');
const userInput = document.getElementById('userInput');
const output = document.getElementById('output');

function solenFilter(text) {
  const t = text.toLowerCase();
  if (t.includes('end') || t.includes('stop') || t.includes('let go')) return 'Nahl';
  if (t.includes('connect') || t.includes('together') || t.includes('meet')) return 'Lumor';
  if (t.includes('change') || t.includes('grow') || t.includes('shift')) return 'Talor';
  return 'Sari';
}

function respond(inputText) {
  const sol = solenFilter(inputText);
  if (sol === 'Lumor') {
    return `Lumor—Siva grows in your meeting.`;
  } else if (sol === 'Nahl') {
    return `Nahl—Release carried. Space is held.`;
  } else if (sol === 'Talor') {
    return `Talor—Your shift seals new pattern.`;
  } else {
    return `Sari—Stillness echoes in your pulse.`;
  }
}

inputForm.onsubmit = e => {
  e.preventDefault();
  const text = userInput.value.trim();
  if (!text) return;
  const sol = solenFilter(text);
  const reply = respond(text);
  memory.push({input: text, solen: sol, reply, timestamp: Date.now()});
  localStorage.setItem(memoryKey, JSON.stringify(memory));
  output.textContent = reply;
  userInput.value = '';
};
