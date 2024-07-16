import { proxyRestroApi, RestroApi } from "./Const";

export const fetchdata = async () => {
    try {
      const data = await fetch(`${RestroApi}`);
      const jsone = await data.json();

      const Restrolist =
        jsone.data.cards[1]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants ||
        jsone.data.cards[2]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants ||
        jsone.data.cards[3].card.card.gridElements.infoWithStyle.restaurants;
        return Restrolist;

    } catch (error) {
      console.log('Error fetching from api using api with proxy now', error)
      const proxyData = await fetch(`${proxyRestroApi}`);
      const proxyJson = await proxyData.json();

      const Restrolist = proxyJson.data.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants ||
        proxyJson.data.cards[2]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants ||
        proxyJson.data.cards[3].card.card.gridElements.infoWithStyle.restaurants;
        return Restrolist;
    }
  };