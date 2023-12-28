export default function SpaceBackground() {
  return (
    <video
      src="/assets/video/space.mp4"
      autoPlay
      loop
      muted
      className="fixed top-0 left-0 object-cover w-full h-screen opacity-25 -z-50"
    />
  );
}
