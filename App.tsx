/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react'
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context'
import RootNavigation from './src/navigation/RootNavigation'
import { NavigationContainer } from '@react-navigation/native'
import Toast from 'react-native-toast-message'
import { Auth0Provider } from 'react-native-auth0'

function App(): React.JSX.Element {
  return (
    <SafeAreaProvider>
      <Auth0Provider
        domain={process.env.AUTH0_DOMAIN!}
        clientId={process.env.AUTH0_CLIENT_ID!}
      >
        <SafeAreaView
          style={{
            flex: 1,
          }}
          edges={['top', 'left', 'right', 'bottom']}
        >
          <Toast />
          <NavigationContainer>
            <RootNavigation />
          </NavigationContainer>
        </SafeAreaView>
      </Auth0Provider>
    </SafeAreaProvider>
  )
}

export default App
