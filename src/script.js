// Function to fetch advice from the API
async function fetchAdvice() {
    try {
      const response = await fetch('https://api.adviceslip.com/advice');
      const data = await response.json();
      return data.slip;
    } catch (error) {
      console.error('Error fetching advice:', error);
      return null;
    }
  }
  
  // Function to display the fetched advice and its ID
  function displayAdvice(advice) {
    const adviceTitleElement = document.querySelector('.advice-title');
    const quoteElement = document.querySelector('.quote');
  
    if (advice) {
      adviceTitleElement.textContent = `Advice #${advice.id}`;
      quoteElement.textContent = advice.advice;
    } else {
      adviceTitleElement.textContent = 'Failed to fetch advice.';
      quoteElement.textContent = '';
    }
  }
  
  // Event listener for the button click
  const button = document.querySelector('.btn');
  button.addEventListener('click', async () => {
    const advice = await fetchAdvice();
    displayAdvice(advice);
  });
  
  // Initial fetch and display of advice
  window.addEventListener('DOMContentLoaded', async () => {
    const advice = await fetchAdvice();
    displayAdvice(advice);
  });
  