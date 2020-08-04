import React from 'react'

import whatsappIcon from '../../assets/images/icons/whatsapp.svg'

import './styles.css'

function TeacherItem() {
    return (
        <article className="teacher-item">
            <header>
                <img src="https://avatars1.githubusercontent.com/u/33229271?s=460&u=70a7ae6730564ac73b2e438b436bc5a92f93e198&v=4" alt="Arthur de Bortoli" />
                <div>
                    <strong>Arthur de Bortoli</strong>
                    <span>Matemática</span>
                </div>
            </header>
            <p>
                Fullstack Developer @ ASP Softwares. Amante de Node.js, React, Angular, React-Native e das mais novas tecnologias Web!
                    <br /><br />
                    E também gosto de matemática!
                    </p>
            <footer>
                <p>
                    Preço/hora
                            <strong>R$ 50,00</strong>
                </p>
                <button type="button">
                    <img src={whatsappIcon} alt="Whatsapp" />
                            Entrar em contato
                        </button>
            </footer>
        </article>
    )
}

export default TeacherItem