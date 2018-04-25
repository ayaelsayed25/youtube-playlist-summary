const PlaylistSummary = require('../index.js');
const config = require('config');
const ps = new PlaylistSummary(config);
const chai = require('chai');
const should = chai.should();

describe('# index', function () {

  it('getPlaylistItems', async function () {
    const PLAY_LIST_ID = 'PL9f8_QifuTL4CS8-OyA-4WADhkddOnRS4';
    let result = await ps.getPlaylistItems(PLAY_LIST_ID);
    result.total.should.be.a('number');
    result.items.should.be.a('array');
    let KESY = ['publishedAt', 'title', 'description', 'videoId', 'videoUrl'];
    result.items[0].should.to.have.all.keys(KESY);
  });

  it('getPlaylists', async function () {
    const CHANNEL_ID = 'UCQCaS3atWyNHEy5PkDXdpNg';
    let result = await ps.getPlaylists(CHANNEL_ID);
    result.total.should.be.a('number');
    result.items.should.be.a('array');
    let KESY = ['publishedAt', 'title', 'description', 'playlistId', 'playlistUrl'];
    result.items[0].should.to.have.all.keys(KESY);
  });

  it('getSummary', async function () {
    const CHANNEL_ID = 'UCJi9ZAuo99MqMuJUXiJjpsA';
    let result = await ps.getSummary(CHANNEL_ID);
    result.should.be.a('array');
    let KEY1 = ['total', 'items', 'title', 'playlistId', 'playlistUrl'];
    result[0].should.to.have.all.keys(KEY1);
    result[0].total.should.be.a('number');
    result[0].items.should.be.a('array');
    let KEY2 = ['publishedAt', 'title', 'description', 'videoId', 'videoUrl'];
    result[0].items[0].should.to.have.all.keys(KEY2);
  });
});