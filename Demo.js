function showDemo() {
    // Hide the current content
    document.getElementById('therapistControls').style.display = 'none';
    document.getElementById('availability').style.display = 'none';
    document.getElementById('myTable').style.display = 'none';
    document.getElementById('newTable').style.display = 'none';
    // Show the demo container
    document.getElementById('demoContainer').style.display = 'block';
}
function hideDemo() {
    // Show the original content
    document.getElementById('therapistControls').style.display = 'block';
    document.getElementById('availability').style.display = 'block';
    document.getElementById('myTable').style.display = 'block';
    document.getElementById('newTable').style.display = 'block';
    // Hide the demo container
    document.getElementById('demoContainer').style.display = 'none';
}
