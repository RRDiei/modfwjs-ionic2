import { IonContent, IonPage, IonText } from "@ionic/react";
import Toolbar from "../../components/Toolbar/Toolbar";

const About: React.FC = () => {
  return (
    <IonPage>
      <Toolbar back={true} />
      <IonContent className="ion-padding">
        <IonText>
          <h2>Acerca de esta aplicación</h2>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus
          vitae alias, suscipit culpa eligendi, cupiditate voluptates unde odit
          optio explicabo quam, tempore perferendis a modi. Ut suscipit incidunt
          numquam dolores. Eaque commodi nisi quidem voluptates nam qui nesciunt
          perspiciatis! Sit ut at fuga sed beatae ab, vitae natus earum aut, ex
          nemo dicta odit quaerat vero, quidem ratione vel a. Ut magni,
          repudiandae dolorem, facere iusto nesciunt tempore aperiam est laborum
          atque repellendus. Impedit suscipit, quisquam beatae tempore quis ea,
          dicta pariatur consectetur, saepe assumenda tenetur facere soluta!
          Eveniet, nam? Impedit cupiditate magni iste unde quam accusamus
          recusandae neque autem numquam! Cumque alias beatae eos unde possimus
          doloribus vitae similique sit. Porro distinctio alias, odit nisi hic
          ea exercitationem voluptatum.
        </IonText>
      </IonContent>
    </IonPage>
  );
};

export default About;
