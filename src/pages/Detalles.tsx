import { useContext } from "react";
import { PeliculasContext } from "../App";
import { useParams } from "react-router-dom";
import { IonContent, IonPage } from "@ionic/react";
import Toolbar from "../components/Toolbar/Toolbar";

const Detalles: React.FC = () => {
  const peliculas = useContext(PeliculasContext);
  const { id } = useParams<{ id: string }>();

  const pelicula = peliculas?.find((peli) => peli.id === +id);

  if (!pelicula) {
    return (
      <IonPage>
        <Toolbar back={true} />
        <IonContent className="ion-padding">Película no encontrada</IonContent>
      </IonPage>
    );
  }

  return (
    <IonPage>
      <Toolbar back={true} />
      <IonContent className="ion-padding">Película encontrada</IonContent>
    </IonPage>
  );
};

export default Detalles;
