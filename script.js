// Dark Mode Toggle
const themeBtn = document.getElementById('theme-btn');
themeBtn.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
  themeBtn.textContent = document.body.classList.contains('dark-mode') ? '☀️ Light Mode' : '🌙 Dark Mode';
});

// Calorie Calculator
document.getElementById('calorie-form').addEventListener('submit', (e) => {
  e.preventDefault();
  const age = document.getElementById('age').value;
  const gender = document.getElementById('gender').value;
  const height = document.getElementById('height').value;
  const weight = document.getElementById('weight').value;
  const activity = document.getElementById('activity').value;

  let bmr;
  if (gender === 'male') {
    bmr = 10 * weight + 6.25 * height - 5 * age + 5;
  } else {
    bmr = 10 * weight + 6.25 * height - 5 * age - 161;
  }

  const calories = bmr * activity;
  document.getElementById('calorie-result').innerHTML = `Your daily calorie needs: <strong>${calories.toFixed(2)}</strong>`;
});

// BMI Calculator
document.getElementById('bmi-form').addEventListener('submit', (e) => {
  e.preventDefault();
  const height = document.getElementById('bmi-height').value / 100;
  const weight = document.getElementById('bmi-weight').value;

  const bmi = (weight / (height * height)).toFixed(2);
  document.getElementById('bmi-result').innerHTML = `Your BMI: <strong>${bmi}</strong>`;
});

// Food Database Chart
const ctx = document.getElementById('calorie-chart').getContext('2d');
const calorieChart = new Chart(ctx, {
  type: 'bar',
  data: {
    labels: foodData.map(item => item.name),
    datasets: [{
      label: 'Calories per 100g',
      data: foodData.map(item => item.calories),
      backgroundColor: '#007BFF',
      borderColor: '#0056b3',
      borderWidth: 1,
    }],
  },
  options: {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  },
});