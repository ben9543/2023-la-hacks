import { motion } from "framer-motion";

export default function Home() {
  return (
    <motion.div
      initial={{ y: 25, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{
        duration: 0.75,
      }}
      className="nav-bar bg-base-200"
    >
      <div className="flex flex-col items-center bg-base-100">Result</div>
    </motion.div>
  );
}
