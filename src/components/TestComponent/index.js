import useJsonFetch from '../../hooks';
import loadingGif from '../../images/loading.gif'

export default function ComponentData({url, opts, title}) {
  const [data, isLoading, hasError] = useJsonFetch(url, opts);
  return (
    <div className="component-body">
      <h2>{title}</h2>
      {isLoading &&  <img src={loadingGif} alt="loading" className="loading" />}
      {data && <p className="data">{JSON.stringify(data)}</p>}
      {hasError && <p className="error">{JSON.stringify(hasError)}</p>}
    </div>
  );
}
