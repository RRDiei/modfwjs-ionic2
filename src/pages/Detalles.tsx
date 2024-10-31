import { useContext } from "react";
import { PeliculasContext } from "../App";
import { useParams } from "react-router-dom";
import {
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardTitle,
  IonContent,
  IonIcon,
  IonItem,
  IonLabel,
  IonPage,
} from "@ionic/react";

import { medalOutline, calendarOutline } from "ionicons/icons";

import Toolbar from "../components/Toolbar/Toolbar";

const Detalles: React.FC = () => {
  const peliculas = useContext(PeliculasContext);
  const { id } = useParams<{ id: string }>();

  const pelicula = peliculas?.find((peli) => peli.id === +id);

  if (!pelicula) {
    return (
      <IonPage>
        <Toolbar back={true} />
        <IonContent className="ion-padding">Película encontrada</IonContent>
      </IonPage>
    );
  }

  return (
    <IonPage>
      <Toolbar back={true} />
      <IonContent className="ion-padding">
        <IonCard className="ion-text-center ion-padding-top">
          <img
            alt={pelicula.title}
            src={`https://image.tmdb.org/t/p/original${pelicula.poster_path}`}
            style={{ width: "80%" }}
          />
          <IonCardHeader>
            <IonCardTitle>{pelicula!.title}</IonCardTitle>
          </IonCardHeader>
          <IonCardContent>
            {pelicula!.overview
              ? pelicula!.overview
              : "Sin descripción disponible"}
          </IonCardContent>
          <IonItem lines="none">
            <IonIcon icon={calendarOutline} slot="start" />
            <IonLabel>{pelicula.release_date}</IonLabel>
          </IonItem>
          <IonItem lines="none">
            <IonIcon icon={medalOutline} slot="start" />
            <IonLabel>{pelicula.vote_average}</IonLabel>
          </IonItem>
        </IonCard>
      </IonContent>
    </IonPage>
  );
};

export default Detalles;
