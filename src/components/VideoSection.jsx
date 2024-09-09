import React from 'react';

export default function VideoSection() {
    return (
        <div className="flex flex-col justify-center items-center py-20 md:py-24 px-4 bg-gray-100 fonttest">
            <h2 className="text-center text-3xl lg:text-4xl font-bold mb-6 lg:mb-8">영상</h2>
            <div className="border-b-2 border-red-500 w-16 mx-auto mb-10"></div>

            <div className="relative w-full max-w-6xl bg-white shadow-lg rounded-lg overflow-hidden mb-8">
                {/* Video Player */}
                <div className="w-full h-[480px]">
                    <iframe
                        className="w-full h-full"
                        src="https://www.youtube.com/embed/CpqAVaO5py4"
                        title="YouTube video"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    ></iframe>
                </div>
            </div>
        </div>
    );
}
