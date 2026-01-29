package com.projects.portfolio.project.controller;


import com.projects.portfolio.project.dto.ProjectRequest;
import com.projects.portfolio.project.dto.ProjectResponse;
import com.projects.portfolio.project.service.ProjectService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/projects")
@RequiredArgsConstructor
@CrossOrigin("*")
public class ProjectController {

    private final ProjectService projectService;

    @PostMapping("/add")
    public ResponseEntity<ProjectResponse> create(
            @RequestBody ProjectRequest request
    ) {
        return ResponseEntity.ok(
                projectService.createProject(request)
        );
    }

    @GetMapping
    public ResponseEntity<List<ProjectResponse>> getAll() {
        return ResponseEntity.ok(
                projectService.getAllProjects()
        );
    }
}
