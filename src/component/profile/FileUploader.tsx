import React, {useState} from 'react';
import {profileAPI} from "./profileAPI";

const FileUploader = () => {
    const [fileToUpload, setFileToUpload] = useState<File| null>(null);
    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.files && event.target.files[0]) {
            setFileToUpload(event.target.files[0]); // сохраняем файл в состоянии
            console.log('Файл выбран:', event.target.files[0].name);
        }
    };
    const handleUpload = async () => {
        console.log('file',fileToUpload);
        if (fileToUpload) {
            profileAPI.uploadPhoto(fileToUpload).then(r => {
                    if (r.status === 200) console.log('upload success')
                    else console.log('upload error');
                }
            )
        }
        else{
            alert("Please select file first")
        }
    }
    return (
        <div>
            <input type="file" onChange={handleFileChange}/>
            <button onClick={handleUpload}>Upload</button>
        </div>
    );
};

export default FileUploader;