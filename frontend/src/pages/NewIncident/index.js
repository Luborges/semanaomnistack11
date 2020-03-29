import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';

import './styles.css';

import logoImg from '../../assets/logo.svg';
import api from '../../services/api';

export default function NewIncident () {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [value, setValue] = useState('');

    const ngoId = localStorage.getItem('ngoId');

    const history = useHistory();

    const handleNewIncident = async (e) => {
        e.preventDefault();

        const data = {
            title, 
            description,
            value,
        }

        try {
            console.log(ngoId);
            await api.post('incidents', data, {
                headers: {
                    Authorization: ngoId,
                }
            });
            
            history.push('/profile');
        }
        catch (err) {
            alert('Erro ao cadastrar caso, por favor, tente novamente');
        }
    }

    return (
        <div className="new-incident-container">
            <div className="content">
                <section>
                    <img src={logoImg} alt="Be the Hero" />

                    <h1>Cadastrar novo caso</h1>
                    <p>
                        Descreva o caso detalhadamente para encontrar um herói para resolver isso.
                    </p>

                    <Link className="back-link" to='/profile'>
                        <FiArrowLeft size={16} color={"#e02041"} />
                        Voltar para home
                    </Link>

                </section>
                <form onSubmit={handleNewIncident}>
                    <input type="text" 
                        placeholder={"Título do caso"} 
                        value={title}
                        onChange={evt => setTitle(evt.target.value)}
                    />
                    <textarea 
                        placeholder={"Descrição"} 
                        value={description}
                        onChange={evt => setDescription(evt.target.value)}
                    />
                    <input type="text" 
                        placeholder={"Valor em reais"} 
                        value={value}
                        onChange={evt => setValue(evt.target.value)}
                    />

                    <button className={"button"} type="submit">Cadastrar</button>
                </form>
            </div>
        </div>
    )
}