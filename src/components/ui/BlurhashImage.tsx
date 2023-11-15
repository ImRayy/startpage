import React, { useEffect, useRef } from "react";
import { decode } from "blurhash";

interface BlurhashImageProps {
    url: string;
    width: number;
    height: number;
}
const BlurhashImage = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const pixels = decode("L28|^j8{0e0K00?GNdM{0f9Z~C~W", 400, 400);
    const imageData = new ImageData(new Uint8ClampedArray(pixels), 400, 400);
    ctx.putImageData(imageData, 0, 0);
  }, []);

  return (
    <canvas>BlurhashImage</canvas>
  )
}

export default BlurhashImage
