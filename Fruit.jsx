import firebase from 'firebase';

// async function getFruit() {
//   const db = firebase.firestore();
//   const fruitRef = db.collection('fruit').doc('bljXN8DnjxH0tpfX8tLm');
//   const doc = await fruitRef.get();
//   console.log(doc.data());
// }

async function getAllFruits() {
  const db = firebase.firestore();
  const fruitsRef = db.collection('fruit');
  const fruitsArray = [];
  const querySnapshot = await fruitsRef.get();
  querySnapshot.forEach((doc) => {
    fruitsArray.push({
      id: doc.id,
      ...doc.data(),
    });
  });
  console.log(fruitsArray);
  return fruitsArray;
}

function addFruit() {
  // const db = firebase.firestore();
  // const fruitsRef = db.collection('fruit');
}

// function deleteFruit() {
//   const db = firebase.firestore();
//   const fruitRef = db.collection('fruit').doc('Xn1Mxbrzyo9hZOgyETFe');
//   fruitRef.delete();
// }

// async function switchFruitOnSale() {
//   const db = firebase.firestore();
//   const fruitRef = db.collection('fruit').doc('bljXN8DnjxH0tpfX8tLm');
//   const doc = await fruitRef.get();
//   fruitRef.update({
//     onSale: doc.data().onSale === false,
//   });
// }

async function deleteNotApple() {
  const db = firebase.firestore();
  const fruitsRef = db.collection('fruit');
  const querySnapshot = await fruitsRef.where('name', '!=', 'apple').get();
  querySnapshot.forEach((doc) => {
    db.collection('fruit').doc(doc.id).delete();
  });
}

export default {
  // getFruit,
  getAllFruits,
  addFruit,
  // deleteFruit,
  // switchFruitOnSale,
  deleteNotApple,
};
