# Contributing guidelines

## Adding yourself to the map

Find your latitude, longitude using this: https://maps.google.com/pluscodes/

In order to get yourself on the map, add your details in `src/components/json/worldData.js` by duplicating one of the existing entries such as:

```JavaScript
{
        "longitude": 77.3653,
        "latitude": 28.5192,
        "batch": 2020,
        "photo": abhinavsri360,
        "region": "Asia",
        "skills": ["App Dev", "Web Dev", "UI/UX", "Cloud"],
        "name": "Abhinav Srivastava",
        "bio": "I write something colorful on something very dark.",
        "url": "https://dsc.community.dev/jaypee-institute-of-information-technology-sec-128",
        "chapterName": "Jaypee Institute of Information Technology, Sec - 128",
        "github": "https://github.com/abhinavsri360",
        "linkedin": "https://linkedin.com/in/abhinavsri360",
        "twitter": "https://twitter.com/abhinavsri360",
        "portfolio": "https://abhinavsri360.netlify.app"
}
```

Import the image at the top of the file using:

```JavaScript
import abhinavsri360 from "../../photos/abhinavsri360.jpg";
```

### Notes for adding yourself to the map

- Don't forget to add your `jpg` photo with resolution of `400px*400px` in `src/photos/` with the file name as your GitHub username and import it.
- For url use the `https://dsc.community.dev` chapter URL.
- Use only the below mentioned skills in the skills array.

| AI/ML | App Dev | Cloud | UI/UX | Web Dev |
| ----- | ------- | ----- | ----- | ------- |

## Other PRs

Feel free to send PRs for bug fixes or new features.
