import React from "react";

const SubForm = () => {
    return (
        <div style={{ padding: '20px', textAlign: 'center' }}>
            <h2>Записаться на прием</h2>
            <form>
                <div style={{ marginBottom: '15px' }}>
                    <label htmlFor="name">Имя:</label>
                    <input type="text" id="name" name="name" required style={{ marginLeft: '10px' }}/>
                </div>
                <div style={{ marginBottom: '15px' }}>
                    <label htmlFor="email">Эл. почта:</label>
                    <input type="email" id="email" name="email" required style={{ marginLeft: '10px' }}/>
                </div>
                <div style={{ marginBottom: '15px' }}>
                    <label htmlFor="phone">Телефон:</label>
                    <input type="tel" id="phone" name="phone" required style={{ marginLeft: '10px' }}/>
                </div>
                <button type="submit" style={{ padding: '10px 20px' }}>Отправить</button>
            </form>
        </div>
    );
}

export default SubForm