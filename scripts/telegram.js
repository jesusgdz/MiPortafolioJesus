document.getElementById('telegramLink').addEventListener('click', async function(event) {
    event.preventDefault();

    try {
        // Llama a tu API para obtener el chatId de Telegram
        const response = await fetch('http://localhost:3000/numero-telegram'); 

        // Verifica si la respuesta fue exitosa
        if (!response.ok) {
            throw new Error('Error al obtener el número de Telegram');
        }

        const data = await response.json();
        console.log('Data de Telegram:', data); // Verifica toda la respuesta

        // Asegúrate de que el chatId sea un número
        const chatId = Number(data.chatId); 
        const message = 'Hola, este es un mensaje desde mi página web'; // Mensaje que enviarás

        // Verifica los valores obtenidos
        console.log('Chat ID:', chatId); // Verifica que este valor sea correcto
        console.log('Message:', message); // Verifica que el mensaje sea correcto

        // Hacer una solicitud POST a tu backend para enviar el mensaje a Telegram
        const sendResponse = await fetch('http://localhost:3000/send-message', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ chatId, message }) // Asegúrate de que estos valores son válidos
        });

        // Verifica si la respuesta fue exitosa
        if (!sendResponse.ok) {
            const errorResponse = await sendResponse.json(); // Obtener detalles del error
            console.error('Error Response:', errorResponse); // Imprimir la respuesta de error
            throw new Error(`Error al enviar el mensaje a Telegram: ${errorResponse.error}`);
        }

        alert('Mensaje enviado con éxito');
    } catch (error) {
        console.error('Error:', error);
        alert('Ocurrió un error: ' + error.message);
    }
});
