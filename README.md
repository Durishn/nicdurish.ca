![Project State][stable-shield]
[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![MIT License][license-shield]][license-url]
[![LinkedIn][linkedin-shield]][linkedin-url]



<!-- PROJECT LOGO -->
<br />
<p align="center">
  <a href="https://github.com/Durishn/Durishn.github.io">
    <img src="img/favicon.png" alt="Logo" width="80" height="80">
  </a>

  <h2 align="center"><a href="https://nicdurish.ca">Nic Durish.ca</a></h2>

  <p align="center">
    A tailormade portfolio site, running Jekyll, hosted through Netlify!
    <br />
    <br />
    <a href='https://www.buymeacoffee.com/nicdurish' target='_blank' style='margin-top:50px;'><img height='30' src='https://az743702.vo.msecnd.net/cdn/kofi1.png?v=0' border='0' alt='Buy Me a Coffee' /></a>

  </p>
</p>



<!-- TABLE OF CONTENTS -->
<details open="open">
  <summary><h2 style="display: inline-block">Table of Contents</h2></summary>
  <ol>
    <li><a href="#about-the-project">About The Project</a></li>
    <li><a href="#getting-started">Getting Started</a></li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#authors">Authors</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#acknowledgements">Acknowledgements</a></li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## About The Project

"Hey!, Listen!"

You've stumbled upon the repository for Nic's personal website aka [Durishn.github.io](https://github.com/Durishn/Durishn.github.io), located at [nicdurish.ca](https://nicdurish.ca). This site was built with [Jekyll](http://jekyllrb.com/), the open source static site generator that deserves a glance. Jekyll combines with Github to allow me to host my site for free using the basic HTML5, SCSS, Javascript and Markdown files served through [Netlify](https://netlify.com/)! This site has been a fun side project for me. An opportunity to freely experiment with building a website from scratch.

This site has been through a number of iterations - not just small changes, significant reformats to the design and codebase. Feel free to look through the commit history, or you can checkout the initial version of the site at v1.nicdurish.ca or it's blog branch at blog.nicdurish.ca. 

Interested in using or modifying some of this code for your own project? Thats awesome! Please just make sure I am referenced, and the my LICENSE stays with my code. 

**Notable Features**
- Has a 'no javascript' fallback
- Dynamic and Interactive Background
- Auto colour swap based on section
- Darkmode switch
- Configuration-based content editting
- Contact Form using GetForm
- All served as a static site :)




<!-- GETTING STARTED -->
## Getting Started

To get a local copy up and running follow these simple steps.

Before using this software, ensure you have the necessary prerequisites by running:
  ```sh
  npm install npm@latest -g
  ```

Then get a clone this directory using:
   ```sh
   git clone https://github.com/Durishn/Durishn.github.io.git
   ```

Finally install the necessary packages using
   ```sh
   npm install
   ```

Changes to styling must be updating using 
   ```sh
   gulp
   ```

Finally the project can either be served using
 ```sh
 bundle exec jekyll serve
 ```

or built using
```sh
bundle exec jekyll build
```


<!-- ROADMAP -->
## Roadmap

See the [open issues](https://github.com/Durishn/Durishn.github.io/issues) for a list of proposed features (and known issues).




<!-- Authors -->
## Authors
Nic Durish - [@Durishn](https://twitter.com/Durishn) - [mail@nicdurish.ca](mailto:mail@nicdurish.ca)


<!-- LICENSE -->
## License
Distributed under the GNU AGPLv3 License. See [`LICENSE`][license-url] for more information.



<!-- ACKNOWLEDGEMENTS -->
## Acknowledgements
Whilst the vast majority of the code used for this site was fully customized, there were a few libraries that were also used (referenced within code). These include:
* [Vincent Garreau's Particle.js](https://github.com/VincentGarreau/particles.js/) for interactive particle based backgrounds.
* [Mamboleoo's Decorative Background Demo](https://github.com/Mamboleoo/DecorativeBackgrounds) for non-interactive shape based backgrounds
*  [Matt Boldt's Typed.js](https://github.com/mattboldt/typed.js/) for the 'typed' subtitle on the splash page
* [Alex Lerida's Darkmode Switch animation](https://codepen.io/lerida/pen/ZEbWBjp)




<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->


[stable-shield]: https://img.shields.io/badge/stability-stable-green.svg
[unstable-shield]: https://img.shields.io/badge/stability-unstable-yellow.svg
[deprecated-shield]: https://img.shields.io/badge/stability-deprecated-orange.svg
[experimental-shield]: https://img.shields.io/badge/stability-experimental-red.svg

[contributors-shield]: https://img.shields.io/github/contributors/Durishn/Durishn.github.io.svg
[contributors-url]: https://github.com/Durishn/Durishn.github.io/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/Durishn/Durishn.github.io.svg
[forks-url]: https://github.com/Durishn/Durishn.github.io/network/members
[stars-shield]: https://img.shields.io/github/stars/Durishn/Durishn.github.io.svg
[stars-url]: https://github.com/Durishn/Durishn.github.io/stargazers
[issues-shield]: https://img.shields.io/github/issues/Durishn/Durishn.github.io.svg
[issues-url]: https://github.com/Durishn/Durishn.github.io/issues
[license-shield]: https://img.shields.io/github/license/Durishn/Durishn.github.io.svg
[license-url]: https://github.com/Durishn/Durishn.github.io/blob/master/LICENSE
[linkedin-shield]: https://img.shields.io/badge/-Github-black.svg?logo=github&colorB=555
[linkedin-url]: https://github.com/Durishn
[product-screenshot]: docs/images/screenshot.png