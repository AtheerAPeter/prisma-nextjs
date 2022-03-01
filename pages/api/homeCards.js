import { resData } from "../../helpers/tools";

export default async (req, res) => {
  return resData(res, {
    sections: [
      {
        id: 1,
        class: "Dish",
        image: "https://i.ibb.co/5Tt4jFw/1.png",
        direction: "left",
        cardColor: "#C32A39",
        description: "most popular dishes",
        key: "popular",
        platform: "app",
        rank: 1,
        title: "Popular Dishes",
      },
      {
        id: 2,
        class: "Dish",
        image: "https://i.ibb.co/L9MRcWX/Group-9.png",
        direction: "right",
        cardColor: "#DB525F",
        description: "dishes for healthy life",
        key: "healthy",
        platform: "app",
        rank: 2,
        title: "Healthy Dishes",
      },
      {
        id: 3,
        class: "FamilyMeal",
        image: "https://i.ibb.co/J7HKkw4/Group-13.png",
        direction: "left",
        cardColor: "#F08A5C",
        description: "Group of dishes combined together",
        key: "family_meals",
        platform: "app",
        rank: 3,
        title: "Family Meals",
      },
      {
        id: 5,
        class: "Dish",
        image: "https://i.ibb.co/DkxyR2z/1-2.png",
        direction: "right",
        cardColor: "#F89E64",
        description: "Past dishes",
        key: "past",
        platform: "app",
        rank: 5,
        title: "Past Dishes",
      },
    ],
  });
};
