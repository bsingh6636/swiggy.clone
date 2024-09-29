// import { useEffect, useState } from "react";
// import { MenuApi } from "./Const";
// import { fetchproxy } from "./fetchproxy";


// export const useRestroMenuApi = (resId) => {
//   const TARGET_URL = MenuApi + resId;
//   const [apidata, setapidata] = useState("");
//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const data =await fetchproxy(TARGET_URL)

//         setapidata(data);
//       } catch (error) {

//         console.log('Failed to fetch menu ');

//       }
//     };
//     fetchData();
//   }, [resId]);


//   return apidata;
// };

