import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import "./Home.css";

import { PeliculasContext } from "../App";
import { useContext } from "react";

const Home: React.FC = () => {
  const peliculas = useContext(PeliculasContext);

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color="primary" className="ion-text-center">
          <IonTitle>Películas Recientes</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        {peliculas?.map((peli) => (
          <p key={peli.id}>{peli.title}</p>
        ))}
      </IonContent>
    </IonPage>
  );
};

export default Home;
