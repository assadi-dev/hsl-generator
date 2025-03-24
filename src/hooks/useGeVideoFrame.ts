import React from "react";

type InitialState = {
  videoFrame: string | null;
  isFetching: boolean;
  canvas: HTMLCanvasElement;
};
const reducer = (state: InitialState, payload: Partial<InitialState>) => ({
  ...state,
  ...payload,
});

const useGeVideoFrame = () => {
  const [state, setState] = React.useReducer(reducer, {
    videoFrame: null,
    isFetching: false,
    canvas: document.createElement("canvas"),
  });

  const updateCanvasFormat = (
    canvas: HTMLCanvasElement,
    video: HTMLVideoElement
  ) => {
    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;
  };

  const extractFrame = async (video: HTMLVideoElement) => {
    if (!video.src) throw new Error("l'attribut source est vide");
    const canvas = state.canvas;
    video.currentTime = 5;
    video.load();
    video.addEventListener("loadedmetadata", () =>
      updateCanvasFormat(canvas, video)
    );
    video.addEventListener("loadeddata", () => {
      if (!canvas) return;
      const ctx = canvas.getContext("2d");
      ctx?.drawImage(video, 0, 0, video.videoWidth, video.videoHeight);
      console.log(canvas.toDataURL());

      /*     canvas.toBlob((blob) => {
        if (!blob) return;
        const file = new File([blob], "preview-video" + Date.now() + ".png", {
          type: "image/png",
        });
        const BlobUrl = URL.createObjectURL(file);
        console.log(BlobUrl);
      }); */
    });
  };

  return {
    extractFrame,
    canvas: state.canvas,
    isFetching: state.isFetching,
  };
};

export default useGeVideoFrame;
