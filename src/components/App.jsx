var App = () => (
  <div className="row center-lg">
    <div className="col-lg-5">
      <Profile profile={exampleProfileData[0]}/>
    </div>
    <div className="col-lg-7">
      <MessageList messages={exampleMessageData}/>
    </div>
  </div>
);






// TODO: refactor later to use webpack
window.App = App;