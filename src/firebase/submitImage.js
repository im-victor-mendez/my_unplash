import { ref, set } from "firebase/database";
import { v4 as uuid } from "uuid";
import { db } from "./firebase";

export default async function submitImage(user, image) {
  if (image.url)
    try {
      const message = document.getElementById("add_image-message")
      const uid = uuid()

      await set(ref(db, `${user.uid}/${uid}`), image)
        .finally(() => {
          console.log("Image added")
          
          message.classList.remove("active")
        })
        .catch((error) => {
            console.log(error)

            message.classList.remove("active")
            return error;
        })
    } catch (error) {
      console.log(error)
      return error
    }
}
