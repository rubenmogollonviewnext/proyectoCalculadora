
window.onload = function() {
    const buttons = Array.from(document.querySelectorAll('.btn:not(#clearLocalStorage)'));
    const display = document.querySelector('#display');
    const clearButton = document.querySelector('.btn-secondary:not(#clearLocalStorage)');
    const resetButton = document.querySelector('.btn-info');
    const localStorageContent = document.querySelector('#localStorageContent');
    const clearLocalStorageButton = document.querySelector('#clearLocalStorage');

    const operations = JSON.parse(localStorage.getItem('operations')) || [];
 
    buttons.forEach((button) => {
        button.addEventListener('click', () => {
 
          if (button.textContent === '=') {
            try {
              const operation = display.value;
              const result = eval(operation);
              display.value = result;
     
              const operationResult = `${operation} = ${result}`;
              operations.push(operationResult);
              localStorage.setItem('operations', JSON.stringify(operations));
              localStorageContent.innerHTML = operations.join('<br>');
            } catch {
              display.value = 'Error';
            }
          } else if (button.textContent === 'Borrar' || button.textContent === 'AC') {
            return;
 
          } else {
            display.value += button.textContent;
          }
        });
      });
 
    clearButton.addEventListener('click', () => {
        display.value = display.value.slice(0, -1);
    });
 
    resetButton.addEventListener('click', () => {
        display.value = '';
    });

    clearLocalStorageButton.addEventListener('click', () => {
        localStorage.clear();
        operations.length = 0;
        localStorageContent.textContent = '';
    });
};