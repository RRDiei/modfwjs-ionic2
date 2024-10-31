import { Redirect, Route } from "react-router-dom";
import { useState, useEffect, createContext } from "react";
import { IonApp, IonRouterOutlet, setupIonicReact } from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";

/* Páginas */
import Home from "./pages/Home";
import About from "./pages/About";
import Detalles from "./pages/Detalles";

/* Core CSS required for Ionic components to work properly */
import "@ionic/react/css/core.css";

/* Basic CSS for apps built with Ionic */
import "@ionic/react/css/normalize.css";
import "@ionic/react/css/structure.css";
import "@ionic/react/css/typography.css";

/* Optional CSS utils that can be commented out */
import "@ionic/react/css/padding.css";
import "@ionic/react/css/float-elements.css";
import "@ionic/react/css/text-alignment.css";
import "@ionic/react/css/text-transformation.css";
import "@ionic/react/css/flex-utils.css";
import "@ionic/react/css/display.css";

/**
 * Ionic Dark Mode
 * -----------------------------------------------------
 * For more info, please see:
 * https://ionicframework.com/docs/theming/dark-mode
 */

/* import '@ionic/react/css/palettes/dark.always.css'; */
/* import '@ionic/react/css/palettes/dark.class.css'; */
import "@ionic/react/css/palettes/dark.system.css";

/* Theme variables */
import "./theme/variables.css";

/* Utilidades */
import peliculas from "./assets/movies.json";
import { Pelicula } from "./helpers";


export const PeliculasContext = createContext<Pelicula[] | null>(null);

setupIonicReact();

const App: React.FC = () => {
  const [cincoPeliculas, setCincoPeliculas] = useState<Pelicula[] | null>(null);

  useEffect(() => {
    const peliculasElegidas = new Set<Pelicula>();
    while (peliculasElegidas.size < 5) {
      const index = Math.floor(Math.random() * peliculas.length);
      peliculasElegidas.add(peliculas[index]);
    }

    setCincoPeliculas(Array.from(peliculasElegidas));
  }, []);

  return (
    <PeliculasContext.Provider value={cincoPeliculas}>
      <IonApp>
        <IonReactRouter>
          {/* <IonRouterOutlet> */}
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/peliculas/:id" component={Detalles} />
          <Route render={() => <Redirect to="/" />} />
          {/* </IonRouterOutlet> */}
        </IonReactRouter>
      </IonApp>
    </PeliculasContext.Provider>
  );
};

export default App;
