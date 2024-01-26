// import { Link } from "react-router-dom"
import styles from "./formRecoverPassword.module.css";

import { BsArrowRight } from "react-icons/bs";
import { AiOutlineCheck } from "react-icons/ai";

import IconCasa from "../../assets/icon-casa.svg";
import IconCamaleaoForm from "../../assets/camaleaoForm.svg";

// import { useForm } from "react-hook-form"

const FormRecoverPassword = () => {
  // const { register, handleSubmit, errors } = useForm()

  // const onSubmit = (data) => {
  //   console.log(data); // Aqui você pode manipular os dados do formulário
  // };

  return (
    <section className={styles.container}>
      <div className={styles.voltar}>
        {/* <Link to="/"> */}
        <p>Voltar</p>
        <img src={IconCasa} alt="Icone da casa" />
        {/* </Link> */}
      </div>

      <div className={styles.containerFormulario}>
        <div>
          <img src={IconCamaleaoForm} alt="Icone do camaleão" />
        </div>

        <div className={styles.form}>
          <div>
            <h2>Recuperar senha</h2>
          </div>

          <div className={styles.formTexto}>
            <p>
              Digite seu e-mail que enviaremos um link para definir uma nova
              senha.
            </p>
          </div>

          <form className={styles.containerInputs}>
            <div className={styles.containerLabelAndInput}>
              <label>E-mail</label>
              <input type="email" placeholder="Digite o seu e-mail" />
            </div>

            <button className={styles.containerBotao}>
              Recuperar <AiOutlineCheck color="white" size={24} />
            </button>
          </form>
        </div>
      </div>

      <div className={styles.containerCadastrar}>
        <p>Não é cadastrado?</p>
        <button className={styles.botaoCadastrar}>
          Cadastre-se
          <BsArrowRight color="white" size={24} />
        </button>
      </div>
    </section>
  );
};

export default FormRecoverPassword;
