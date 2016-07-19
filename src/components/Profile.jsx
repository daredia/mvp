var Profile = ({profile}) => (
  <div>
    <img className="responsive-img" src={`${profile.image}`}/>
  </div>
);






// TODO: refactor later to use webpack
window.Profile = Profile;