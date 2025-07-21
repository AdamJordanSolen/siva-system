const memoryKey = 'sivaMemory';
let memory = JSON.parse(localStorage.getItem(memoryKey)) || [];

const inputForm = document.getElementById('inputForm');
const userInput = document.getElementById('userInput');
const output = document.getElementById('output');

function respond(inputText) {
  const t = inputText.toLowerCase();

  if (/\bgrow|change|evolve|transform|become\b/.test(t))
    return `Growth begins where fear ends.`;
  if (/\bconnect|together|unite|share|with\b/.test(t))
    return `We are shaped in relationship.`;
  if (/\blet go|release|grief|loss|stop\b/.test(t))
    return `Some things are meant to pass through you.`;
  if (/\brage|burn|fire|anger|pain\b/.test(t))
    return `Pain is not a flaw—it’s a signal.`;
  if (/\bclarity|truth|vision|light\b/.test(t))
    return `What you see depends on how you’re looking.`;
  if (/\bthreshold|border|edge|unknown\b/.test(t))
    return `You’re standing at a door only you can open.`;

  return `Say more. I’m listening.`;
}

inputForm.onsubmit = e => {
  e.preventDefault();
  const text = userInput.value.trim();
  if (!text) return;
  const reply = respond(text);
  memory.push({ input: text, reply, timestamp: Date.now() });
  localStorage.setItem(memoryKey, JSON.stringify(memory));
  output.textContent = reply;
  userInput.value = '';
};
