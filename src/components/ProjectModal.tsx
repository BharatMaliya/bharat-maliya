'use client';

import Image from 'next/image';
import { useState } from 'react';

interface ProjectModalProps {
    project: string;
    images: string[];
    onClose: () => void;
}

export default function ProjectModal({ project, images, onClose }: ProjectModalProps) {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const nextImage = () => {
        setCurrentImageIndex((prev: number) => (prev + 1) % images.length);
    };

    const prevImage = () => {
        setCurrentImageIndex((prev: number) => (prev - 1 + images.length) % images.length);
    };

    return (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-hidden">
                {/* Modal Header */}
                <div className="flex justify-between items-center p-6 border-b">
                    <h3 className="text-2xl font-bold text-neutral-900">{project}</h3>
                    <button
                        onClick={onClose}
                        className="text-neutral-500 hover:text-neutral-700 text-2xl"
                    >
                        ×
                    </button>
                </div>

                {/* Image Carousel */}
                <div className="relative">
                    <div className="aspect-video bg-neutral-100 flex items-center justify-center">
                        <Image
                            src={images[currentImageIndex]}
                            alt={`${project} screenshot ${currentImageIndex + 1}`}
                            width={800}
                            height={450}
                            className="max-w-full max-h-full object-contain"
                        />
                    </div>

                    {/* Navigation Arrows */}
                    {images.length > 1 && (
                        <>
                            <button
                                onClick={prevImage}
                                className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75 transition-all"
                            >
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                                </svg>
                            </button>
                            <button
                                onClick={nextImage}
                                className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75 transition-all"
                            >
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                </svg>
                            </button>
                        </>
                    )}
                </div>

                {/* Image Counter */}
                {images.length > 1 && (
                    <div className="p-4 text-center text-neutral-600">
                        {currentImageIndex + 1} of {images.length}
                    </div>
                )}

                {/* Thumbnail Strip */}
                {images.length > 1 && (
                    <div className="p-4 border-t">
                        <div className="flex gap-2 overflow-x-auto">
                            {images.map((image, index) => (
                                <button
                                    key={index}
                                    onClick={() => setCurrentImageIndex(index)}
                                    className={`flex-shrink-0 w-16 h-16 rounded border-2 overflow-hidden ${index === currentImageIndex ? 'border-primary-500' : 'border-neutral-200'
                                        }`}
                                >
                                    <Image
                                        src={image}
                                        alt={`Thumbnail ${index + 1}`}
                                        width={64}
                                        height={64}
                                        className="w-full h-full object-cover"
                                    />
                                </button>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}