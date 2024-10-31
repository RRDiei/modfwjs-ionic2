import {
  IonButtons,
  IonContent,
  IonHeader,
  IonItem,
  IonMenu,
  IonMenuButton,
  IonMenuToggle,
  IonTitle,
  IonToolbar,
} from "@ionic/react";

const Toolbar: React.FC = () => {
  return (
    <>
      <IonMenu contentId="menu" side="end">
        <IonHeader>
          <IonToolbar color="medium">
            <IonTitle>Menú</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent>
          <IonItem button routerLink="/">
            Home
          </IonItem>
          <IonItem button routerLink="/about">
            About
          </IonItem>
        </IonContent>
      </IonMenu>
      <IonHeader>
        <IonToolbar color="primary">
          <IonButtons slot="end">
            <IonMenuButton autoHide={false} id="menu" />
          </IonButtons>
          <IonTitle>Películas Recientes</IonTitle>
        </IonToolbar>
      </IonHeader>
    </>
  );
};

export default Toolbar;
