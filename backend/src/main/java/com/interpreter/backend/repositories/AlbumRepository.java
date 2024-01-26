package com.interpreter.backend.repositories;

import com.interpreter.backend.entity.Album;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.UUID;

public interface AlbumRepository extends JpaRepository <Album, Integer> {
}
