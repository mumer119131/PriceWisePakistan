import { useState } from "react"
import img1 from '../../assets/img1.webp'
import img2 from '../../assets/img2.webp'
import img3 from '../../assets/img3.webp'
import img4 from '../../assets/img4.webp'
import { motion, AnimatePresence } from "framer-motion"

const Carousel = () => {
    const [selectedImage, setSelectedImage] = useState(0)

    const images = [
         img2, img3, img4,img1,
    ]
    const imageVariants = {
        hidden: { x: selectedImage > 0 ? '100%' : '-100%', opacity: 0 },
        visible: { x: 0, opacity: 1 },
        exit: { x: selectedImage > 0 ? '-100%' : '100%', opacity: 0 }
      };
  return (
    <div className="px-8 flex items-center flex-col mt-4 relative mb-4">
        <AnimatePresence mode="wait">
            <motion.img 
                key={selectedImage}
                initial="hidden"
                animate="visible"
                exit="exit"
                variants={imageVariants}
                transition={{ duration: 0.01 }}
                className="rounded-[1rem] shadow-lg mask w-[100%] md:w-[100%] lg:w-[100%] h-[15rem] md:h-[25rem] lg:h-[32rem] transition__custom object-cover" src={images[selectedImage]} alt="" />
        </AnimatePresence>
        <div className="flex gap-2 absolute bottom-2">
            <button onClick={() => setSelectedImage(0)} className={`w-4 h-4 rounded-full bg-primary ${selectedImage === 0 ? 'opacity-100' : 'opacity-50'}`}></button>
            <button onClick={() => setSelectedImage(1)} className={`w-4 h-4 rounded-full bg-primary ${selectedImage === 1 ? 'opacity-100' : 'opacity-50'}`}></button>
            <button onClick={() => setSelectedImage(2)} className={`w-4 h-4 rounded-full bg-primary ${selectedImage === 2 ? 'opacity-100' : 'opacity-50'}`}></button>
            <button onClick={() => setSelectedImage(3)} className={`w-4 h-4 rounded-full bg-primary ${selectedImage === 3 ? 'opacity-100' : 'opacity-50'}`}></button>

        </div>
    </div>
  )
}

export default Carousel