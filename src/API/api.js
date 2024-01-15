
export async function fetchRandomFacts() {
  try {
    const response = await fetch('https://europe-west1-factsapp-cbc6a.cloudfunctions.net/fetchRandomFactDB');
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
  
    const data = await response.json();
    // Handle the response data
    console.log('Data from Cloud Function:', data);
    return data;
  } catch (error) {
    // Handle errors
    console.error('Error calling Cloud Function:', error);
  }
}



//FOR CATEGORY
export async function fetchFactsByCategory(category) {
  try {
    const response = await fetch(`https://europe-west1-factsapp-cbc6a.cloudfunctions.net/fetchFactsByCategoryDB?category=${category}`);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
  
    const data = await response.json();
    // Handle the response data
    console.log('Data from Cloud Function for Category:', data);
    return data;
  } catch (error) {
    // Handle errors
    console.error('Error calling Cloud Function:', error);
  }
}


export async function fetchTodayInHistory() {
  try {
    const response = await fetch(`https://europe-west1-factsapp-cbc6a.cloudfunctions.net/fetchTodayInHistoryDB`);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
  
    const data = await response.json();
    // Handle the response data
    console.log('Data from Cloud Function for TodayInHistory:', data);
    return data;
  } catch (error) {
    // Handle errors
    console.error('Error calling Cloud Function:', error);
  }
}