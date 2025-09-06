import React from 'react';
import { twMerge } from "tailwind-merge";
import Image, { StaticImageData } from 'next/image'

interface ImageProps {
    src: StaticImageData | string;
    alt: string;
    className?: string;
    onClick?: () => void;
    imageSrc?: string
}

const ImageWrapper = (props: ImageProps) => {
    const { src, alt, className, onClick } = props

    return (
        <Image
            src={src}
            alt={alt}
            className={twMerge(``, className)}
            onClick={onClick}
        />
    );
};

export default ImageWrapper;
