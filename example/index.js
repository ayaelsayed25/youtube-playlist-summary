const PlaylistSummary = require('../index.js')

let config = {
  GOOGLE_API_KEY: 'AIzaSyCKKu1puZhs8Z7aB6DD8hTmEga0FBcGiDY',
  PLAYLIST_ITEM_KEY: ['publishedAt', 'title', 'description', 'videoId', 'videoUrl'],
}

const ps = new PlaylistSummary(config)

const CHANNEL_ID = 'UCQCaS3atWyNHEy5PkDXdpNg'
const PLAY_LIST_ID = 'UUW5YeuERMmlnqo4oq8vwUpg'

ps.getPlaylistItems(PLAY_LIST_ID)
  .then((result) => {
    console.log(result)
    console.log(result.items.length);
    console.log(result.total);

  })
  .catch((error) => {
    console.error(error)
  })

// ps.getPlaylists(CHANNEL_ID)
//   .then((result) => {
//     console.log(result)
//   })
//   .catch((error) => {
//     console.error(error)
//   })

// ps.getSummary(CHANNEL_ID)
//   .then((result) => {
//     console.log(result)
//   })
//   .catch((error) => {
//     console.error(error)
//   })
