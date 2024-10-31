import {
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardTitle,
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import "./Home.css";
import "swiper/css";
import "swiper/css/pagination";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

import { PeliculasContext } from "../App";
import { useContext } from "react";
import Toolbar from "../components/Toolbar/Toolbar";

const Home: React.FC = () => {
  const peliculas = useContext(PeliculasContext);

  return (
    <IonPage>
      <Toolbar />
      <IonContent className="ion-padding">
        <Swiper pagination={true} modules={[Pagination]}>
          {peliculas?.map((pelicula) => (
            <SwiperSlide key={pelicula.id}>
              <IonCard className="ion-text-center ion-padding ion-margin">
                <img
                  alt={pelicula.title}
                  src={`https://image.tmdb.org/t/p/w220_and_h330_face${pelicula.poster_path}`}
                />
                <IonCardHeader>
                  <IonCardTitle>{pelicula.title}</IonCardTitle>
                </IonCardHeader>
                <IonCardContent>
                  {pelicula.overview
                    ? `${pelicula.overview.slice(0, 150)}...`
                    : "Sin descripción disponible"}
                </IonCardContent>
              </IonCard>
            </SwiperSlide>
          ))}
        </Swiper>
      </IonContent>
    </IonPage>
  );
};

export default Home;
