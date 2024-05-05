import { useEffect, useState } from "react";
import { MenuApi, SpringbeeMenuApi, proxyMenuApi } from "../component/Const";
export const useRestroMenuApi = (resId) => {
  const [apidata, setapidata] = useState("");
  useEffect(() => {
    const fetchData = async () => {
      try {
        // Attempt to fetch data using the proxy
        const jsone = await fetch(`${proxyMenuApi}${resId}`);
        const data = await jsone.json();
        setapidata(data);
      } catch (error) {
        // If the first fetch fails, log the error and attempt to fetch data directly
        console.log('Failed to fetch menu API using proxy API now');
        try {
          const jsone = await fetch(`${MenuApi}${resId}`);
          const data = await jsone.json();
          setapidata(data);
        } catch (error) {
          // If both fetch attempts fail, use scrapingbee
          console.log('Failed to fetch menu API directly. Trying scrapingbee...');
          console.log(`${MenuApi}${resId}`)
          const url = (`${SpringbeeMenuApi}${resId}`);
          const options = {
            method: 'GET',
            headers: {
              'X-RapidAPI-Key': '556be648a7mshb9939a516bcc2eap107878jsne68c8cc812bf',
              'X-RapidAPI-Host': 'scrapingbee.p.rapidapi.com'
            }
          };

          try {
            const response = await fetch(url, options);
            const result = await response.text();
            const jsonData = JSON.parse(result); // Parse the JSON data
            setapidata(jsonData); // Set the parsed JSON data to apidata
            console.log(jsonData); // Optionally log the parsed data
          }catch (error) {
            console.error(error);
          }
        }
      }
    };
    fetchData();
  }, [resId]);


  return apidata;
};
