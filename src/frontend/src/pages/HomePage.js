import {React, useEffect, useState} from 'react';
import {useParams,Link} from 'react-router-dom';
import {MatchDetailCard} from '../components/MatchDetailCard';
import {MatchSmallCard} from '../components/MatchSmallCard';
import {PieChart} from 'react-minimal-pie-chart';
import {TeamTile} from '../components/TeamTile';
import './HomePage.scss';


export const HomePage =()=> {
const [teams, setTeams] = useState([]);
 
  useEffect(
  ()=>{
  const fetchAllTeams = async () => {
  
  const response = await fetch(`http://localhost:8080/team`);
  const data = await response.json();
  console.log(data);
  setTeams(data);
  
  };
  fetchAllTeams();
  
  
  },[]
);

  return(
  
  <div className="HomePage">
  	<div className="header-section">
  		<h1 className="app-name"> IPL DASHBOARD </h1>
  	</div>
  	
  	<div className="team-grid"> 
  		
  		{teams.map(team => <TeamTile teamName={team.teamName} /> )}
  
  	</div>
  	
  
  </div>
  

  
  
  );
  
  
 
 
 
 
  }
  
  

  
  
