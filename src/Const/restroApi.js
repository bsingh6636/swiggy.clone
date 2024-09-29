

export const fetchdata = async () => {
  try {
    const API_KEY = 'f3606db5a7ed0f51';
    const EDUCORS_URL ='https://educorssolver.host/api/getData';
    const TARGET_URL ='https://www.swiggy.com/dapi/restaurants/list/v5?lat=13.1017167&lng=77.634826600000011';

    const response = await fetch(EDUCORS_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ ApiKey: API_KEY, Target: TARGET_URL }),
    });
    const jsonResponse = await response.json();

    const restaurantList = extractRestaurants(jsonResponse);
    return restaurantList;

  } catch (error) {
    console.error('Error fetching from API with :', error);

  }
};

const extractRestaurants = (json) => {
  return json.data.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants ||
    json.data.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants ||
    json.data.cards[3]?.card?.card?.gridElements?.infoWithStyle?.restaurants ||
    [];
};
