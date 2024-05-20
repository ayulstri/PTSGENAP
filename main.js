import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import {
  getFirestore,
  collection,
  addDoc,
  getDocs,
  getDoc,
  deleteDoc,
  doc,
  query,
  orderBy,
  updateDoc
} from "https://www.gstatic.com/firebasejs/10.8.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey : "AIzaSyBHWBUFLyOOofG05RKDUiRDUS2J3k8BVSkY" , 
  authDomain : "insan-cemerlang-dc590.firebaseapp.com" , 
  projectId : "insan-cemerlang-dc590" , 
  penyimpananBucket : "insan-cemerlang-dc590.appspot.com" , 
  pesanSenderId : "1002966213043" , 
  appId : "1:1002966213043:web:4c787b7684f9eafa35ebc6",
<!DOCTYPE html>



const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export async function ambilDaftarPembeli() {
  const refDokumen = collection(db, "pembeli");
  const kueri = query(refDokumen, orderBy("nama"));
  const cuplikanKueri = await getDocs(kueri);

  let hasil = [];
  cuplikanKueri.forEach((dok) => {
    hasil.push({
      id: dok.id,
    nama: dok.data().nama,
    alamat: dok.data().alamat,
    notlpon: dok.data().notlpon,
    });
  });
  
  return hasil;
}

export function formatAngka(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

export async function tambahPembeli(nama, alamat,  notlpon) {
  try {
   const dokRef = await addDoc(collection(db, 'pembeli'), {
     nama:nama,
     alamat:alamat,
     notlpon:notlpon,
   });
   console.log('Berhasil menambah produk' + dokRef.id);
  } catch (e) {
    console.log('Gagal menambah produk ' + e);
  }
   }
   
   export async function ubahpembeli(docId, nama, alamat, notlpon) {
     await updateDoc(doc(db, "pembeli", docId), {
       nama:nama,
       alamat:alamat,
       notlpon:notlpon
     });
   }
   
   export async function ambilPembeli(docId) {
     const docRef = await doc(db, "pembeli", docId);
     const docSnap = await getDoc(docRef);
     
   }

  
