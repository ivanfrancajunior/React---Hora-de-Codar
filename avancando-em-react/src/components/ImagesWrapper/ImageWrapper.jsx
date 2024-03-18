import React from "react";
import ImageInPublic from "./ImageInPublic";
import ImageInAssets from "./ImageInAssets";

const ImageWrapper = () => {
  return (
    <main>
      <h1>Trabalhando com imagens</h1>

      <h2 style={{ margin: "20px" }}>Trabalahndo com imagens publicas</h2>
      <ImageInPublic />

      <h2 style={{ margin: "20px" }}>Trabalhando com imagens em assets</h2>
      <ImageInAssets />
    </main>
  );
};

export default ImageWrapper;
