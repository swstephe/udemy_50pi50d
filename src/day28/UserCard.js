function UserCard({ user, repos }) {
  return (
    <div className="card">
      <div>
        <img src={user.avatar_url} alt={user.name} className="avatar"/>
      </div>
      <div className="user-info">
        <h2>{user.name}</h2>
        <p>{user.bio}</p>
        <ul>
          <li>{user.followers} <strong>Followers</strong></li>
          <li>{user.following} <strong>Following</strong></li>
          <li>{user.public_repos} <strong>Repos</strong></li>
        </ul>

        <div id="repos">
          {repos.slice(0, 10).map((repo, idx) => (
            <a
              key={idx}
              className="repo"
              href={repo.html_url}
              target="_blank"
              rel="noreferrer"
            >
              {repo.name}
            </a>
          ))}
        </div>
      </div>
    </div>
  )
}

export default UserCard
