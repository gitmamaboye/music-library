package com.interpreter.backend.repositories;

import com.interpreter.backend.entity.Song;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface SongRepository extends JpaRepository<Song, Integer> {
    //get songs by album id
    public List<Song> findByAlbumId(int id);
}
