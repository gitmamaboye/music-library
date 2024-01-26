package com.interpreter.backend.controller;

import com.interpreter.backend.entity.Album;
import com.interpreter.backend.service.AlbumService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class AlbumController {
    public AlbumService albumService;
    public AlbumController(AlbumService albumService) {
        this.albumService = albumService;
    }

    @PostMapping("/music")
    public ResponseEntity<?> saveAlbum(@RequestBody Album album){
        Album savedAlbum = albumService.saveAlbum(album);
        return ResponseEntity.ok(savedAlbum);
    }
    @GetMapping("/music")
    public List<Album> getAlbum() {
        return albumService.findAllAlbums();
    }

    @GetMapping("/album/{id}")
    public Album getAlbumById(@PathVariable("id") int id) {
        return albumService.getAlbumById(id);
    }
}
