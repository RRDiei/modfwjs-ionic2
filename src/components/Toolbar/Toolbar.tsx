import {
  IonBackButton,
  IonButtons,
  IonHeader,
  IonMenuButton,
  IonTitle,
  IonToolbar,
} from "@ionic/react";

import Menu from "../Menu/Menu";

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
