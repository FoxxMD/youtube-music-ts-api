// Generated by dts-bundle v0.7.3

declare module 'youtube-music-ts-api' {
    export { default } from "youtube-music-ts-api/service/youtube-music";
    export * from "youtube-music-ts-api/interfaces-primary";
    export * from "youtube-music-ts-api/interfaces-supplementary";
}

declare module 'youtube-music-ts-api/service/youtube-music' {
    import { IYouTubeMusic, IYouTubeMusicAuthenticated, IYouTubeMusicGuest } from "youtube-music-ts-api/interfaces-primary";
    /**
        * Defines the main YouTube Music API object. Using this object, you can either choose to make calls as a guest or an
        * authenticated user. Not all APIs are available as a guest, so it is preferred to authenticate the user if possible.
        */
    export default class YouTubeMusic implements IYouTubeMusic {
            /**
                * Authenticates the user with the YouTube Music API. This function overload requies the cookie string of a valid logged in user.
                *
                * @param cookiesStr The cookie string of a valid logged in user. The minimum required cookie values needed are the HSID, SSID, APISID,
                * SAPISID, __Secure-3PSID, and __Secure-3PAPISID. To obtain this cookie value, log into https://music.youtube.com as a user and use
                * your browser's developer tools to obtain the "cookie" value sent as a request header. Extra values in the cookie will be ignored.
                * @param authUser X-Goog-AuthUser header value
                * @returns A promise that will yield authenticated access to the YouTube Music API.
                */
            authenticate(cookiesStr: string, authUser?: number): Promise<IYouTubeMusicAuthenticated>;
            /**
                * Provides guest access to the YouTube Music API. Only non-restrictive APIs (such as public playlists) are available to guests.
                *
                * @returns A promise that will yield guest access to the YouTube Music API.
                */
            guest(): Promise<IYouTubeMusicGuest>;
    }
}

declare module 'youtube-music-ts-api/interfaces-primary' {
    import { IAlbumDetail, IAlbumSummary, IArtistSummary, IPlaylistDetail, IPlaylistSummary, ITrackDetail } from "youtube-music-ts-api/interfaces-supplementary";
    /**
        * Defines the main YouTube Music API object. Using this object, you can either choose to make calls as a guest or an
        * authenticated user. Not all APIs are available as a guest, so it is preferred to authenticate the user if possible.
        */
    export interface IYouTubeMusic {
            /**
                * Authenticates the user with the YouTube Music API. This function overload requies the cookie string of a valid logged in user.
                *
                * @param cookiesStr The cookie string of a valid logged in user. The minimum required cookie values needed are the HSID, SSID, APISID,
                * SAPISID, __Secure-3PSID, and __Secure-3PAPISID. To obtain this cookie value, log into https://music.youtube.com as a user and use
                * your browser's developer tools to obtain the "cookie" value sent as a request header. Extra values in the cookie will be ignored.
                * @param authUser X-Goog-AuthUser header value
                * @returns A promise that will yield authenticated access to the YouTube Music API.
                */
            authenticate(cookiesStr: string, authUser: number): Promise<IYouTubeMusicAuthenticated>;
            /**
                * Provides guest access to the YouTube Music API. Only non-restrictive APIs (such as public playlists) are available to guests.
                *
                * @returns A promise that will yield guest access to the YouTube Music API.
                */
            guest(): Promise<IYouTubeMusicGuest>;
    }
    /**
        * Defines the YouTube Music APIs available to an authenticated user. An authenticated user also naturally includes the APIs available to a guest.
        */
    export interface IYouTubeMusicAuthenticated extends IYouTubeMusicGuest {
            /**
                * Adds the tracks to the specified playlist.
                *
                * @param playlistId The ID of the playlist to add the tracks to.
                * @param tracks The array of tracks to add to the playlist.
                * @returns A promise that will yield whether or not the operation was successful.
                */
            addTracksToPlaylist(playlistId: string, ...tracks: ITrackDetail[]): Promise<boolean>;
            /**
                * Creates a playlist in the user's library.
                *
                * @param name The name of the playlist to create.
                * @param description An optional description for the playlist.
                * @param privacy An optional privacy level for the playlist (either PUBLIC, PRIVATE, or UNLISTED).
                * @param sourcePlaylistId An optional playlist ID to copy the initial set of tracks from.
                * @returns A promise that will yield the playlist with its ID.
                */
            createPlaylist(name: string, description?: string, privacy?: string, sourcePlaylistId?: string): Promise<IPlaylistSummary>;
            /**
                * Deletes a playlist from the user's library.
                *
                * @param playlistId The ID of the playlist to delete.
                * @returns A promise that will yield whether or not the operation was successful.
                */
            deletePlaylist(playlistId: string): Promise<boolean>;
            /**
                * Gets all the albums in the user's library.
                *
                * @returns A promise that will yield an array of all the albums in the user's library.
                */
            getLibraryAlbums(): Promise<IAlbumSummary[]>;
            /**
                * Gets all the artists in the user's library.
                *
                * @returns A promise that will yield an array of all the artists in the user's library.
                */
            getLibraryArtists(): Promise<IArtistSummary[]>;
            /**
                * Gets all the playlists in the user's library.
                *
                * @returns A promise that will yield an array of all the playlists in the user's library.
                */
            getLibraryPlaylists(): Promise<IPlaylistSummary[]>;
            /**
                * Gets all the tracks in the user's library.
                *
                * @returns A promise that will yield an array of all the tracks in the user's library.
                */
            getLibraryTracks(): Promise<ITrackDetail[]>;
            /**
                * Gets recently played tracks, in reverse chronological order, from the user's library
                *
                * @returns A promise that will yield a playlist with detailed information on a recently played tracks.
                */
            getLibraryHistory(): Promise<IPlaylistDetail>;
            /**
                * Removes the tracks from the specified playlist.
                *
                * @param playlistId The ID of the playlist to remove the tracks from.
                * @param tracks The array of tracks to remove from the playlist.
                * @returns A promise that will yield whether or not the operation was successful.
                */
            removeTracksFromPlaylist(playlistId: string, ...tracks: ITrackDetail[]): Promise<boolean>;
    }
    /**
        * Defines the YouTube Music APIs available to a guest.
        */
    export interface IYouTubeMusicGuest {
            /**
                * Gets detailed information for a specific album.
                *
                * @param id The ID of the album to get the detailed information for.
                * @returns A promise that will yield the detailed information for a specific album.
                */
            getAlbum(id: string): Promise<IAlbumDetail>;
            /**
                * Gets detailed information for a specific playlist.
                *
                * @param id The ID of the playlist to get the detailed information for.
                * @param maxRetries An optional maximum number of retries to obtain the tracks. YouTube Music is
                * incredibly buggy in that not all tracks will be returned in a single request. If the request is
                * retried, you may get a different set of tracks in the response. If you retry enough times, you
                * will eventually get all the tracks (a union operation is done internally between all the tracks
                * returned from each individual request).
                * @returns A promise that will yield the detailed information for a specific playlist.
                */
            getPlaylist(id: string, maxRetries?: number): Promise<IPlaylistDetail>;
    }
}

declare module 'youtube-music-ts-api/interfaces-supplementary' {
    /**
        * Defines the details for an album.
        */
    export interface IAlbumDetail {
            /**
                * The ID of the album.
                */
            id?: string;
            /**
                * The name of the album.
                */
            name?: string;
            /**
                * The description of the album.
                */
            description?: string;
            /**
                * The count of tracks within the album.
                */
            count?: number;
            /**
                * The duration of the album in milliseconds.
                */
            durationMillis?: number;
            /**
                * The artist(s) that composed the album.
                */
            artists?: IArtistSummary[];
            /**
                * The day the album was released.
                */
            releaseDay?: number;
            /**
                * The month the album was released.
                */
            releaseMonth?: number;
            /**
                * The year the album was released.
                */
            releaseYear?: number;
            /**
                * The array of tracks within the album.
                */
            tracks: ITrackDetail[];
    }
    /**
        * Defines an album summary.
        */
    export interface IAlbumSummary {
            /**
                * The ID of the album.
                */
            id?: string;
            /**
                * The name of the album.
                */
            name?: string;
            /**
                * The artist that composed the album.
                */
            artist?: IArtistSummary;
            /**
                * The year the album was released.
                */
            year?: string;
    }
    /**
        * Defines an artist summary.
        */
    export interface IArtistSummary {
            /**
                * The ID of the artist.
                */
            id?: string;
            /**
                * The name of the artist.
                */
            name?: string;
    }
    /**
        * Defines the details for a playlist.
        */
    export interface IPlaylistDetail {
            /**
                * The ID of the playlist.
                */
            id?: string;
            /**
                * The name of the playlist.
                */
            name?: string;
            /**
                * The description of the playlist.
                */
            description?: string;
            /**
                * The count of tracks within the playlist.
                */
            count?: number;
            /**
                * The privacy level of the playlist. This value will be PUBLIC, PRIVATE, or UNLISTED.
                */
            privacy?: string;
            /**
                * The array of tracks within the playlist.
                */
            tracks?: ITrackDetail[];
    }
    /**
        * Defines a playlist summary.
        */
    export interface IPlaylistSummary {
            /**
                * The ID of the playlist.
                */
            id?: string;
            /**
                * The name of the playlist.
                */
            name?: string;
            /**
                * The count of tracks within the playlist.
                */
            count?: number;
    }
    /**
        * Defines the details for a track.
        */
    export interface ITrackDetail {
            /**
                * The ID of the track.
                */
            id?: string;
            /**
                * An alternate ID of the track. YouTube internally refers to this value as the setVideoId. This ID
                * is used in combination with the standard ID in order to remove tracks from playlists.
                */
            alternateId?: string;
            /**
                * The title of the track.
                */
            title?: string;
            /**
                * The artist(s) that compose the track.
                */
            artists?: IArtistSummary[];
            /**
                * The album the track is from.
                */
            album?: IAlbumSummary;
            /**
                * The duration of the track as a readable string.
                */
            duration?: string;
            /**
                * The duration of the track in milliseconds.
                */
            durationMillis?: number;
            /**
                * The track number within an album.
                */
            trackNumber?: number;
    }
}
