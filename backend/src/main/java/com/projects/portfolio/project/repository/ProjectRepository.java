package com.projects.portfolio.project.repository;

import com.projects.portfolio.project.entity.Project;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ProjectRepository extends JpaRepository<Project, Long> {

}
