const LAUNCH = new Date('2026-04-18T09:00:00-04:00').getTime();

const daysEl    = document.getElementById('cd-days');
const hoursEl   = document.getElementById('cd-hours');
const minutesEl = document.getElementById('cd-minutes');
const secondsEl = document.getElementById('cd-seconds');
const srEl      = document.getElementById('cd-sr-announcement');

function pad(n: number): string {
  return String(Math.max(0, n)).padStart(2, '0');
}

let lastSRMinute = -1;

function tick(): void {
  const now  = Date.now();
  const diff = LAUNCH - now;

  if (diff <= 0) {
    if (daysEl)    daysEl.textContent    = '00';
    if (hoursEl)   hoursEl.textContent   = '00';
    if (minutesEl) minutesEl.textContent = '00';
    if (secondsEl) secondsEl.textContent = '00';
    if (srEl)      srEl.textContent      = 'Jake Fixes Tech is now open!';
    return;
  }

  const days    = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours   = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((diff % (1000 * 60)) / 1000);

  if (daysEl)    daysEl.textContent    = pad(days);
  if (hoursEl)   hoursEl.textContent   = pad(hours);
  if (minutesEl) minutesEl.textContent = pad(minutes);
  if (secondsEl) secondsEl.textContent = pad(seconds);

  if (minutes !== lastSRMinute && srEl) {
    lastSRMinute = minutes;
    srEl.textContent = `${days} days, ${hours} hours, and ${minutes} minutes until Jake Fixes Tech opens.`;
  }
}

tick();
setInterval(tick, 1000);