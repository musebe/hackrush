const cloudinary = require('cloudinary');

cloudinary.config({
  cloud_name: 'hackit-africa',
  api_key: '725464419265614',
  api_secret: 'eR6ZNhy8CtPLrFE4CvjOsBvkQTk'
});

// uploading the image to cloudinary

exports.uploads = file => {
  return new Promise(resolve => {
    cloudinary.uploader.upload(
      file,
      result => {
        resolve({ url: result.url, id: result.public_id });
      },
      { resource_type: 'auto' }
    );
  });
};
