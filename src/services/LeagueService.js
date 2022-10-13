var token = YuHBdSlDXY000xa8IlCm7Qgq4_s;
/**
 * A class representing a service that processes the data for match schedule
 * and generates leaderboard.
 * 
 * NOTE: MAKE SURE TO IMPLEMENT ALL EXISITNG METHODS BELOW AND
 *       PLEASE DO NOT RENAME, MOVE OR DELETE THIS FILE.  
 */ 
class LeagueService {    
    /**
     * Sets the match schedule.
     * Match schedule will be given in the following form:
     * [
     *      {
     *          matchDate: [TIMESTAMP],
     *          stadium: [STRING],
     *          homeTeam: [STRING],
     *          awayTeam: [STRING],
     *          matchPlayed: [BOOLEAN],
     *          homeTeamScore: [INTEGER],
     *          awayTeamScore: [INTEGER]
     *      },
     *      {
     *          matchDate: [TIMESTAMP],
     *          stadium: [STRING],
     *          homeTeam: [STRING],
     *          awayTeam: [STRING],
     *          matchPlayed: [BOOLEAN],
     *          homeTeamScore: [INTEGER],
     *          awayTeamScore: [INTEGER]
     *      }    
     * ]
     * 
     * @param {Array} matches List of matches.
     */    
    setMatches(matches) {
        
    }

    /**
     * Returns the full list of matches.
     * 
     * @returns {Array} List of matches.
     */
    getMatches() {
        fetch("http://localhost:3001/api/v1/getAllMatches", {
            method: GET,
            headers: {
                Authorization: `Bearer ${token}` 
            },
            
        })
        .then(response => response.text())
        .then(text => console.log(text))
        console.log(text)
    }
    

    /**
     * Returns the leaderboard in a form of a list of JSON objecs.
     * 
     * [     
     *      {
     *          teamName: [STRING]',
     *          matchesPlayed: [INTEGER],
     *          goalsFor: [INTEGER],
     *          goalsAgainst: [INTEGER],
     *          points: [INTEGER]     
     *      },      
     * ]       
     * 
     * @returns {Array} List of teams representing the leaderboard.
     */
    getLeaderboard() {}
    
    
    
    /**
     * Asynchronic function to fetch the data from the server.
     */
    async fetchData() {
        const res = await fetch("http://localhost:3001/api/v1/getAllMatches", {
            headers: {
                Authorization: `Bearer ${token}` 
                
            },
            
            
        })
        console.log(res)
        .then(response => response.json())
        .then(data => console.log(data))
        console.log(data)
    }
    }    


export default LeagueService;