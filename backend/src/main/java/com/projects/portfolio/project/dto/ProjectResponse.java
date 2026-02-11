package com.projects.portfolio.project.dto;

import lombok.Builder;
import lombok.Data;

@Data
@Builder
public class ProjectResponse {

    private Long id;
    private String title;
    private String description;
    private String imageUrl;
}