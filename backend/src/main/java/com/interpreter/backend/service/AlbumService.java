package com.interpreter.backend.service;

import com.interpreter.backend.entity.Album;
import com.interpreter.backend.repositories.AlbumRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.UUID;
@Service
public class AlbumService {
    @Autowired
    private  AlbumRepository albumRepository;

    public Album saveAlbum(Album album) {
        return albumRepository.save(album);
    }

    public Album getAlbumById(int id) {
        return albumRepository.findById(id) .orElse(null);
    }

    //get all albums
    public List<Album> findAllAlbums() {
        return albumRepository.findAll();
    }
}
