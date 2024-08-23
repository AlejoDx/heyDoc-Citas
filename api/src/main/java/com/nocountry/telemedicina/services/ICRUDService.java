package com.nocountry.telemedicina.services;

import org.springframework.data.domain.Page;

public interface ICRUDService<T,ID> {
    T save(T t);
    T findById(ID id);
    Page<T> findAll(int page, int size);
    void deleteById(ID id);
}
