const getYoutubeId = (url: string): string => {
  const regex =
    /(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:[^\/\n\s]+\/\S+\/|(?:v|e(?:mbed)?)\/|\S*?[?&]v=)|youtu\.be\/)([a-zA-Z0-9_-]{11})/
  const match = url.match(regex)
  return match ? match[1] : ''
}

export default getYoutubeId
// Example usage:
// const url = "https://www.youtube.com/watch?v=1ukSR1GRtMU";
// const videoId = getYoutubeId(url);
// console.log(videoId); // Output: 1ukSR1GRtMU
