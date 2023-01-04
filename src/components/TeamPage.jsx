import { Link, useParams } from "react-router-dom";
import useTeam from "../hooks/useTeam";
import useTeamNames from "../hooks/useTeamNames";
import useTeamsArticles from "../hooks/useTeamsArticles";
import TeamLogo from "./TeamLogo";
import { slugify } from "../utils";

function useTeamPageData(teamId) {
  const { response: teamNames, loading: loadingTeamName } = useTeamNames();

  const { response: articles, loading: loadingArticles } =
    useTeamsArticles(teamId);

  const { response: team, loading: loadingTeam } = useTeam(teamId);

  return {
    teamNames,
    team,
    articles,
    loading: loadingTeamName || loadingArticles || loadingTeam,
  };
}

export default function TeamPage() {
  const { teamId } = useParams();
  const { teamNames, articles, team, loading } = useTeamPageData(teamId);

  if (loading) {
    return <h1 className="text-center">Loading</h1>;
  }

  if (!teamNames.includes(teamId)) {
    return <h1 className="text-center">The {teamId} is not valid Team</h1>;
  }

  return (
    <div className="container">
      <div className="panel">
        <TeamLogo id={teamId} />
        <h1 className="medium-header">{team.name}</h1>
        <h4 style={{ margin: 5 }}>
          <Link to={{ pathname: "/players", search: `?teamId=${teamId}` }}>
            View Roster
          </Link>
        </h4>

        <h4>Championships</h4>
        <ul className="championships">
          {team.championships.map((ship) => (
            <li key={ship}>{ship}</li>
          ))}
        </ul>

        <ul className="info-list row" style={{ width: "100%" }}>
          <li>
            Est.<div>{team.established}</div>
          </li>
          <li>
            Manager<div>{team.manager}</div>
          </li>
          <li>
            Coach<div>{team.coach}</div>
          </li>
          <li>
            Record
            <div>
              {team.wins} - {team.losses}
            </div>
          </li>
        </ul>
        <ul className="articles">
          {articles.map((article) => (
            <li key={article.id}>
              <h4 className="article-title">
                <Link to={`articles/${slugify(article.title)}`}>
                  {article.title}
                </Link>
              </h4>
              <div className="article-date">
                {new Date(article.date).toLocaleString()}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
