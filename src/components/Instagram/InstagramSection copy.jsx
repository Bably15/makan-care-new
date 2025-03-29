import React, { useState } from 'react';
import './InstagramSection.css';

const InstagramSection = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const posts = [
    { id: 1, imageUrl: '' },
    { id: 2, imageUrl: '' },
    { id: 3, imageUrl: '' },
    { id: 4, imageUrl: '' },
    { id: 5, imageUrl: '' },
  ];

  const handleImageClick = (imageUrl) => {
    setSelectedImage(imageUrl);
  };

  const handleCloseModal = () => {
    setSelectedImage(null);
  };

  return (
    <div className="instagram-section">
      <h2>Instagram</h2>
      <div className="posts">
        {posts.map((post) => (
          <div key={post.id} className="post" onClick={() => handleImageClick(post.imageUrl)}>
            <img src={post.imageUrl} alt={`Post ${post.id}`} />
          </div>
        ))}
      </div>

      {selectedImage && (
        <div className="modal" onClick={handleCloseModal}>
          <img src={selectedImage} alt="Selected Post" className="modal-image" />
        </div>
      )}
    </div>
  );
};

export default InstagramSection;
