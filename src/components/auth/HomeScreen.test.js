import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import { useForm } from '../../hooks/useForm';
import { startTextSend } from '../../actions/auth';

export const HomeScreen = () => {

    const dispatch = useDispatch();

    const [list, setList] = useState([])
    const [formValues, handleInputChange] = useForm({
        text: '',
    });

    const { text } = formValues;

    const handleTextSend = (e) => {
        e.preventDefault();
        dispatch(startTextSend(text));
    }

    return (
        <>
            <h3 class="auth__title">insert word</h3>

            <form
                onSubmit={handleTextSend}
                className="animate__animated animate__fadeIn animate__faster"
            >

                <input
                    type="text"
                    placeholder="Text"
                    name="text"
                    className="auth__input"
                    autoComplete="off"
                    value={text}
                    onChange={handleInputChange}
                />

                <button
                    type="submit"
                    className="btn btn-primary btn-block"
                    onClick={() => {
                        const word = [{ palabra: text }]
                        const newList = [...list, ...word]
                        setList(newList)
                    }}
                >
                    Send Text
                </button>
            </form>
            <ul>
            <h3 class="auth__title">Result</h3>
                {list.length !== 0 ? (
                    <>
                        {list.map((el, i) => (
                            <li key={`lista${i}`}>
                                {el.palabra}
                            </li>
                        ))}
                    </>
                ) : ''}
            </ul>
        </>
    )
}
