package com.interpreter.backend.controller;

import com.interpreter.backend.entity.Album;
import com.interpreter.backend.entity.Song;
import com.interpreter.backend.service.AlbumService;
import com.interpreter.backend.service.SongService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class SongController {

    public SongService songService;
    @Autowired
    public AlbumService albumService;
    public SongController(SongService songService) {
        this.songService = songService;
    }

    @PostMapping("/song")
    public ResponseEntity<?> saveSong(@RequestBody Song song) {
        Album album = albumService.getAlbumById(song.getAlbum().getId());
        return album != null ? ResponseEntity.ok(songService.saveSong(song)): ResponseEntity.badRequest().build();
    }

    @RequestMapping("/song")
    public List<Song> getSong() {
        return songService.findAllSongs();
    }

    @RequestMapping("/song/{id}")
   //get songs by album id
    public List<Song> getSongByAlbumId(@PathVariable("id") int id) {
        return songService.getSongByAlbumId(id);
    }
}
