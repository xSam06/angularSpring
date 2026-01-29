package com.projects.portfolio.project.dto;

import lombok.Data;

@Data
public class ProjectRequest {

    private String title;
    private String description;
    private String githubUrl;
    private String demoUrl;
}