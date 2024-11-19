document.getElementById('whatsappLink').addEventListener('click', async function(event) {
    event.preventDefault(); // Evita el comportamiento por defecto del enlace
    
    try {
        // Llama a tu API para obtener el número de teléfono
        const response = await fetch('http://localhost:3001/numero');
        const data = await response.json();
        
        // Extrae el número de teléfono desde la respuesta
        const numeroTelefono = data.numero; // Ajusta según el formato de la API
        
        // Formato de la URL para abrir WhatsApp
        const urlWhatsApp = `https://wa.me/${numeroTelefono}?text=Hola!%20Quiero%20más%20informació`;
        
        // Redirige al usuario a WhatsApp
        window.open(urlWhatsApp, '_blank');
    } catch (error) {
        console.error('Error al obtener el número de teléfono', error);
    }
});

