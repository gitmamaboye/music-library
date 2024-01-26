package com.interpreter.backend.service;

import com.interpreter.backend.entity.Song;
import com.interpreter.backend.repositories.SongRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class SongService {
    @Autowired
    private SongRepository songRepository;
    public SongService(SongRepository songRepository) {
        this.songRepository = songRepository;
    }

    public Song saveSong(Song song) {
        return songRepository.save(song);
    }
    public Song getSongById(int id) {
        return songRepository.findById(id) .orElse(null);
    }

   public List<Song> findAllSongs() {
        return songRepository.findAll();
    }

    public List<Song> getSongByAlbumId(int id) {

        return songRepository.findByAlbumId(id);
    }

}
