import { IMovie } from "./movie";

export const MOVIES: IMovie[]=
[
    {
        id: 1,
      title: "Dune",
      description: "Dune is a 2021 American epic science fiction film directed by Denis Villeneuve, who co-wrote the screenplay with Jon Spaihts and Eric Roth",
      year: 2021,
      imageUrl:"https://th.bing.com/th/id/R.812a5bfc7cbfd210009791d70370d8ff?rik=81AOcg2TlTUJgA&pid=ImgRaw&r=0",
      duration: { hours: 1, minutes: 20 },
      isCurrent: true,
      genres: ["Drama", "Craim", "Action"]
    },
    {
        id:2,
      title: "Man on Fire",
      description: "John, an ex-CIA officer, is entrusted with the responsibility of safeguarding an entrepreneur's daughter. When the girl gets kidnapped, John vows to seek revenge.",
      year: 2004,
      imageUrl: "https://media.senscritique.com/media/000000135892/source_big/man_on_fire.jpg",
      duration: { hours: 2, minutes: 26 },
      isCurrent: false,
      genres: ["Drama", "Craim", "Action"]
    },
    {
        id:3,
      title: "Gladiator",
      description: "Commodus takes over power and demotes Maximus, one of the preferred generals of his father, Emperor Marcus Aurelius. As a result, Maximus is relegated to fighting till death as a gladiator.",
      year: 2000,
      imageUrl: "https://th.bing.com/th/id/R.4431bd4cc9381ba8fe482e83367f3a49?rik=yZcXzJXPPPTRvA&riu=http%3a%2f%2fwww.movie-blogger.com%2fwp-content%2fuploads%2f2016%2f12%2fgladiator.jpg&ehk=72aZIwe1Gh8IExk%2feM%2f0oSQJgOH91RlzIIrgtsRL%2foE%3d&risl=&pid=ImgRaw&r=0",
      duration: { hours: 2, minutes: 35 },
      isCurrent: false,
      genres: ["Drama", "Action","History"]
    }
  ];
