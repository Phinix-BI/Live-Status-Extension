document.addEventListener('DOMContentLoaded', function() {
  
    const onlineToggle = document.getElementById('onlineToggle');
    const offlineToggle = document.getElementById('offlineToggle');
    const dndToggle = document.getElementById('dndToggle');
    const chillToggle = document.getElementById('chillToggle');
    const busyToggle = document.getElementById('busyToggle');

    let apiKey ;

    document.getElementById('submit').addEventListener('click', (e) => {
      e.preventDefault();
      apiKey = document.getElementById('apikey').value;
      console.log(apiKey);
  });

    const heading = document.querySelector('h2');

    const toggles = document.querySelectorAll('input[type="checkbox"]');
    
  toggles.forEach(function(toggle) {
      toggle.addEventListener('change', function() {
          const value = this.value;
          heading.textContent = value;

          makeAPICall(value);
      });
  });

  const api_endpoint = 'https://live-status-mu.vercel.app/api/v1/admin/update/status';
  const api_key = "MIIBVAIBADANBgkqhkiG9w0BAQEFAASCAT4wggE6AgEAAkEAq3" || apiKey;

  function makeAPICall(status) {
    // Replace 'your_api_endpoint_here' with your actual API endpoint
    fetch(api_endpoint, {
        method: 'PATCH', // or 'GET', depending on your API
        body: JSON.stringify({ status: status }),
        headers: {
            'Content-Type': 'application/json',
            'x-access-token': api_key
        }
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(data => {
        console.log('API call successful:', data);
        // Handle success response as needed
    })
    .catch(error => {
        console.error('Error making API call:', error);
        // Handle errors as needed
    });
}
  
    // Event listener for online toggle
    onlineToggle.addEventListener('change', function() {
      if (this.checked) {
        offlineToggle.checked = false;
        dndToggle.checked = false;
        chillToggle.checked = false;
        busyToggle.checked = false;

      } else {
        offlineToggle.checked = true;
      }
    });
  
    // Event listener for offline toggle
    offlineToggle.addEventListener('change', function() {
      if (this.checked) {
        onlineToggle.checked = false;
        dndToggle.checked = false;
        chillToggle.checked = false;
        busyToggle.checked = false;
      } else {
        onlineToggle.checked = true;
      }
    });
  
    // Event listener for do not disturb toggle
    dndToggle.addEventListener('change', function() {
      if (this.checked) {
        onlineToggle.checked = false;
        offlineToggle.checked = false;
        chillToggle.checked = false;
        busyToggle.checked = false;
      } else {
        offlineToggle.checked = true;
      }
    });

    chillToggle.addEventListener('change', function() {
      if (this.checked) {
        onlineToggle.checked = false;
        offlineToggle.checked = false;
        dndToggle.checked = false;
        busyToggle.checked = false;
      } else {
        offlineToggle.checked = true;
      }
    });

    busyToggle.addEventListener('change', function() {
      if (this.checked) {
        onlineToggle.checked = false;
        offlineToggle.checked = false;
        dndToggle.checked = false;
        chillToggle.checked = false;
      } else {
        offlineToggle.checked = true;
      }
    });
  });
  