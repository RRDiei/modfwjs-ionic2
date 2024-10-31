import {
  IonBackButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonItem,
  IonMenu,
  IonMenuButton,
  IonTitle,
  IonToolbar,
} from "@ionic/react";

const Toolbar: React.FC<{ back: boolean }> = ({ back }) => {
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
      <IonHeader className="ion-text-start">
        <IonToolbar color="primary">
          <IonButtons slot="start"></IonButtons>
          <IonButtons slot="end">
            {back ? <IonBackButton defaultHref="/" /> : ""}
            <IonMenuButton autoHide={false} id="menu" />
          </IonButtons>
          <IonTitle>Películas Recientes</IonTitle>
        </IonToolbar>
      </IonHeader>
    </>
  );
};

export default Toolbar;
