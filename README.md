## Start the app

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

when running the app using this command, you'll use the default video data located in the `videoMockFile` and `videoMockData` files. This way you wont experience expiration timeouts form the youtube api.

### `firebase serve`

Runs the app locally in production mode

when running the app using this command, you'll use the real time fetched data from the youtube api. Beware, you may experience expiration timeouts form the youtube api, due to the limit.

## Features

### Non logged in users

You can watch videos without being logged in. 
- In the home page you'll see a feed of the latest, most popular videos.
- In the navbar you can tap the search icon to look for a specific video or video title.
- If you click on any video card, you'll be able to watch the video in the app.
- In the player page you will also find some related videos in the side bar.

### Logged in users

You have some extra features if you log in
- You can add a video to your favorites list. If you tap on the start under each video, it'll be added to your favorites.
- You can see all your favorites videos in the /favorites page. If you log in, you'll see this tab in the menu.
- You can change your avatar if you go to `settings -> Profile Picture`. You'll preferred avatar will be stored and available next time you login.

## URLS

### Homepage

Link: https://aldoruiz-academy.firebaseapp.com/
Description: The application homepage. Shows the app title and a feed of the 16 most recent and popular videos.


### Search page
Link: https://aldoruiz-academy.firebaseapp.com/?q=${SEARCH_QUERY}
Description: Similar to the homepage. But you'll also get a hint regarding which search query your are currently viewing the results.

### Login

Link: https://aldoruiz-academy.firebaseapp.com/login
Description: The application login page. Allows you to authenticate. By authenticating you'll have access to the favorites videos feature, as well as changing your profile picture.

### Watch

Link: https://aldoruiz-academy.firebaseapp.com/watch?v=${VIDEO_ID}
Description: The application video player page. In here you'll be able to play the video (given in the query param) and also see some related videos in the side scroll. Under the video you'll get to see some details about it.

### Favorites

Link: https://aldoruiz-academy.firebaseapp.com/favorites
Description: The application favorites videos page. In here you'll have a list of all the videos you've added to your favorites. You can add a video to your favorites by clicking the start under the player's video. You can also erase all your favorite videos in this page. This page is only accessible if you are authenticated.


### Profile Picture

Link: https://aldoruiz-academy.firebaseapp.com/profile-picture
Description: The application profile picture page. In here you'll be able to change your avatar. This page is only accessible if you are authenticated. Non authenticated users will show an incognito profile picture. When an authenticated user selected a new profile picture, it will be stored and remain for the next time the user logs in.

### 404

Link: https://aldoruiz-academy.firebaseapp.com/some-invalid-url
Description: The application 404 page. If you ever type an incorrect page, you'll be redirected to this.
