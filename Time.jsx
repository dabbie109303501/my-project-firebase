import firebase from 'firebase';

function toDateString(time) {
  const date = new Date(time.seconds * 1000);
  const dateString = `${date.getFullYear().toString()}/${
    (date.getMonth() + 1).toString().padStart(2, '0')}/${
    date.getDate().toString().padStart(2, '0')}  ${
    date.getHours().toString().padStart(2, '0')}:${
    date.getMinutes().toString().padStart(2, '0')}:${
    date.getSeconds().toString().padStart(2, '0')}`;
  return dateString;
}

async function getLastestTime() {
  const db = firebase.firestore().collection('time');
  const getAllTime = await db.orderBy('time', 'desc').get();
  const sortArray = [];
  getAllTime.forEach((doc) => {
    sortArray.push({
      ...doc.data().time,
    });
  });
  console.log(toDateString(sortArray[0]));
}

async function getAllTimes() {
  const db = firebase.firestore().collection('time');
  const getAllTime = await db.orderBy('time', 'desc').get();
  if (getAllTime.empty) {
    console.log('Time queue is empty.');
  } else {
    const sortArray = [];
    getAllTime.forEach((doc) => {
      sortArray.push({
        ...doc.data().time,
      });
    });
    for (let i = 0; i < sortArray.length; i += 1) {
      sortArray[i] = toDateString(sortArray[i]);
    }
    console.log(sortArray);
  }
}

function addCurrentTime() {
  const db = firebase.firestore();
  const addtimeRef = db.collection('time');
  const date = new Date();
  const addtime = { time: date };
  addtimeRef.add(addtime);
}

async function deleteEarliestTime() {
  const db = firebase.firestore().collection('time');
  const getAllTime = await db.orderBy('time', 'desc').get();
  if (getAllTime.empty) {
    console.log('Time queue is empty.');
  } else {
    const sortArray = [];
    getAllTime.forEach((doc) => {
      sortArray.push({
        id: doc.id,
      });
    });
    const delEarlist = db.doc(sortArray[sortArray.length - 1].id);
    delEarlist.delete();
  }
}

export default {
  getLastestTime,
  getAllTimes,
  addCurrentTime,
  deleteEarliestTime,
};
