// Optional: Add animations or scroll reveal
document.addEventListener('DOMContentLoaded', () => {
  // Example: animate skill boxes
  const skills = document.querySelectorAll('.skill');
  skills.forEach((skill, i) => {
    setTimeout(() => {
      skill.style.transform = 'scale(1.1)';
      setTimeout(() => skill.style.transform = 'scale(1)', 300);
    }, i * 200);
  });
});
