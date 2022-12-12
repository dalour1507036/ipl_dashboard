package com.java.IPLDashBoard.repository;

import org.springframework.data.repository.CrudRepository;

import com.java.IPLDashBoard.model.Team;

public interface TeamRepository extends CrudRepository<Team, Long>{

	Team findByTeamName(String teamName);
}
