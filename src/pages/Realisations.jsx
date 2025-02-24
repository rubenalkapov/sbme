import React, { useState, memo } from 'react';

function Realisations() {
    const [selectedImage, setSelectedImage] = useState(null);

    const images = [
        "/IMG_0914.jpeg",
        "/IMG_0971.png",
        "/IMG_0984.jpeg",
        "/IMG_0985.jpeg",
        "/IMG_0989.jpeg",
        "/IMG_0990.jpeg",
        "/IMG_0994.jpeg",
        "/IMG_1006.jpeg",
        "/IMG_1815.jpeg",
        "/IMG_1817.jpeg",
        "/IMG_2229.jpeg",
        "/IMG_2528.jpeg",
        "/IMG_2529.jpeg",
        "/IMG_2686.jpeg",
        "/IMG_2693.jpeg",
        "/IMG_2944.jpeg",
        "/IMG_2995.jpeg",
        "/IMG_2996.jpeg",
        "/IMG_2998.jpeg",
        "/IMG_3198.jpeg",
        "/IMG_3203.jpeg",
        "/IMG_3369.jpeg"
    ];

    return (
        <>
            <div className="text-center p-10 text-4xl">Nos réalisations</div>
            <div className="grid grid-cols-4 gap-4 p-10">
                {images.map((src, index) => (
                    <img
                        key={index}
                        loading="lazy"
                        className="w-full h-48 object-cover transform transition-transform duration-300 hover:scale-110 cursor-pointer"
                        src={src}
                        alt=""
                        onClick={() => setSelectedImage(src)}
                    />
                ))}
            </div>
            {selectedImage && (
                <div className="fixed inset-0 bg-black/75 flex items-center justify-center z-50" onClick={() => setSelectedImage(null)}>
                    <button
                        className="absolute top-0 right-0 m-4 text-white hover:text-blue-300 text-3xl cursor-pointer"
                        onClick={() => setSelectedImage(null)}
                    >
                        &times;
                    </button>
                    <div className="relative">
                        <img className="max-w-screen-lg max-h-screen-lg" src={selectedImage} alt="" />
                    </div>
                </div>
            )}
        </>
    );
}

export default memo(Realisations);
