import {
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardTitle,
  IonContent,
  IonPage,
} from "@ionic/react";
import "./Home.css";
import "swiper/css";
import "swiper/css/pagination";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

import { PeliculasContext } from "../App";
import { useContext } from "react";
import Toolbar from "../components/Toolbar/Toolbar";
import { Link } from "react-router-dom";

const Home: React.FC = () => {
  const peliculas = useContext(PeliculasContext);

  return (
    <IonPage>
      <Toolbar back={false} />
      <IonContent className="ion-padding">
        <Swiper pagination={true} modules={[Pagination]}>
          {peliculas?.map((pelicula) => (
            <SwiperSlide key={pelicula.id} style={{ paddingBottom: "15px" }}>
              <IonCard
                className="ion-text-center ion-padding ion-margin"
                style={{ height: "450px" }}
              >
                <Link to={`/peliculas/${String(pelicula.id)}`}>
                  <img
                    alt={pelicula.title}
                    src={`https://image.tmdb.org/t/p/w220_and_h330_face${pelicula.poster_path}`}
                  />
                </Link>
                <IonCardHeader>
                  <IonCardTitle>{pelicula.title}</IonCardTitle>
                </IonCardHeader>
              </IonCard>
            </SwiperSlide>
          ))}
        </Swiper>
      </IonContent>
    </IonPage>
  );
};

export default Home;
