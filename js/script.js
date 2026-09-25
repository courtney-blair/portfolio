const pills = document.querySelectorAll('.interests li')

pills.forEach(pill => {
  pill.addEventListener('click', () => {
    // what should happen here?
    window.open(pill.dataset.link, '_blank'); // This line is just a placeholder. You can replace it with the desired action, such as navigating to a different page or updating the content dynamically. 
  });
});

//When a pill is clicked, you might want to toggle its active state, update the UI to reflect the selection, 
// or perform some action based on the selected interest. 
// Here's an example of what could happen inside the click event listener:

