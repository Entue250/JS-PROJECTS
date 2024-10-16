// Create and append a textarea
const textarea = document.createElement('textarea');
textarea.style.width = '300px'; // Optional: Control size
textarea.style.height = '100px';
document.body.append(textarea);

// Create and append a button with the label "Click"
const button = document.createElement('button');
button.textContent = 'Click';
button.style.width = '150px';
button.style.height = '50px';
button.style.fontSize = '50px'; // Adjusted font size for better visibility
document.body.append(button);

// Create and append a div to display the output
const outputDiv = document.createElement('div');
outputDiv.classList.add('output');
document.body.append(outputDiv);

// Add click event listener to the button
button.addEventListener('click', function () {
  const text = textarea.value;
  const rows = text.split('\n');
  
  // Clear previous output
  outputDiv.innerHTML = '';

  for (const [i, row] of rows.entries()) {
    const [first, second] = row.toLowerCase().trim().split('_');

    const output = `${first}${second.replace(
      second[0],
      second[0].toUpperCase()
    )}`;

    // Create a row container
    const rowDiv = document.createElement('div');
    rowDiv.classList.add('row');

    // Create spans for content and checkmarks
    const contentSpan = document.createElement('span');
    contentSpan.classList.add('content');
    contentSpan.textContent = output;

    const checkmarksSpan = document.createElement('span');
    checkmarksSpan.classList.add('checkmarks');
    checkmarksSpan.textContent = '✅'.repeat(i + 1);
    checkmarksSpan.setAttribute('data-level', i + 1); // Store level
    checkmarksSpan.style.setProperty('--level', i + 1); // CSS variable

    // Append spans to the row, and row to the output div
    rowDiv.append(contentSpan, checkmarksSpan);
    outputDiv.append(rowDiv);
  }

  // Scroll to the output div
  outputDiv.scrollIntoView({ behavior: 'smooth', block: 'start' });
});