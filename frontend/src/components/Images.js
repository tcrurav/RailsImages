import React, { useState } from 'react';

const Images = () => {
  const [featuredImage, setFeaturedImage] = useState(null);

  const onImageChange = event => {
    setFeaturedImage(event.target.files[0]);
  };

  useEffect(() => {
    handleSubmit
  }, []);

  const handleSubmit = event => {
    event.preventDefault();
    const formData = new FormData();
    formData.append('title', this.state.title);
    formData.append('body', this.state.body);
    formData.append('featured_image', this.state.featured_image);
    fetch('http://localhost:3000/posts', {
      method: 'POST',
      body: formData
    }).catch(error => console.log(error));
  }

  return (
    <form>
      <input type="text"
      <input type="file" accept="image/*" multiple={false} onChange={onImageChange} />
    </form>
  );
}

export default Images;
