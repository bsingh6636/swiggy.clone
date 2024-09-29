 // It's recommended to use environment variables for 
 // sensitive information like API keys.
 const API_KEY = 'f3606db5a7ed0f51';
 const EDUCORS_URL ='https://educorssolver.host/api/getData';

 // Function to get data from the API
 export async function fetchproxy(Target) {
    const response = await fetch(EDUCORS_URL, {
      method: 'POST',
      headers: {'Content-Type': 'application/json' },
      body: JSON.stringify({ ApiKey: API_KEY, Target }),
    });
    const data = await response.json();
    console.log('Data fetched successfully:', data);
    return data;
    }
    
   