import React, { useState, useEffect } from "react";

function Advertisement() {
    const [currentSlide, setCurrentSlide] = useState(0);

    const images = [
        "https://rukminim2.flixcart.com/fk-p-flap/1620/270/image/7f3cde58a30f6024.jpg?q=20",
        "https://rukminim2.flixcart.com/fk-p-flap/1620/270/image/ebe650f1bd18e588.jpg?q=20",
        "https://rukminim2.flixcart.com/fk-p-flap/1620/270/image/1888a7f584315190.jpg?q=20",
        "https://rukminim2.flixcart.com/fk-p-flap/1620/270/image/d9290fb51138d286.png?q=20",
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide((prevSlide) => (prevSlide === images.length - 1 ? 0 : prevSlide + 1));
        }, 5000); // Slide changes every 5 seconds

        return () => clearInterval(interval);
    }, []);

    const handleImageClick = (index) => {
        alert(`You clicked on slide ${index + 1}`);
    };

    const prevSlide = () => {
        setCurrentSlide((prevSlide) => (prevSlide === 0 ? images.length - 1 : prevSlide - 1));
    };

    const nextSlide = () => {
        setCurrentSlide((prevSlide) => (prevSlide === images.length - 1 ? 0 : prevSlide + 1));
    };

    return (
        <>
            <div className="relative overflow-hidden w-full">
                <div className="flex transition-transform duration-500" style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
                    {images.map((src, index) => (
                        <div key={index} className="w-screen flex-shrink-0">
                            <img
                                className="w-full cursor-pointer"
                                src={src}
                                alt={`Advertisement ${index + 1}`}
                                onClick={() => handleImageClick(index)}
                            />
                        </div>
                    ))}
                </div>

                {/* Navigation buttons */}
                <button
                    onClick={prevSlide}
                    aria-label="Previous Slide"
                    className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white text-3xl bg-gray-600 p-2 rounded-full z-10 hover:bg-gray-800 cursor-pointer"
                >
                    &#8592;
                </button>

                <button
                    onClick={nextSlide}
                    aria-label="Next Slide"
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white text-3xl bg-gray-600 p-2 rounded-full z-10 hover:bg-gray-800 cursor-pointer"
                >
                    &#8594;
                </button>
            </div>
        </>
    );
}

export default Advertisement;


