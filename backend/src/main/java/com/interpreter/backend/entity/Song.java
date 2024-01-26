package com.interpreter.backend.entity;

import jakarta.persistence.*;
@Entity
@Table(name = "song")
public class Song {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    private String name;
    private int duration;
    @ManyToOne
    @JoinColumn(name = "album_id", nullable = false, referencedColumnName = "id")
    private Album album;
    public int getId() {
        return id;
    }

    public String getName() {
        return name;
    }

    public int getDuration() {
        return duration;
    }

    public Album getAlbum() {
        return album;
    }
}

