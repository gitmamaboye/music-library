package com.interpreter.backend.entity;

import jakarta.persistence.*;
@Entity
@Table(name = "album")
public class Album {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "id", updatable = false, nullable = false, unique = true)
    private int id;
    @Column(name = "title", nullable = false, length = 50)
    private String title;
    @Column(name = "artist", nullable = true, length = 50)
    private String artist;
    @Column(name = "genre", nullable = true, length = 50)
    private String genre;

    public int getId() {
        return id;
    }

    public String getTitle() {
        return title;
    }


    public String getArtist() {
        return artist;
    }

    public String getGenre() {
        return genre;
    }
}
