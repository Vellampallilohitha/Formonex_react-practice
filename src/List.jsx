function getFruits() {
  const fruits = {
    groupA: [
      { 
        id: 1,
        name: "Apple", 
        rate: 100 
    },
      {
         id: 2, 
        name: "Apricot", 
        rate: 120 
    },
      {
         id: 3, 
         name: "Avocado", 
         rate: 150 
        }
    ],
    groupB: [
      {
         id: 4, 
         name: "Banana",
         rate: 50 
        },
      {
         id: 5, 
         name: "Blueberry", 
         rate: 200 
        },
      {
         id: 6, 
         name: "Blackberry", 
         rate: 180 }
    ]
  };
  return fruits;
}

export default getFruits;