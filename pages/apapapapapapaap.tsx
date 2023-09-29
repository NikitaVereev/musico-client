import {FC, useState} from 'react';
import axios from "axios";

const ApapapapapapapapaPage: FC = () => {
    const [boardId, setBoardId] = useState(519997);
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [supportReq, setSupportReq] = useState(null);
    const [isEmail, setIsEmail] = useState('');

    const createCard = (e: any) => {
        e.preventDefault()
        const cardData = {
            board_id: boardId,
            title: title,
            description: description,
            service_id: 2889,
        };

        const options = {
            method: 'POST',
            url: 'https://nzxd.kaiten.ru/api/latest/cards',
            headers: {
                Authorization: 'Bearer 5cbf6e82-02ac-4a8d-9fb1-8b8842703289',
            },
            data: cardData,
        };

        axios
            .request(options)
            .then(function (response) {
                console.log(response.data);
                const supportReqData = response.data;
                setSupportReq(supportReqData);
            })
            .catch(function (error) {
                console.error(error);
            });
    };

    const sendEmail = (e: any) => {
        e.preventDefault()
        const emailData = {
            userName: "name",
            emails: [
                {
                    value: 'nikitkavershinin2019@gmail.com',
                    type: "work",
                    primary: true
                }
            ]
        };

        const options = {
            method: 'POST',
            url: 'https://nzxd.kaiten.ru/scim/v2/Users',
            headers: {
                Authorization: 'Bearer 5cbf6e82-02ac-4a8d-9fb1-8b8842703289', // Замените на ваш ключ доступа
            },
            data: emailData,
        };

        axios
            .request(options)
            .then(function (response) {
                console.log(response.data);
                const supportReqData = response.data;
                setSupportReq(supportReqData);
            })
            .catch(function (error) {
                console.error(error);
            });
    };
    return (
        <div>
            <form onSubmit={createCard}>
                <div>
                    <label htmlFor="boardId">ID доски:</label>
                    <input
                        type="number"
                        id="boardId"
                        value={boardId}
                        //@ts-ignore
                        onChange={(e) => setBoardId(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="title">Заголовок:</label>
                    <input
                        type="text"
                        id="title"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="description">Описание:</label>
                    <textarea
                        id="description"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <button type="submit">Создать карточку</button>
                </div>
            </form>
            <h1>Отправка email</h1>
            <form onSubmit={sendEmail}>
                <div>
                    <label htmlFor="isEmail">Email:</label>
                    <input
                        type="email"
                        id="isEmail"
                        value={isEmail}
                        onChange={(e) => setIsEmail(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <button type="submit">Отправить email</button>
                </div>
            </form>
        </div>
    );
}

export default ApapapapapapapapaPage;