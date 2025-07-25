let trajectoryChartInstance = null;

function calculateBallistics() {
  const velocity = parseFloat(document.getElementById('velocity').value);
  const bc = parseFloat(document.getElementById('bc').value);
  const zeroRange = parseFloat(document.getElementById('zeroRange').value);
  const targetRange = parseFloat(document.getElementById('targetRange').value);
  const windSpeed = parseFloat(document.getElementById('windSpeed').value);
  const windAngle = parseFloat(document.getElementById('windAngle').value);

  if (isNaN(velocity) || isNaN(bc) || isNaN(zeroRange) || isNaN(targetRange)) {
    alert('Please enter valid values');
    return;
  }

  const gravity = 32.174; // ft/s²
  const rangeYards = targetRange;
  const rangeFeet = rangeYards * 3;

  // Simplified time of flight and drop calculation
  const timeOfFlight = rangeFeet / velocity;
  const drop = 0.5 * gravity * Math.pow(timeOfFlight, 2);
  const dropInches = drop * 12;
  const dropCm = dropInches * 2.54;

  document.getElementById('dropResult').textContent = `${dropInches.toFixed(2)} in / ${dropCm.toFixed(2)} cm`;
  document.getElementById('tofResult').textContent = timeOfFlight.toFixed(3);

  // Wind drift
  const windAngleRadians = windAngle * (Math.PI / 180);
  const crosswind = windSpeed * Math.sin(windAngleRadians);
  const driftFeet = crosswind * timeOfFlight;
  const driftInches = driftFeet * 12;
  const driftCm = driftInches * 2.54;

  document.getElementById('driftResult').textContent = `${driftInches.toFixed(2)} in / ${driftCm.toFixed(2)} cm`;

  document.getElementById('results').style.display = 'block';

  drawTrajectoryChart(velocity, bc, zeroRange, targetRange);
}

function drawTrajectoryChart(velocity, bc, zeroRange, targetRange) {
  const gravity = 32.174;
  const labels = [];
  const dropData = [];

  for (let r = 0; r <= targetRange; r += 25) {
    const rangeFeet = r * 3;
    const time = rangeFeet / velocity;
    const drop = 0.5 * gravity * Math.pow(time, 2) * 12;
    labels.push(r);
    dropData.push(parseFloat(drop.toFixed(2)));
  }

  if (trajectoryChartInstance) {
    trajectoryChartInstance.destroy();
  }

  const ctx = document.getElementById('trajectoryChart').getContext('2d');
  trajectoryChartInstance = new Chart(ctx, {
    type: 'line',
    data: {
      labels: labels,
      datasets: [{
        label: 'Bullet Drop (inches)',
        data: dropData,
        borderColor: 'blue',
        borderWidth: 2,
        fill: false,
        tension: 0.2
      }]
    },
    options: {
      responsive: false,
      scales: {
        x: {
          title: {
            display: true,
            text: 'Range (yards)'
          }
        },
        y: {
          title: {
            display: true,
            text: 'Drop (inches)'
          }
        }
      }
    }
  });
}


document.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById('ballistics-form');
  if (form) {
    form.addEventListener('submit', function(event) {
      event.preventDefault();
      calculateBallistics();
    });
  }
});