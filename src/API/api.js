
const BASE_URL = 'https://api.fungenerators.com';
const apiKey = 'GuLirjdkOJ2KvDLZLglUnAeF';

export async function fetchRandomFacts() {
  try {
    const response = await fetch(`${BASE_URL}/fact/random`, {
      headers: { 'X-Fungenerators-Api-Secret': apiKey }
    });
    if (!response.ok) {
      //throw new Error(`HTTP error! status: ${response.status}`);
      return;
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Failed to fetch facts:", error);
  }
}

export async function fetchFactsByCategory(category) {
  const fixedCategory= category.split(' ').join('-');
  try {
    const response = await fetch(`${BASE_URL}/fact/random?category=${fixedCategory}`, {
      headers: { 'X-Fungenerators-Api-Secret': apiKey }
    });
    if (!response.ok) {
      //throw new Error(`HTTP error! status: ${response.status}`);
      return;
    }
    const data = await response.json();
    return data;
  } catch (error) {

    console.error("Failed to fetch facts:", error);
  }
}


export async function fetchTodayInHistory() {
  try {
    const response = await fetch(`${BASE_URL}/fact/onthisday/event`, {
      headers: { 'X-Fungenerators-Api-Secret': apiKey }
    });
    if (!response.ok) {
      //throw new Error(`HTTP error! status: ${response.status}`);
      return;
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Failed to fetch facts:", error);
  }
}