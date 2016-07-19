var App = () => (
  <div className="row">
    <div className="col s5">
      <Profile profile={exampleProfileData[0]}/>
    </div>
    <div className="col s7">
      <MessageList messages={exampleMessageData}/>
    </div>
  </div>
);






// TODO: refactor later to use webpack
window.App = App;