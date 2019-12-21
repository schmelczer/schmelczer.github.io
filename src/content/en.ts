import { Portfolio } from "../model/portfolio";
import me from "../static/media/me.jpg";
import forex from "../static/media/forex.gif";
import myNotes from "../static/media/my-notes.jpg";
import processSimulator from "../static/media/process-simulator.jpg";
import processSimulatorInput from "../static/media/process-simulator-input.jpg";
import citySimulation from "../static/media/simulation.jpg";
import color from "../static/media/color.jpg";
import platform from "../static/media/platform.png";
import photos from "../static/media/photos.jpg";
import led from "../static/media/led.jpg";
import ledVideo from "../static/media/led720.mp4";

export const portfolio: Portfolio = {
  config: {
    showMore: "Show details",
    showLess: "Show less",
    aPictureOf: "a picture of",
    cvName: "Curriculum vitae"
  },
  header: {
    name: "András Schmelczer",
    picture: me,
    about: [
      `I have always been fascinated by the engineering feats that surround us. 
       When I realized that someday I might be able to contribute to these achievements, 
       I knew that is what I need to aim for. As I am finishing my fifth semester at the 
       Budapest University of Technology and Economics, I feel I am getting closer to it every day.`,
      `You can see some of the more interesting projects I have worked on below.`
    ]
  },
  timeline: [
    {
      title: "Predicting foreign exchange rates",
      date: "2019 Autumn",
      picture: forex,
      description: `From the animation we can see that my algorithm does a somewhat acceptable job at
       predicting (blue graph) the EUR/USD rates (green graph).`,
      more: [
        "In a nutshell, the algorithm (written with Python - NumPy, SciPy, Flask), extrapolates in the frequency domain. The steps are the following: smoothing the input values, differentiating, applying a short-time Fourier-transformation with overlapped (and Hanning-windowed) windows, extrapolating and then applying the inverse of these transformations to the extrapolated values.",
        "Of course, there is still plenty of room for improvement, but even with this simple algorithm a mostly profitable trading strategy is viable. In my free time I may put more work into it."
      ]
    },
    {
      date: "2019 November",
      title: "My Notes",
      picture: myNotes,
      description: "A minimalist note organizer and editor powered by Markwon.",
      more: [
        {
          type: "a",
          href: "https://github.com/schmelczerandras/my-notes",
          text: "MyNotes on GitHub"
        },
        "A basic android app for creating and filtering notes written in markdown.",
        "It was my homework for BME's Android and web development course. It was also my first experience with Android development."
      ]
    },
    {
      date: "2018 October - November",
      title: "Simulating the cooling system of a nuclear facility",
      picture: processSimulator,
      description:
        "Dynamically calculating the temperatures and flow velocities in a fluid based cooling system based on a simple model.",
      more: [
        "A simulated system can contain reactors (heaters / coolers), pumps, heat exchangers, drains sources, and of course, pipes.",
        "The algorithm takes advantages of graphs and matrices to get to a next time frame.",
        "Python is used for the backend along with Flask and NumPy. A REST API facilitates the communication between the layers. For drawing the frontend HTML5 canvas is utilized."
      ]
    },
    {
      date: "2018 October - November",
      title: "Graph editing application",
      picture: processSimulatorInput,
      description:
        "An intuitive editor to create and edit input files for the nuclear facility simulator.",
      more: [
        "Nodes can be moved with drag&drop gestures. Editing the parameters of elements can be done on the right panel.",
        "The UI is built with JavaFX. The output can be exported as JSON or directly uploaded to the simulation backend."
      ]
    },
    {
      date: "2018 July-August",
      title: "City simulation",
      picture: citySimulation,
      description:
        "Simulating a city where car crashes are more frequent than usual.",
      more: [
        "Through a REST API the state of the traffic lights can be changed. The drivers follow the instructions of the traffic lights, so if a mistake is made, there will be collisions. There is also support for displaying tweets on a HUD.",
        "This was created for a Cybersecurity challenge. With the help of this program the contestants could instantly see the effect of their work.",
        "The most interesting aspect of this project was building it in a server-client architecture. The decisions of the agents is calculated server-side. The real challenge was broadcasting these decisions in a fault-tolerant way using minimal bandwidth.",
        "The program is made with Unity using C# as the scripting language. The models and animations were also made by me using Blender."
      ]
    },
    {
      date: "2018 June",
      title: "Photo color grader",
      picture: color,
      description:
        "An innovative (at least I thought so) color grader web application.",
      more: [
        "The most noteworthy feature of this application is the color selector UI. This program is only intended as a proof-of-concept, I wanted to experiment with some ideas and this was the outcome. ",
        "You can select some colors and then apply transformations to the other colors as a function of their distance to the selected color.",
        "By clicking on a colored circle you can change its settings. New circles can be created by clicking in the large circle (and they can also be moved by drag&drop).",
        { type: "a", href: "color", text: "schmelczer.dev/color" }
      ]
    },
    {
      date: "2017 autumn",

      title: "Platform game",
      picture: platform,
      description:
        "A 3D game written in C with the help of SDL 1.2 (I haven't heard of GPU programming at the time).",
      more: [
        "The maps are randomly generated and fully destroyable. The player is getting chased by flying enemies. Overall, I find it a really enjoyable game.",
        "I did this as a homework for my Basics of Programming course."
      ]
    },
    {
      date: "2016 summer",
      title: "Photos",
      picture: photos,
      description: "A simple web page where you can view my photos.",
      link: "schmelczer.dev/photos"
    },
    {
      date: "2016 spring",
      title: "Lights synchronised to music",
      picture: led,
      description:
        "A full stack application with a built-in music player which music controls the color of some RGB LED strips.",
      more: [
        "This was my first non-trivial project which got finished. Obviously, it is rather far from perfect, but I am still proud that I was able to build it on my own.",
        "The backend logic is written in Python the FFT is provided by NumPy. A quite simple frontend for accessing the music player and changing the settings also got built using vanilla web development technologies.",
        "Below is a video showing the system in work.",
        { type: "video", src: ledVideo }
      ]
    }
  ],
  footer: {
    email: "andras.schmelczer@schdesign.hu",
    cv: "/static/media/andras_schmelczer_cv.pdf"
  }
};
