import classNames from 'classnames'
const IMG_PATH = 'https://image.tmdb.org/t/p/w1280'
const PLACEHOLDER = 'https://images.unsplash.com/photo-1518173835740-f5d14111d76a?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1154&q=80'

function imgUrl(poster_path) {
  if (!poster_path) {
    return PLACEHOLDER
  }
  return IMG_PATH + poster_path
}

function Movie(props) {
  const { title, poster_path, vote_average, overview } = props

  return (
    <div className="movie">
      <img src={imgUrl(poster_path)} alt={title}/>
      <div className="movie-info">
        <h3>Movie Title</h3>
        <span className={classNames({
          'green': vote_average >= 8,
          'orange': vote_average >= 5 && vote_average < 8,
          'red': vote_average < 5
        })}>{vote_average}</span>
      </div>
      <div className="overview">
        <h3>Overview</h3>
        {overview}
      </div>
    </div>
  )
}

export default Movie
