/* Componentes de Ionic */
import {
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonContent,
  IonPage,
} from "@ionic/react";
import "./Home.css";
import "swiper/css";
import "swiper/css/pagination";

/* Componentes de Swiper */
import { Swiper, SwiperSlide } from "swiper/react";
import { Keyboard, Mousewheel, Pagination } from "swiper/modules";


/* Componentes de React */
import { useContext } from "react";
import { Link } from "react-router-dom";

/* Componentes de la aplicación */
import Toolbar from "../../components/Toolbar/Toolbar";

/* Contexto */
import { PeliculasContext } from "../../App";

/* Página Home */
const Home: React.FC = () => {
  const peliculas = useContext(PeliculasContext);

  return (
    <IonPage>
      <Toolbar back={false} />
      <IonContent className="ion-padding">
        <Swiper
          pagination={true}
          keyboard={true}
          mousewheel={true}
          modules={[Pagination, Keyboard, Mousewheel]}
          centeredSlides={false}
          breakpoints={{
            600: {
              slidesPerView: 2,
            },
            900: {
              slidesPerView: 3,
            },
            1200: {
              slidesPerView: 4,
            },
            1600: {
              slidesPerView: 5,
            },
          }}
        >
          {peliculas?.map((pelicula) => (
            <SwiperSlide key={pelicula.id} style={{ paddingBottom: "15px", width: "80%" }}>
              <IonCard
                className="ion-text-center ion-padding ion-margin"
                style={{ height: "500px" }}
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
