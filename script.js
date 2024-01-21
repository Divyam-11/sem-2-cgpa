document.getElementById('calculate-btn').addEventListener('click', function() {
  const subjectSelects = document.querySelectorAll('.grade-select');
  const subjectCredits = {
    "Physics": 4.5,
    "Manufacturings": 3,
    "Proff Com": 3,
    "Mathematics": 3.5,
    "Engineering Drawing": 4
    // Add other subjects and their credits here
  };

  const gradePoints = {
      'A+': 10, 'A': 10, 'A-': 9, 'B': 8, 'B-': 7, 'C': 6, 'C-': 5, 'E': 2
    // Adjust the grade points based on your grading system
  };

  let totalCredits = 0;
  let totalPoints = 0;

  subjectSelects.forEach((select, index) => {
    const grade = select.value;
    const subjectName = select.parentElement.querySelector('label').textContent.replace(' -', '');
    const credits = subjectCredits[subjectName] || 0;

    if (gradePoints.hasOwnProperty(grade)) {
      totalCredits += credits;
      totalPoints += gradePoints[grade] * credits;
    }
  });

  const cgpa = totalCredits !== 0 ? totalPoints / totalCredits : 0;
  document.getElementById('result').textContent = `CGPA: ${cgpa.toFixed(2)}`;
});
