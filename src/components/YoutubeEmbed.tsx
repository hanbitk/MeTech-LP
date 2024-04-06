import React from "react";

interface IYoutubeEmbedProps {
  embedId: string;
}

function YoutubeEmbed({ embedId }: IYoutubeEmbedProps) {
  return (
    <iframe
      width="460"
      height="250"
      src={`https://www.youtube.com/embed/${embedId}`}
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      title="Embedded youtube"
    />
  );
}

export default YoutubeEmbed;
