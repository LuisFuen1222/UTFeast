import {
  IonAvatar,
  IonButton,
  IonCol,
  IonContent,
  IonGrid,
  IonImg,
  IonInput,
  IonPage,
  IonRouterLink,
  IonRow,
  IonText,
} from "@ionic/react";
import "./Register.css";
import BackButton from "../../components/backBtn/BackButton";
import axios from "axios";
import { useState } from "react";

const Register: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = async () => {
    if (password !== confirmPassword) {
      alert("Las contraseñas no coinciden");
      return;
    }

    try {
      const response = await axios.post("http://localhost:5100/users", {
        email,
        password,
      });
      console.log("Registro exitoso:", response.data);
    } catch (error) {
      console.error("Error al registrarse:", error);
    }
  };

  return (
    <IonPage>
      <IonContent >
        <BackButton />
        <IonGrid className="register">
          <IonRow className="register__row--top">
            <IonCol className="register__col--top">
              <IonImg
                className="register__logo--img"
                alt="UTFeast Logo" src="src\assets\images\utfeast-logo.svg"
              ></IonImg>
              <IonText className="register__text"><h1>Registrate</h1></IonText>
            </IonCol>
          </IonRow>
          <IonRow className="register__row--form">
            <IonCol className="register__col--form">
            <IonInput
                className="register__input"
                label="Correo institucional"
                type="email"
                labelPlacement="floating"
                fill="outline"
                placeholder="Ingresa tu correo institucional"
                value={email} 
                onIonInput={(e) => setEmail(e.detail.value!)}
              ></IonInput>
              <IonInput
                className="register__input"
                label="Contraseña"
                type="password"
                labelPlacement="floating"
                fill="outline"
                placeholder="Contraseña"
                value={password}
                onIonInput={(e) => setPassword(e.detail.value!)}
              ></IonInput>
              <IonInput
                className="register__input"
                label="Confirmar contraseña"
                type="password"
                labelPlacement="floating"
                fill="outline"
                placeholder="Contraseña"
                value={confirmPassword}
                onIonInput={(e) => setConfirmPassword(e.detail.value!)}
              ></IonInput>
            </IonCol>
          </IonRow>
          <IonRow className="register__row--bottom">
            <IonCol className="register__col--bottom">
              <IonRouterLink routerLink="/verify">
                <IonButton className="register__button" shape="round" onClick={handleSubmit}>Continuar</IonButton>
              </IonRouterLink>
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default Register;
