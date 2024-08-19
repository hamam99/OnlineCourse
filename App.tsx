/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react'
import type { PropsWithChildren } from 'react'
import { StyleSheet, Text, useColorScheme, View } from 'react-native'
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context'
import RootNavigation from './src/navigation/RootNavigation'
import { NavigationContainer } from '@react-navigation/native'
import Toast from 'react-native-toast-message'
import { Auth0Provider } from 'react-native-auth0'

function App(): React.JSX.Element {
  return (
    <SafeAreaProvider>
      <SafeAreaView
        style={{
          flex: 1,
        }}
        edges={['top', 'left', 'right', 'bottom']}
      >
        <Toast />

        <Auth0Provider
          domain={process.env.AUTH0_DOMAIN!}
          clientId={process.env.AUTH0_CLIENT_ID!}
        >
          <NavigationContainer>
            <RootNavigation />
          </NavigationContainer>
        </Auth0Provider>
      </SafeAreaView>
    </SafeAreaProvider>
  )
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
})

export default App
