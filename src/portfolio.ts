import { Text } from './framework/primitives/implementations/text';
import { Image } from './framework/primitives/implementations/image';
import { Video } from './framework/primitives/implementations/video';
import { Anchor } from './framework/primitives/implementations/anchor';
import { PageFooter } from './page/footer/footer';
import { PageHeader } from './page/about/about';
import { PageTimeline } from './page/timeline/timeline';
import { PageImageViewer } from './page/image-viewer/image-viewer';
import { last } from './framework/helper/last';

import me from './static/media/me.jpg';
import forexMP4 from './static/media/forex.mp4';
import forexWEBM from './static/media/forex.webm';
import adAstraMP4 from './static/media/ad_astra_720.mp4';
import adAstraWEBM from './static/media/ad_astra_720.webm';
import ad_astra_index from './static/media/ad_astra.jpg';
import myNotes from './static/media/my-notes.png';
import sdf2d from './static/media/sdf2d.png';
import processSimulator from './static/media/process-simulator.jpg';
import processSimulatorInput from './static/media/process-simulator-input.jpg';
import citySimulation from './static/media/simulation.jpg';
import colour from './static/media/color.jpg';
import platform from './static/media/platform.png';
import photos from './static/media/photos.jpg';
import led from './static/media/led.jpg';
import cvEnglish from './static/cv/cv_andras_schmelczer.pdf';
import ledMP4 from './static/media/led.mp4';
import ledWEBM from './static/media/led.webm';
import { ContainerPage } from './framework/container-page';
import { PageBackground } from './page/background/background';

export const create = () => {
  const page = {
    imageViewer: new PageImageViewer(),
    header: new PageHeader({
      name: `András Schmelczer`,
      picture: new Image(me, `a picture of me`),
      about: [
        new Text(
          `I have always been fascinated by the engineering feats that surround us. 
         When I realized that someday I might be able to contribute to these achievements, 
         I knew that is what I need to aim for. As I am starting my last semester at the 
         Budapest University of Technology and Economics, I feel I am getting closer to it every day.`
        ),
        new Text(
          `You can see some of the more interesting projects I have worked on below.`
        ),
      ],
    }),
    timeline: new PageTimeline({
      showMoreText: `Show details`,
      showLessText: `Show less`,
      elements: [
        {
          title: `SDF-2D library`,
          date: `2020 Autumn`,
          figure: new Image(sdf2d, `a screenshot of a demo scene`),
          description: new Text(
            `I created an NPM package for efficiently rendering and shading 2D scenes described 
            by signed distance fields (SDF-s). It supports both WebGL and WebGL2 and is easily extendible.`
          ),
          more: [
            new Text(
              `A multitude of optimisations were needed to achieve real-time performance even on low-end mobile devices.
              These include deferred shading, tile-based rendering, and dynamic shader generation to minimize unnecessary
              instructions. Additionally, there were some interesting quirks of specific hardware that also needed to be overcame.`
            ),
            new Text(
              `The end result is a reusable library written in TypeScript with a simple and elegant API. 
            For more information please check out the GitHub repository or the NPM package itself. Or simply enjoy the
            mesmerizing demo scenes.`
            ),
            new Anchor(`https://sdf2d.schmelczer.dev`, `View it in action`),
            new Anchor(
              `https://github.com/schmelczerandras/sdf-2d`,
              `Check it out on GitHub`
            ),
          ],
        },
        {
          title: `Video game on an ATtiny85`,
          date: `2020 Spring`,
          figure: new Video(
            last(ad_astra_index.images).path,
            adAstraMP4,
            adAstraWEBM,
            `controls playsinline preload="none"`
          ),
          description: new Text(
            `A simple game engine with a sample game set in space. The greatest challenge was to overcome
          the very limited resources of the hardware, this was also the most rewarding part.`
          ),
          more: [
            new Text(
              `For reducing complexity while maintaining performance a balance had to be found between object-oriented
              and structural programming. For example, a simple prototype-based inheritance is used for the game objects. 
              An optimized SIMD utilizing low level driver is used for drawing on the display. 
              I think the code base is quite readable and at the same time the 
              maximum frame times are between 15ms and 20ms at 8MHz.`
            ),
            new Text(
              `As for the hardware, it is rather simple. Aside from the ATtiny85V, a D096-12864-SPI7 display is used for
            output and a TSOP4838 for input. The circuit runs on 3.3V, so a regulator is also needed. It uses a current
            of 8mA to 11mA on full brightness and around 1.5mA on standby mode.`
            ),
            new Text(
              `There is also fault-tolerant persistent data storage using the built-in EEPROM. 
            For creating sprites (which are also stored in EEPROM) I made a tool to convert PNG-s into C code. 
            This can also be found on GitHub as well as the entire project.`
            ),
            new Anchor(
              `https://github.com/schmelczerandras/ad_astra`,
              `View it on GitHub`
            ),
          ],
        },

        {
          title: `Predicting foreign exchange rates`,
          date: `2019 Autumn`,
          figure: new Video(
            null,
            forexMP4,
            forexWEBM,
            `autoplay loop muted playsinline controls`
          ),
          description: new Text(
            `From the animation we can see that my algorithm does a somewhat acceptable job at
          predicting (blue graph) the EUR/USD rates (green graph).`
          ),
          more: [
            new Text(
              `In a nutshell, the algorithm (written with Python - NumPy, SciPy, Flask), 
            extrapolates in the frequency domain. The steps are the following: smoothing the input values, 
            differentiating, applying a short-time Fourier-transformation with overlapped (and Hanning-windowed) windows,
            extrapolating and then applying the inverse of these transformations to the extrapolated values.`
            ),
            new Text(
              `Of course, there is still plenty of room for improvement, but even with this simple algorithm
            a mostly profitable trading strategy is viable. In my free time I may put more work into it.`
            ),
          ],
        },
        {
          date: `2019 November`,
          title: `My Notes`,
          figure: new Image(myNotes, `two screenshots of the application`),
          description: new Text(
            `A minimalist note organizer and editor powered by Markwon.`
          ),
          more: [
            new Text(
              `A basic android app for creating and filtering notes written in markdown.`
            ),
            new Anchor(
              `https://github.com/schmelczerandras/my-notes`,
              `MyNotes on GitHub`
            ),
            new Text(
              `It was my homework for BME's Android and web development course.
            It was also my first experience with Android development.`
            ),
          ],
        },
        {
          date: `2018 October - November`,
          title: `Simulating the cooling system of a nuclear facility`,
          figure: new Image(processSimulator, `a screenshot of the simulator`),
          description: new Text(
            `Dynamically calculating the temperatures and flow velocities
          in a fluid-based cooling system based on a simple model.`
          ),
          more: [
            new Text(
              `A simulated system can contain reactors (heaters / coolers), pumps, heat exchangers,
            drains sources, and of course, pipes.`
            ),
            new Text(
              `The algorithm takes advantages of graphs and matrices to get to a next time frame.`
            ),
            new Text(
              `Python is used for the backend along with Flask and NumPy. A REST API facilitates 
             the communication between the layers. For drawing the frontend HTML5 canvas is utilized.`
            ),
          ],
        },
        {
          date: `2018 October - November`,
          title: `Graph editing application`,
          figure: new Image(processSimulatorInput, `a picture of the simulator's UI`),
          description: new Text(
            `An intuitive editor to create and edit input files for the nuclear facility simulator.`
          ),
          more: [
            new Text(
              `Nodes can be moved with drag&drop gestures. Editing the parameters of elements 
            can be done on the right panel.`
            ),
            new Text(
              `The UI is built with JavaFX. The output can be exported as JSON or 
            directly uploaded to the simulation backend.`
            ),
          ],
        },
        {
          date: `2018 July - August`,
          title: `City simulation`,
          figure: new Image(citySimulation, `a picture of a low-poly city`),
          description: new Text(
            `Simulating a city where car crashes are more frequent than usual.`
          ),
          more: [
            new Text(
              `Through a REST API the state of the traffic lights can be changed. 
            The drivers follow the instructions of the traffic lights, so if a mistake is made,
            there will be collisions. There is also support for displaying tweets on a HUD.`
            ),
            new Text(
              `This was created for a Cybersecurity challenge. With the help of this program 
            the contestants could instantly see the effect of their work.`
            ),
            new Text(
              `The most interesting aspect of this project was building it in a server-client architecture.
            The decisions of the agents is calculated server-side. The real challenge was broadcasting 
            these decisions in a fault-tolerant way using minimal bandwidth.`
            ),
            new Text(
              `The program is made with Unity using C# as the scripting language. The models and animations
            were also made by me using Blender.`
            ),
          ],
        },
        {
          date: `2018 June`,
          title: `Photo colour grader`,
          figure: new Image(colour, `a picture of the app`),
          description: new Text(
            `An innovative (at least I thought so) colour grader web application.`
          ),
          more: [
            new Text(
              `The most noteworthy feature of this application is the colour selector UI. 
            This program is only intended as a proof-of-concept, I wanted to experiment with 
            some ideas and this was the outcome.`
            ),
            new Text(
              `You can select some colours and then apply transformations to the other colours as a 
            function of their distance to the selected colour.`
            ),
            new Text(
              `By clicking on a coloured circle you can change its settings. 
            New circles can be created by clicking in the large circle (and they can also be moved by drag & drop).`
            ),
            new Anchor('https://color.schmelczer.dev', `color.schmelczer.dev`),
          ],
        },
        {
          date: `2017 autumn`,
          title: `Platform game`,
          figure: new Image(platform, `a picture of the app`),
          description: new Text(
            `A 3D game written in C with the help of SDL 1.2 (I haven't heard of GPU programming at the time).`
          ),
          more: [
            new Text(
              `The maps are randomly generated and fully destroyable. 
            The player is getting chased by flying enemies. Overall, I find it a really enjoyable game.`
            ),
            new Text(`I did this as a homework for my Basics of Programming course.`),
          ],
        },
        {
          date: `2016 summer`,
          title: `Photos`,
          figure: new Image(photos, `a picture of the website`),
          description: new Text(`A simple web page where you can view my photos.`),
          link: new Anchor(`https://photo.schmelczer.dev`, `photo.schmelczer.dev`),
        },
        {
          date: `2016 spring`,
          title: `Lights synchronised to music`,
          figure: new Video(
            last(led.images).path,
            ledMP4,
            ledWEBM,
            `controls playsinline preload="none"`
          ),
          description: new Text(
            `A full stack application with a built-in 
          music player which music controls the colour of some RGB LED strips.`
          ),
          more: [
            new Text(
              `This was my first non-trivial project which got finished. Obviously, 
            it is rather far from perfect, but I am still proud that I was able to build it on my own.`
            ),
            new Text(
              `The backend logic is written in Python the FFT is provided by NumPy. 
            A quite simple frontend for accessing the music player and changing 
            the settings also got built using vanilla web development technologies.`
            ),
          ],
        },
      ],
    }),
    footer: new PageFooter({
      title: `Learn more`,
      curiumVitaes: [{ name: `Curriculum vitae`, url: cvEnglish }],
      email: `andras@schmelczer.dev`,
      lastEditText: `Last modified on `,
      lastEdit: new Date(2020, 9 - 1, 24), // months are 0 indexed
    }),
  };

  new ContainerPage(document.body.querySelector('main'), [
    ...Object.values(page),
    new PageBackground(page.header, [page.timeline], page.footer),
  ]).setAsMain();
};
