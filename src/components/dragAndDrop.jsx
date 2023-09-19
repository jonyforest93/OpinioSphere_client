import React, { useState } from 'react';

const ImageUploader = ({handleImageDrop}) => {
    const [selectedFile, setSelectedFile] = useState(null);

    const convertFileToBase64 = (file) => {
        return new Promise((res, rej) => {
            const fileReader = new FileReader();
            fileReader.readAsDataURL(file);
            fileReader.onload = () => {
                res(fileReader.result);
            }
            fileReader.onerror = (error) => {
                rej(error);
            }
        })
    }

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        convertFileToBase64(file).then((res) => {
            setSelectedFile(file);
            handleImageDrop(res, file.name)
        })
    };

    const handleDrop = (e) => {
        e.preventDefault();
        const file = e.dataTransfer.files[0];
        convertFileToBase64(file).then((res) => {
            setSelectedFile(file);
            handleImageDrop(res, file.name)
        })
    };

    const handleDragOver = (e) => {
        e.preventDefault();
    };

    return (
        <div
            className="flex items-center justify-center h-[280px] border border-gray-300 p-4 rounded-md text-center cursor-pointer"
            onDrop={handleDrop}
            onDragOver={handleDragOver}
        >
            {selectedFile ? (
                <div>
                    <img
                        src={URL.createObjectURL(selectedFile)}
                        alt="Selected"
                        className="mx-auto max-h-40"
                    />
                    <p className="mt-2">{selectedFile.name}</p>
                </div>
            ) : (
                <div className="flex flex-col justify-center items-center">
                    <div>
                        <svg width="86" height="64" viewBox="0 0 86 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g id="Group 1">
                                <path id="Vector" d="M79.3098 0H6.69018C4.91702 0.00488286 3.21857 0.7115 1.965 1.965C0.711518 3.21848 0.00482143 4.91697 0 6.69018V57.2902C0 59.0662 0.703821 60.7695 1.95804 62.0279C3.21221 63.2856 4.91357 63.995 6.69018 63.9998H79.3098C81.0858 63.995 82.7872 63.2856 84.0413 62.0279C85.2954 60.7695 85.9993 59.0661 85.9993 57.2902V6.69018C85.9944 4.91702 85.2878 3.21857 84.0343 1.965C82.7808 0.711518 81.0823 0.00482143 79.3098 0Z" fill="#4D4D4D" fillOpacity="0.06"/>
                                <path id="Vector_2" d="M59.4174 25.4894C58.8105 24.6586 57.8528 24.1556 56.8245 24.1264C55.7956 24.0971 54.8115 24.5449 54.1577 25.3394L36.9277 46.2501C36.332 46.9783 35.4573 47.4206 34.5177 47.468C33.5788 47.5155 32.6629 47.1639 31.9975 46.4998L23.4672 38.0002C22.8199 37.3556 21.9354 37.0055 21.0224 37.032C20.1093 37.0585 19.2471 37.4589 18.6375 38.1397L6.07753 52.1393V52.14C5.51112 52.7783 5.21398 53.6118 5.24885 54.465C5.28373 55.3181 5.64785 56.1245 6.26517 56.7147C6.8818 57.3048 7.70351 57.6326 8.55731 57.6298H76.377C77.1924 57.6333 77.9806 57.3341 78.589 56.7907C79.1973 56.2473 79.5829 55.4981 79.6708 54.687C79.7594 53.8764 79.5439 53.0617 79.0675 52.3996L59.4174 25.4894Z" fill="#343434" fillOpacity="0.12"/>
                                <path id="Vector_3" d="M31.4683 17.8302C31.4683 23.6232 26.7717 28.3198 20.9786 28.3198C15.1849 28.3198 10.4883 23.6232 10.4883 17.8302C10.4883 12.0365 15.1849 7.33984 20.9786 7.33984C26.7717 7.33984 31.4683 12.0365 31.4683 17.8302Z" fill="#343434" fillOpacity="0.12"/>
                            </g>
                        </svg>
                    </div>
                    <p className="mt-8 text-base font-inter text-[#344054]">Drag and drop an image, or Browse</p>
                    <p className="mt-2 text-sm font-inter text-gray-500">Minimum 960px width recommended. Max 10MB</p>
                </div>
            )}
            <input
                type="file"
                accept="image/*"
                className="hidden"
                onChange={handleFileChange}
            />
        </div>
    );
};

export default ImageUploader;