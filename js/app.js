const BASE_API = 'https://graph.instagram.com/me';
const ACCESS_TOKEN = 'IGQVJWZAEpHU2ZAhQ1RDVXQtYUlkR2xkUTNvb1YzajBtazNnVll1TUxxenpQeHV3TFJoV2djNlhINVNfNlRaMlZApd29YdlpZAc3dRSmRoRThYU1d2NTZA3TW9CU19QbTc4OHRQdzRwOVRmVWVsMUpiTDBXN0NCU243R09ydEtZA';


// Variables
const username = document.getElementById('username');
const post = document.getElementById('posts');
const photos = document.getElementById('photos');

async function getUserInfo() {
  const response = await fetch(`${BASE_API}?fields=username,media_count&access_token=${ACCESS_TOKEN}`)
  const userInfo = await response.json();
  username.innerHTML = userInfo.username;
  posts.innerHTML = userInfo.media_count;
  console.log(userInfo)
  return userInfo
};

async function getUserMediaInfo() {
  const response = await fetch(`${BASE_API}/media?fields=id,media_type,media_url&access_token=${ACCESS_TOKEN}`)
  const userMediaInfo = await response.json();
  console.log(userMediaInfo)
  return userMediaInfo


}

getUserInfo();

getUserMediaInfo().then(media => {
  media.data.map((mediaInfo) => {
    const img = document.createElement('img')
    if (mediaInfo.media_type == 'IMAGE') {
      img.src = mediaInfo.media_url
      photos.appendChild(img)
    }

  })
});