const preload = imageCollection => {
  imageCollection.forEach(src => {
    const image = new Image();
    image.src = src;
  });
};

export default preload;
