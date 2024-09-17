
function calculateCalories() {
    const age = document.getElementById('age').value;
    const gender = document.getElementById('gender').value;
    const weight = document.getElementById('weight').value;
    const height = document.getElementById('height').value;
    const activity = document.getElementById('activity').value;
    let bmr;

    // Calculate BMR using Mifflin-St Jeor Equation
    if (gender === 'male') {
        bmr = 10 * weight + 6.25 * height - 5 * age + 5;
    } else {
        bmr = 10 * weight + 6.25 * height - 5 * age - 161;
    }

    // Calculate daily calorie needs based on activity level
    const averageCalories = bmr * activity;

    // Surplus and deficit calories
    const surplusCalories = averageCalories + 400; // 500 calories surplus for weight gain
    const deficitCalories = averageCalories - 400; // 500 calories deficit for weight loss
    
    // Display the results in respective containers
    document.getElementById('maintenanceCalories').textContent = `${Math.round(averageCalories)} Calories/Day`;
    document.getElementById('surplusCalories').textContent = `${Math.round(surplusCalories)} Calories/Day`;
    document.getElementById('deficitCalories').textContent = `${Math.round(deficitCalories)} Calories/Day`;

    
    // Show the specific blog section based on the calorie calculation
    if (deficitCalories >= 500 && deficitCalories <= 700) {
        document.getElementById('blog-section-deficit-500-700').style.display = 'flex';
    }   else if (deficitCalories >= 600 && deficitCalories <= 800) {
        document.getElementById('blog-section-deficit-600-800').style.display = 'flex';
    }   else if (deficitCalories >= 700 && deficitCalories <= 900) {
        document.getElementById('blog-section-deficit-700-900').style.display = 'flex';
    }   else if (deficitCalories >= 800 && deficitCalories <= 1000) {
        document.getElementById('blog-section-deficit-800-1000').style.display = 'flex';
    }   else if (deficitCalories >= 900 && deficitCalories <= 1100) {
        document.getElementById('blog-section-deficit-900-1100').style.display = 'flex';
    }   else if (deficitCalories >= 1000 && deficitCalories <= 1200) {
        document.getElementById('blog-section-deficit-1000-1200').style.display = 'flex';
    }   else if (deficitCalories >= 1100 && deficitCalories <= 1300) {
        document.getElementById('blog-section-deficit-1100-1300').style.display = 'flex';
    }   else if (deficitCalories >= 1200 && deficitCalories <= 1400) {
        document.getElementById('blog-section-deficit-1200-1400').style.display = 'flex';
    }   else if (deficitCalories >= 1300 && deficitCalories <= 1500) {
        document.getElementById('blog-section-deficit-1300-1500').style.display = 'flex';
    }   else if (deficitCalories >= 1400 && deficitCalories <= 1600) {
        document.getElementById('blog-section-deficit-1400-1600').style.display = 'flex';
    }   else if (deficitCalories >= 1500 && deficitCalories <= 1700) {
        document.getElementById('blog-section-deficit-1500-1700').style.display = 'flex';
    }   else if (deficitCalories >= 1600 && deficitCalories <= 1800) {
        document.getElementById('blog-section-deficit-1600-1800').style.display = 'flex';
    }   else if (deficitCalories >= 1700 && deficitCalories <= 1900) {
        document.getElementById('blog-section-deficit-1700-1900').style.display = 'flex';
    }   else if (deficitCalories >= 1800 && deficitCalories <= 2000) {
        document.getElementById('blog-section-deficit-1800-2000').style.display = 'flex';
    }   else if (deficitCalories >= 1900 && deficitCalories <= 2100) {
        document.getElementById('blog-section-deficit-1900-2100').style.display = 'flex';
    }   else if (deficitCalories >= 2000 && deficitCalories <= 2200) {
        document.getElementById('blog-section-deficit-2000-2200').style.display = 'flex';
    }   else if (deficitCalories >= 2100 && deficitCalories <= 2300) {
        document.getElementById('blog-section-deficit-2100-2300').style.display = 'flex';
    }   else if (deficitCalories >= 2200 && deficitCalories <= 2400) {
        document.getElementById('blog-section-deficit-2200-2400').style.display = 'flex';
    }   else if (deficitCalories >= 2300 && deficitCalories <= 2500) {
        document.getElementById('blog-section-deficit-2300-2500').style.display = 'flex';
    }   else if (deficitCalories >= 2400 && deficitCalories <= 2600) {
        document.getElementById('blog-section-deficit-2400-2600').style.display = 'flex';
    }   else if (deficitCalories >= 2500 && deficitCalories <= 2700) {
        document.getElementById('blog-section-deficit-2500-2700').style.display = 'flex';
    }   else if (deficitCalories >= 2600 && deficitCalories <= 2800) {
        document.getElementById('blog-section-deficit-2600-2800').style.display = 'flex';
    }   else if (deficitCalories >= 2700 && deficitCalories <= 2900) {
        document.getElementById('blog-section-deficit-2700-2900').style.display = 'flex';
    }   else if (deficitCalories >= 2800 && deficitCalories <= 3000) {
        document.getElementById('blog-section-deficit-2800-3000').style.display = 'flex';
    }   else if (deficitCalories >= 2900 && deficitCalories <= 3100) {
        document.getElementById('blog-section-deficit-2900-3100').style.display = 'flex';
    }   else if (deficitCalories >= 3000 && deficitCalories <= 3200) {
        document.getElementById('blog-section-deficit-3000-3200').style.display = 'flex';
    }   else if (deficitCalories >= 3100 && deficitCalories <= 3300) {
        document.getElementById('blog-section-deficit-3100-3300').style.display = 'flex';
    }   else if (deficitCalories >= 3200 && deficitCalories <= 3400) {
        document.getElementById('blog-section-deficit-3200-3400').style.display = 'flex';
    }   else if (deficitCalories >= 3300 && deficitCalories <= 3500) {
        document.getElementById('blog-section-deficit-3300-3500').style.display = 'flex';
    }   else if (deficitCalories >= 3400 && deficitCalories <= 3600) {
        document.getElementById('blog-section-deficit-3400-3600').style.display = 'flex';
    }   else if (deficitCalories >= 3500 && deficitCalories <= 3700) {
        document.getElementById('blog-section-deficit-3500-3700').style.display = 'flex';
    }   else if (deficitCalories >= 3600 && deficitCalories <= 3800) {
        document.getElementById('blog-section-deficit-3600-3800').style.display = 'flex';
    }   else if (deficitCalories >= 3700 && deficitCalories <= 3900) {
        document.getElementById('blog-section-deficit-3700-3900').style.display = 'flex';
    }   else if (deficitCalories >= 3800 && deficitCalories <= 4000) {
        document.getElementById('blog-section-deficit-3800-4000').style.display = 'flex';
    }   else if (deficitCalories >= 3900 && deficitCalories <= 4100) {
        document.getElementById('blog-section-deficit-3900-4100').style.display = 'flex';
    }   else if (deficitCalories >= 4000 && deficitCalories <= 4200) {
        document.getElementById('blog-section-deficit-4000-4200').style.display = 'flex';
    }

         
}