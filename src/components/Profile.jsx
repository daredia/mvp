var Profile = ({profile}) => (
  <div>
    <img className="responsive-img" src={`${profile.image}`}/>
    <p>{profile.name}, {profile.age}</p>
    <p>{profile.distance} miles away</p>
    <a className="waves-effect waves-light btn-large"><i className="material-icons left">not_interested</i>no</a>
    <a className="waves-effect waves-light btn-large"><i className="material-icons left">done</i>yes</a>
  </div>
);






// TODO: refactor later to use webpack
window.Profile = Profile;