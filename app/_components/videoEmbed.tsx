interface VideoEmbedProps {
  embedLink: string;
}

export default function VideoEmbed({ embedLink }: VideoEmbedProps) {
  return (
    <div className="w-full h-full round overflow-hidden">
      <iframe
        className="w-full h-full"
        src={embedLink}
        title="YouTube video"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    </div>
  );
}