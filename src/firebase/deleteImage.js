import { ref, remove } from "@firebase/database";
import { db } from "./firebase";

export default async function deleteImage(user, uid) {
    await remove(ref(db, `${user.uid}/${uid}`))
}