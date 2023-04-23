import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { getCohereResponse } from "@/pages/api/cohere/cohere-api";
import {
    addDoc,
    collection,
    doc,
    getFirestore,
    getDoc,
    collectionGroup,
    updateDoc,
    getDocs,
} from "firebase/firestore";
import { app } from "@/firebase";
import { useRouter } from "next/router";

export default function Home() {
    const [result, setResult] = useState<string>("");
    // const [selectedChoicesArray, setSelectedChoicesArray] = useState<string[][]>([[], [], [], [], []]);
    const router = useRouter();
    const id = router.query.id;

    useEffect(() => {
        const fetchData = async () => {
            const db = getFirestore(app);
            if(id){
                const docRef = doc(db, "data", id);
                const docSnap = await getDoc(docRef);
                if (docSnap.exists()) {
                    const data = docSnap.data();
                    console.log("Document data:", data);
                    //setSelectedChoicesArray(data.selectedChoicesArray);
                    const prompt = `What's great ${data.cuisines} in ${data.location}?}`;
                    setResult(await getCohereResponse(prompt));

                    console.log(`${data.accommodations} ${data.cuisines}`)
                    //getCohereResponse()
                } else {
                    console.log("No such document!");
                }
            }
        };
        fetchData();
    }, [id]);



    return (
        <motion.div
            initial={{ y: 25, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
                duration: 0.75,
            }}
            // center a div in the middle of the screen in tailwind
            className="justify-center items-center flex flex-col h-screen
            bg-base-100"
        >
            {result}
        </motion.div>
    );
}
