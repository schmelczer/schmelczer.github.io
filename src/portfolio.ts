import { Portfolio } from './model/portfolio';
import { Text } from './framework/primitives/implementations/text';
import { Image } from './framework/primitives/implementations/image';
import { Video } from './framework/primitives/implementations/video';
import { Anchor } from './framework/primitives/implementations/anchor';

import me from './static/media/me.jpg';
import forexMP4 from './static/media/forex.mp4';
import forexWEBM from './static/media/forex.webm';
import myNotes from './static/media/my-notes.png';
import processSimulator from './static/media/process-simulator.jpg';
import processSimulatorInput from './static/media/process-simulator-input.jpg';
import citySimulation from './static/media/simulation.jpg';
import color from './static/media/color.jpg';
import platform from './static/media/platform.png';
import photos from './static/media/photos.jpg';
import led from './static/media/led.jpg';
import europass from './static/cv/andras_schmelczer_europass.pdf';
import cv from './static/cv/schmelczer_andras_cv.pdf';
import ledMP4 from './static/media/led.mp4';
import ledWEBM from './static/media/led.webm';
import { last } from './framework/helper/last';

export const portfolio: Portfolio = {
  header: {
    name: `András Schmelczer`,
    picture: new Image(me, `a picture of me`),
    about: [
      new Text(
        `I have always been fascinated by the engineering feats that surround us. 
         When I realized that someday I might be able to contribute to these achievements, 
         I knew that is what I need to aim for. As I am starting my sixth semester at the 
         Budapest University of Technology and Economics, I feel I am getting closer to it every day.`
      ),
      new Text(
        `You can see some of the more interesting projects I have worked on below.`
      ),
    ],
  },
  timeline: {
    showMoreText: `Show details`,
    showLessText: `Show less`,
    elements: [
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
          in a fluid based cooling system based on a simple model.`
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
        figure: new Image(
          processSimulatorInput,
          `a picture of the simulator's UI`
        ),
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
        title: `Photo color grader`,
        figure: new Image(color, `a picture of the app`),
        description: new Text(
          `An innovative (at least I thought so) color grader web application.`
        ),
        more: [
          new Text(
            `The most noteworthy feature of this application is the color selector UI. 
            This program is only intended as a proof-of-concept, I wanted to experiment with 
            some ideas and this was the outcome.`
          ),
          new Text(
            `You can select some colors and then apply transformations to the other colors as a 
            function of their distance to the selected color.`
          ),
          new Text(
            `By clicking on a colored circle you can change its settings. 
            New circles can be created by clicking in the large circle (and they can also be moved by drag & drop).`
          ),
          new Anchor('color', `schmelczer.dev/color`),
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
          new Text(
            `I did this as a homework for my Basics of Programming course.`
          ),
        ],
      },
      {
        date: `2016 summer`,
        title: `Photos`,
        figure: new Image(photos, `a picture of the website`),
        description: new Text(
          `A simple web page where you can view my photos.`
        ),
        link: new Anchor(`photos`, `schmelczer.dev/photos`),
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
          music player which music controls the color of some RGB LED strips.`
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
  },
  footer: {
    title: `Learn more`,
    curiumVitaes: [
      { name: `Curriculum vitae (en)`, url: europass },
      { name: `Önéletrajz (hu)`, url: cv },
    ],
    email: `andras@schmelczer.dev`,
    lastEditText: `Last modified on `,
    lastEdit: new Date(2020, 0, 10), // months are 0 indexed
    gitHub: new Anchor(
      `https://github.com/schmelczerandras/timeline`,
      `Find this on GitHub`
    ),
  },
};
