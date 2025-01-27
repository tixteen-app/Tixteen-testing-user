import axios from 'axios';
import imageCompression from 'browser-image-compression';

const uploadToCloudinary = async (file, setUploadProgress, maxSizeKB = 800) => {
  try {
    // Check if the file is an image or video
    const isImage = file.type.startsWith('image/');
    const isVideo = file.type.startsWith('video/');
    
    let compressedFile = file;

    if (isImage) {
      // Convert max size from KB to MB
      const maxSizeMB = maxSizeKB / 1024;

      // Options for image compression
      const options = {
        maxSizeMB: maxSizeMB,
        useWebWorker: true,
      };

      // Compress the image
      compressedFile = await imageCompression(file, options);

      // Check if the compressed file size is within the desired range
      if (compressedFile.size / 1024 > maxSizeKB) {
        throw new Error(`Unable to compress image to desired size. Current size: ${(compressedFile.size / 1024).toFixed(2)} KB`);
      }
    } else if (!isVideo) {
      throw new Error('Unsupported file type');
    }

    // Prepare form data for upload
    const data = new FormData();
    data.append("file", compressedFile);
    // data.append("upload_preset", "wnsxe2pa");
    data.append("upload_preset", "Tixteen-Influencer");
    // data.append("folder", "Tixteen");

    // Determine the upload URL based on file type
    const uploadUrl = isImage 
      ? `https://api.cloudinary.com/v1_1/dnjhxyruk/image/upload`
      : `https://api.cloudinary.com/v1_1/dnjhxyruk/video/upload`;
      // ? `https://api.cloudinary.com/v1_1/dzvsrft15/image/upload`
      // : `https://api.cloudinary.com/v1_1/dzvsrft15/video/upload`;


    // Upload the file to Cloudinary
    const response = await axios.post(uploadUrl, data, {
      onUploadProgress: (progressEvent) => {
        const percentCompleted = Math.round((progressEvent.loaded * 100) / progressEvent.total);
        if (setUploadProgress) {
          setUploadProgress(percentCompleted);
        }
      }
    });

    if (response.status === 200) {
      return response.data.url;
    } else {
      throw new Error('Failed to upload file');
    }
  } catch (error) {
    console.error("Upload error:", error);
    throw error; 
  }
};

export default uploadToCloudinary;

