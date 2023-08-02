import YouTubeMusic from "./service/youtube-music";

/*
* This file is for internal testing purposes only and is not necessary for the resulting library.
* This allows the library to be tested in a sandbox environment during development.
*/
async function main(): Promise<void> {
    const cookieStr = "__Secure-3PSID=Ywg_-iQJprC_N1M5RW9PL4EFLL1zjXQdLhr5M-fT7iM0ahOYHUhKruBOLAZQxW8nheyByA.; __Secure-3PAPISID=bkmbPPCr_i_C3yFW/A_iedFQVHgBEh_K9d; VISITOR_INFO1_LIVE=vAZ5lHSrwg8; __Secure-3PSIDCC=APoG2W8hpt3sUBHtLd2qEjXQ2OaUPSeHipPbmkziAEV2cjQLMeGTOyVep9hlZJ6k7ZKe7ZXXHwk; PREF=tz=America.New_York&f5=30000&f7=100&autoplay=true&volume=11&f6=40000000; SID=Ywg_-iQJprC_N1M5RW9PL4EFLL1zjXQdLhr5M-fT7iM0ahOYQjADGLtBpNDJWeKHz4RfPA.; __Secure-1PSID=Ywg_-iQJprC_N1M5RW9PL4EFLL1zjXQdLhr5M-fT7iM0ahOY5ip0lJtA938BftAqUfN-zg.; HSID=Awh6Ta35QoBX8Z-xx; SSID=AiB6dOIadlCn8lG1-; APISID=l8RBulvCpNjBb3fJ/ALV_5x4Yi3GtUxB__; SAPISID=bkmbPPCr_i_C3yFW/A_iedFQVHgBEh_K9d; __Secure-1PAPISID=bkmbPPCr_i_C3yFW/A_iedFQVHgBEh_K9d; LOGIN_INFO=AFmmF2swRQIgJeo8U9bVw6HcZ9w5GAavTdGsifmQfcd9IpCI5KVo9CoCIQCg7SkO8uzZ7FujNnRzwL-yojswH7ZLLl6vWaDSE8GSvg:QUQ3MjNmeGVpVUVDQWdyTWpZTUVYWXFlOUNKQ3M2TWdDZ2NNSFFNSnB2N3RxU0ZoU3hSOUpOUXdHQURXelBqMmVpeFdMMkFSbHpyUVo5eGYyUk9vbU9aOEI0M3FYd29OQXA1Sk5zck9tUTRaY1pXeVlCUExfSHQ5NU9YOExpQXB6c2xnNkVHUzZqcVo5UGxqd3ZKcWF3bVhVcGNfUlI3N2hhMHdudE9sTmtsaXpnc2YyR0k0YVNJOHVJN3EtSzZpdkduTERNUE1hWVluVkF4WFd2NDFoMmtDWlFqU3RGNmtQdw==; SIDCC=APoG2W9zuOJfbYKP0x9TB6akGEV0qb_Tg_koeJA819Ko0e2-b6Tutw-YKBF8Yc2AjVan1Om2bA; __Secure-1PSIDCC=APoG2W9_OQS-5w6Gh7AMw6TeyCiARt8k2nEpQojGMlai2lQ-pYnIbcijFBFcHVJ2ldzhlHufieE; YSC=737zeSPXThw; wide=1; ST-mhbc14=";
    const ytm = new YouTubeMusic();
    const ytma = await ytm.authenticate(cookieStr);

    try {
        const history = await ytma.getLibraryHistory();
        const f = 1;
    } catch (e) {
        throw e;
    }
    const ytmg = await ytm.guest();
    const album = await ytmg.getAlbum("MPREb_NDXVvJ4Gt60");
    console.log("Album: " + album.name);
    if (album) {
        for (const track of album.tracks) {
            console.log("    " + track.trackNumber + ": " + track.title);
        }
    }
    const playlist = await ytmg.getPlaylist("VLRDCLAK5uy_nnk58Y3rT4Y62vuYUvGpWGjxL9wsb10uI");
    console.log("Playlist: " + playlist.name);
    if (playlist) {
        for (const track of playlist.tracks) {
            console.log("    " + track.artists[0].name + " - \"" + track.title + "\"");
        }
    }
    console.log("Library Albums");
    const albums = await ytma.getLibraryAlbums();
    if (albums) {
        for (const album of albums) {
            console.log("    Album: " + album.name);
        }
    }
    console.log("Library Artists");
    const artists = await ytma.getLibraryArtists();
    if (artists) {
        for (const artist of artists) {
            console.log("    Artist: " + artist.name);
        }
    }
    console.log("Library Playlists");
    const playlists = await ytma.getLibraryPlaylists();
    if (playlists) {
        for (const playlist of playlists) {
            console.log("    Playlist: " + playlist.name);
        }
    }
    console.log("Library Tracks");
    const tracks = await ytma.getLibraryTracks();
    if (tracks) {
        for (const track of tracks) {
            console.log("    " + track.artists[0].name + " - \"" + track.title + "\"");
        }
    }
}
main();
