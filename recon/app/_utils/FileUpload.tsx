import React, { useState } from 'react';
import { useDropzone } from 'react-dropzone';
import './fileupload.scss';
import { Button } from '@nextui-org/react';

export default function FileUpload() {
  const [uploadedFiles, setUploadedFiles] = useState([]);
  const { getRootProps, getInputProps } = useDropzone({
    onDrop: (acceptedFiles) => {
      setUploadedFiles(acceptedFiles);
      // Call your backend API endpoint to upload files
      console.log('testing upload files', acceptedFiles);
    },
    maxFiles: 1,
    accept: {
      'text/*': ['.csv'],
      'application/vnd.ms-excel': ['.xls'],
      'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet': [
        '.xlsx',
      ],
    },
  });
  return (
    <>
      <div className='fileupload'>
        <div {...getRootProps()}>
          <input {...getInputProps()} />
          <p>Drag and drop files here (or) click to browse.</p>
          <em>(Only *.xls, *., and *.csv files will be accepted)</em>
        </div>
      </div>
      <ul>
        {uploadedFiles.map((file) => (
          <li key={file.name}>{file.name}</li>
        ))}
      </ul>
    </>
  );
}
