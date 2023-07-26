import React, {useEffect} from 'react';
import {View, Text} from 'react-native';

const App = () => {
  useEffect(() => {
    // Endpoint del backend que deseas probar (por ejemplo, "/api/test")
    const endpoint = 'http://192.168.0.102:8080/api/test'; // Cambia la URL si es necesario

    // Realizar una solicitud GET al endpoint
    fetch(endpoint)
      .then(response => response.json())
      .then(data => {
        // Si recibes una respuesta exitosa, muestra la data en la consola
        console.log('Respuesta del backend:', data);
      })
      .catch(error => {
        // Si hay un error, muestra el mensaje de error en la consola
        console.error('Error al conectarse al backend:', error);
      });
  }, []);

  return (
    <View>
      <Text>Verificando conexión contra el Backend...</Text>
      <Text>Por favor, comprueba la consola</Text>
    </View>
  );
};

export default App;
