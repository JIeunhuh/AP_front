import Song from "./Song";

// Playlist 인터페이스 정의
interface Playlist {
    id: string;
    name: string;
    songs: Song[];
    thumbnail: string;
}
export default Playlist;