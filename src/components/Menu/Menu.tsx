/* Componentes de Ionic */
import {
  IonContent,
  IonHeader,
  IonIcon,
  IonItem,
  IonLabel,
  IonMenu,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import { clipboardOutline, homeOutline } from "ionicons/icons";

/* Menú de opciones */
const Menu: React.FC = () => {
  return (
    <IonMenu contentId="menu" side="end">
      <IonHeader>
        <IonToolbar color="medium">
          <IonTitle>Menú</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonItem button routerLink="/">
          <IonIcon icon={homeOutline} slot="start" />
          <IonLabel>Home</IonLabel>
        </IonItem>
        <IonItem button routerLink="/about">
          <IonIcon icon={clipboardOutline} slot="start" />
          <IonLabel>About</IonLabel>
        </IonItem>
      </IonContent>
    </IonMenu>
  );
};

export default Menu;
