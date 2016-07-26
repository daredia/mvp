var exampleProfileData = [{ // array of profile objects
  image: 'http://factmag-images.s3.amazonaws.com/wp-content/uploads/2013/12/beyonce-121313.jpg',
  name: 'Beyonce',
  age: 29,
  distance: 10,
  seen: '9 hours ago',
  bio: {
    hometown: 'Houston, TX',
    occupation: 'Musician',
    quote: 'My body too bootylicious for ya babe',
    text: 'I am fierce, and I dont think you ready for this jelly'
  }
}]; 

var exampleMessageData = [{ // array of message objects
  id: 1,
  name: 'Kanye',
  age: 31,
  image: 'http://imf.ulximg.com/image/300x300/artist/1392767353_217f16228baaa5dc18c82925ac76edf6.jpg/8836f2626a5fce620c3db02a6108439f/1392767353_kanye_west_wall_40.jpg',
  messages: ['I will be in your neighborhood doing errands this weekend. Do you want to grab brunch?'],
  new: true
},
{
  id: 2,
  name: 'Kanye',
  age: 31,
  image: 'http://imf.ulximg.com/image/300x300/artist/1392767353_217f16228baaa5dc18c82925ac76edf6.jpg/8836f2626a5fce620c3db02a6108439f/1392767353_kanye_west_wall_40.jpg',
  messages: ['I made that bitch famous'],
  new: false
},
{
  id: 3,
  name: 'Kanye',
  age: 31,
  image: 'http://imf.ulximg.com/image/300x300/artist/1392767353_217f16228baaa5dc18c82925ac76edf6.jpg/8836f2626a5fce620c3db02a6108439f/1392767353_kanye_west_wall_40.jpg',
  messages: ['Ima let you finish but...'],
  new: false
}]; 

export {exampleProfileData, exampleMessageData};