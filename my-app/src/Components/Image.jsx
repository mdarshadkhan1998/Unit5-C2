export const Image = ({ src, alt, borderRadius, width, height, fit }) => {
  return (
    <div >
      <img src={src} alt={alt} style={{height:`${height}`, width:`${width}`, borderRadius:`${borderRadius}`, objectFit:`${fit}`}}/>
    </div>
  );
};
