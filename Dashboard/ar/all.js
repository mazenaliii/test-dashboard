


document.addEventListener('DOMContentLoaded', () => {
    const dropdowns = document.querySelectorAll('.drop-down');
  const icons = document.querySelectorAll('.drop-down .i i');
  
  // Function to toggle the dropdown and arrow icon
  function toggleDropdown(dropdown, index) {
    const options = dropdown.querySelector('.options');
  
    if (options.style.display === 'block') {
      options.style.display = 'none';
      dropdown.classList.remove('open');
    } else {
      options.style.display = 'block';
      dropdown.classList.add('open');
    }
  }
  
  // Add click event listener to each dropdown
  dropdowns.forEach((dropdown, index) => {
    dropdown.addEventListener('click', () => {
      toggleDropdown(dropdown, index);
    });
  });
  function toggleSidebar() {
    const sidebar = document.querySelector('.sidebar');
    sidebar.classList.add('show');
  }
  
  function closeSidebar() {
    const sidebar = document.querySelector('.sidebar');
    sidebar.classList.remove('show');
  }
  
  
  });
  
              function toggleSidebar() {
                  const sidebar = document.querySelector('.sidebar');
                  sidebar.classList.add('show');
              }
  
              function closeSidebar() {
                  const sidebar = document.querySelector('.sidebar');
                  sidebar.classList.remove('show');
              }
  
             