"use client";

import React from "react";
import Image, { ImageProps } from "next/image";
import webselfie from "../assets/icons/webselfie1.jpg";

interface ProfilePictureProps {
    imageProps: Omit<ImageProps, "className">;
}

const ProfilePicture: React.FC<ProfilePictureProps> = ({ imageProps }) => {
    return (
        <div className="relative w-fit" style={{ touchAction: "none" }}>
            <div className="relative z-10">
                <Image
                    {...imageProps}
                    width={384}
                    height={384}
                    className="rounded-full w-64 h-64 md:w-48 md:h-48 lg:w-96 lg:h-96 object-cover border-3 border-black"
                    alt={imageProps.alt}
                />
            </div>
        </div>
    );
};

const ProfilePictureWrapper = () => (
    <ProfilePicture
        imageProps={{
            src: webselfie,
            alt: "Luke Edwards",
            priority: true,
        }}
    />
);

export default ProfilePictureWrapper;
