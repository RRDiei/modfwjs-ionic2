/* Componentes de Ionic */
import {
  IonBackButton,
  IonButtons,
  IonHeader,
  IonMenuButton,
  IonTitle,
  IonToolbar,
} from "@ionic/react";

/* Componentes de la aplicación */
import Menu from "../Menu/Menu";

/* Barra de herramientas de la aplicación */
const Toolbar: React.FC<{ back: boolean }> = ({ back }) => {
  return (
    <>
      <Menu />
      <IonHeader className="ion-text-start">
        <IonToolbar color="primary">
          <IonButtons slot="end">
            {back ? <IonBackButton defaultHref="/" text="" /> : ""}
            <IonMenuButton autoHide={false} id="menu" />
          </IonButtons>
          <IonTitle>Películas Recientes</IonTitle>
        </IonToolbar>
      </IonHeader>
    </>
  );
};

export default Toolbar;
