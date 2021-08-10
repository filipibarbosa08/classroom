import * as React from 'react';
import * as WebBrowser from 'expo-web-browser';
import * as Google from 'expo-auth-session/providers/google';
import { Button, View } from 'react-native';
import { styles } from './styles';

WebBrowser.maybeCompleteAuthSession();

export  function Login() {
  const [request, response, promptAsync] = Google.useAuthRequest({
    expoClientId: '373240435223-d7semk93j8lv073ni7kv4pt44cntt16o.apps.googleusercontent.com',
 
  });

  React.useEffect(() => {
    if (response?.type === 'success') {
      const { authentication } = response;
      }
  }, [response]);

  return (

    <View style={styles.container}> 

    <Button
      disabled={!request}
      title="Login"
      onPress={() => {
        promptAsync();
        }}
    />

</View>
  );
}