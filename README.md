# youtube playlist summary

### Features

* it could help you easy to get all playlist informations.

### Requirements

* node 8.x.x
### Install

```
$ npm install --save youtube-playlist-summary
```

### Usage

```js
const CHANNEL_ID = 'UCQCaS3atWyNHEy5PkDXdpNg';
const PLAY_LIST_ID = 'PL9f8_QifuTL4CS8-OyA-4WADhkddOnRS4';

ps.getPlaylistItems(PLAY_LIST_ID).then(result => {
  console.log(result);
}).catch(error => {
  console.error(error);
});

ps.getPlaylists(CHANNEL_ID).then(result => {
  console.log(result);
}).catch(error => {
  console.error(error);
});

ps.getSummary(CHANNEL_ID).then(result => {
  console.log(result);
}).catch(error => {
  console.error(error);
});
```

## License

[MIT](LICENSE)