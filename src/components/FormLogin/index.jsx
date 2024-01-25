// import { Link } from "react-router-dom"
import styles from "./formLogin.module.css"

import { BsArrowRight } from "react-icons/bs"
import { AiOutlineUser } from "react-icons/ai"

import IconCasa from "../../assets/icon-casa.svg"
import IconCamaleaoForm from "../../assets/camaleaoForm.svg"

// import { useForm } from "react-hook-form"

const FormLogin = () => {

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
            <h2>Acesse a sua conta</h2>
          </div>

          <form className={styles.containerInputs}>
            <div className={styles.containerLabelAndInput}>
              <label>E-mail</label>
              <input 
                type="email" 
                placeholder="Digite o seu e-mail"
              />
            </div>

            <div className={styles.containerLabelAndInput}>
              <label>Senha</label>
              <input 
                type="password" 
                placeholder="Digite a sua senha"
              />
            </div>

            <div className={styles.containerEsqueceuSenha}>
              <p>Esqueceu a sua senha?</p>
            </div>

            <button className={styles.containerBotao}>
              Entrar <AiOutlineUser color="white" size={24} />
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
  )
}

export default FormLogin