type Options = {
  width?: number;
  height?: number;
  quality?: number | string;
  format?: number | string;
};

const cloudinaryImageConverter = (url: string, options: Options) => {
  if (!url) return url;
  const { width, height, quality = "auto", format = "auto" } = options;

  let transform = `f_${format},q_${quality}`;

  if (width) transform += `,w_${width}`;
  if (height) transform += `,w_${height}`;

  return url.replace("/upload/", `/upload/${transform}/`);
};

export default cloudinaryImageConverter;
