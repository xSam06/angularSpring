package com.projects.portfolio.project.service;

import com.projects.portfolio.project.dto.ProjectRequest;
import com.projects.portfolio.project.dto.ProjectResponse;
import com.projects.portfolio.project.entity.Project;
import com.projects.portfolio.project.repository.ProjectRepository;
import com.projects.portfolio.user.entity.User;
import com.projects.portfolio.user.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;

@Service
@RequiredArgsConstructor
public class ProjectService {

    private final ProjectRepository projectRepository;
    private final UserRepository userRepository;

    public ProjectResponse createProject(ProjectRequest request) {

        // TEMPORAIRE (plus tard via JWT)
        User user = userRepository.findById(1L)
                .orElseThrow(() -> new RuntimeException("User not found"));

        Project project = Project.builder()
                .title(request.getTitle())
                .description(request.getDescription())
                .githubUrl(request.getGithubUrl())
                .demoUrl(request.getDemoUrl())
                .createdAt(LocalDateTime.now())
                .user(user)
                .build();

        projectRepository.save(project);

        return ProjectResponse.builder()
                .id(project.getId())
                .title(project.getTitle())
                .description(project.getDescription())
                .githubUrl(project.getGithubUrl())
                .demoUrl(project.getDemoUrl())
                .build();
    }

    public List<ProjectResponse> getAllProjects() {
        return projectRepository.findAll()
                .stream()
                .map(p -> ProjectResponse.builder()
                        .id(p.getId())
                        .title(p.getTitle())
                        .description(p.getDescription())
                        .githubUrl(p.getGithubUrl())
                        .demoUrl(p.getDemoUrl())
                        .build())
                .toList();
    }
}
