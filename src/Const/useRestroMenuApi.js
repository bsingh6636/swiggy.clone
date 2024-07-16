import { useEffect, useState } from "react";
import { MenuApi, SpringbeeMenuApi, proxyMenuApi } from "./Const";
export const useRestroMenuApi = (resId) => {
  const [apidata, setapidata] = useState("");
  useEffect(() => {
    const fetchData = async () => {
      try {
        // Attempt to fetch data using the proxy
        const jsone = await fetch(`${MenuApi}${resId}`);
        const data = await jsone.json();
        setapidata(data);
      } catch (error) {
        // If the first fetch fails, log the error and attempt to fetch data directly
        console.log('Failed to fetch menu API using proxy API now');
        try {
          const jsone = await fetch(`${proxyMenuApi}${resId}`);
          const data = await jsone.json();
          setapidata(data);
        } catch (error) {
          // If both fetch attempts fail, use scrapingbee
          console.log('Failed to fetch menu API directly. Trying scrapingbee...');
        try {
       
            const jsone = await fetch(`${SpringbeeMenuApi}${resId}`);
            const data = await jsone.json();
            setapidata(data);
          } catch (error) {
            console.log(error,'Failed to fetch menu API using proxy API now');
           
          }
        }
      }
    };
    fetchData();
  }, [resId]);


  return apidata;
};

