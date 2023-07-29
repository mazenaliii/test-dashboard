


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
  sidebar.classList.toggle('show');
}

function closeSidebar() {
  const sidebar = document.querySelector('.sidebar');
  sidebar.classList.remove('show');
}


});

const prefixInput = document.getElementById("prefixInput");
            function toggleSidebar() {
                const sidebar = document.querySelector('.sidebar');
                sidebar.classList.toggle('show');
            }

            function closeSidebar() {
                const sidebar = document.querySelector('.sidebar');
                sidebar.classList.remove('show');
            }

            let originalPrefix;

            function enableInput() {
                const prefixInput = document.getElementById("prefixInput");
                const saveCancelButtons = document.getElementById("saveCancelButtons");


                originalPrefix = prefixInput.value;

                prefixInput.removeAttribute("disabled");
                saveCancelButtons.style.display = "block";
                saveCancelButtons.classList.add("showButtons");
            }

            function savePrefix() {
                const prefixInput = document.getElementById("prefixInput");
                if (prefixInput.value === '') {
                    return alert('Prefix cannot be empty.')
                }
                const saveCancelButtons = document.getElementById("saveCancelButtons");
                prefixInput.setAttribute("disabled", true);
                saveCancelButtons.style.display = "none";
                saveCancelButtons.classList.remove("showButtons");
                saveCancelButtons.classList.add("hideButtons");
            }

            function cancelEdit() {
                const prefixInput = document.getElementById("prefixInput");
                const saveCancelButtons = document.getElementById("saveCancelButtons");


                prefixInput.value = originalPrefix;

                prefixInput.setAttribute("disabled", true);
                saveCancelButtons.style.display = "none";
                saveCancelButtons.classList.remove("showButtons");
                saveCancelButtons.classList.add("hideButtons");
            }

            function toggleSidebar() {
              const sidebar = document.querySelector('.sidebar');
              sidebar.classList.toggle('show');
          
              const logsSwitch = document.querySelector('.check-box input[type="checkbox"]');
              const isLogsSwitchEnabled = logsSwitch.checked;
          
              const cards = document.querySelectorAll('.card');
          
              if (isLogsSwitchEnabled) {
                cards.forEach((card) => {
                  card.classList.add('card-visible');
                  card.classList.remove('card-hidden');
                });
              } else {
                cards.forEach((card) => {
                  card.classList.add('card-hidden');
                  card.classList.remove('card-visible');
                });
              }
            }
          
            function enableDropdownButtons() {
              const dropdownButtons = document.querySelectorAll('.dropdown-toggle');
              dropdownButtons.forEach((button) => {
                button.classList.remove('disabled');
              });
            }

            function disableDropdownButtons() {
              const dropdownButtons = document.querySelectorAll('.dropdown-toggle');
              dropdownButtons.forEach((button) => {
              });
            }
          
            const logsSwitch = document.querySelector('.check-box input[type="checkbox"]');
            logsSwitch.addEventListener('change', () => {
              toggleSidebar();
              if (logsSwitch.checked) {
                enableDropdownButtons();
              } else {
              }
            });
