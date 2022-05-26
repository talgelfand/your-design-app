import { toast } from "react-toastify";
import { auth } from "../firebase";
import firebase from "firebase/app";

const add = (list, product, user) => {
  let contains = false;

  list.forEach((item) => {
    if (item.id === product.id) {
      contains = true;
    }
  });

  if (auth.currentUser) {
    if (!contains) {
      toast("Added to cart");
      list.push(product);
      user.update({
        cartItems: firebase.firestore.FieldValue.arrayUnion(product),
      });
    } else {
      toast.error("Šis produkts jau ir pievienots grozam");
    }
  } else {
    toast.error("Lūdzu ielagojieties sava kontā, lai pievienotu produktu grozam");
  }
};

const remove = (user, list, id, item) => {
  user.update({
    cartItems: firebase.firestore.FieldValue.arrayRemove(item),
  });
  return list.filter((product) => product.id !== id);
};

const search = (products, initialSearch, searchParam) => {
  return products.filter((product) => {
    return searchParam.some((item) => {
      return (
        product[item]
          .toString()
          .toLowerCase()
          .indexOf(initialSearch.toLowerCase()) > -1
      );
    });
  });
};

export { add, remove, search };
