// /**
//  * Sample React Native App
//  * https://github.com/facebook/react-native
//  *
//  * @format
//  */

// import React from 'react';
// // import type {PropsWithChildren} from 'react';
// import styles from './styles/mainStyle';
// import { Text, View } from 'react-native/types';

// const App = () => {
//   return(
//       <View style={styles.container}>
//         <Text style={[styles.bigBlue,styles.fontBold]}>MD18101</Text>
//         <Text style={[styles.red,styles.fontSemibold]}>Kieu Viet Thang</Text>
//         <Text style={[styles.bigBlue,styles.red]}>Chay ung dung thanh cong</Text>
//       </View>
//   );
// };

// // import {
// //   SafeAreaView,
// //   ScrollView,
// //   StatusBar,
// //   StyleSheet,
// //   Text,
// //   useColorScheme,
// //   View,
// // } from 'react-native';

// // import {
// //   Colors,
// //   DebugInstructions,
// //   Header,
// //   LearnMoreLinks,
// //   ReloadInstructions,
// // } from 'react-native/Libraries/NewAppScreen';

// // type SectionProps = PropsWithChildren<{
// //   title: string;
// // }>;

// // function Section({children, title}: SectionProps): JSX.Element {
// //   const isDarkMode = useColorScheme() === 'dark';
// //   return (
// //     <View style={styles.sectionContainer}>
// //       <Text
// //         style={[
// //           styles.sectionTitle,
// //           {
// //             color: isDarkMode ? Colors.white : Colors.black,
// //           },
// //         ]}>
// //         {title}
// //       </Text>
// //       <Text
// //         style={[
// //           styles.sectionDescription,
// //           {
// //             color: isDarkMode ? Colors.light : Colors.dark,
// //           },
// //         ]}>
// //         {children}
// //       </Text>
// //     </View>
// //   );
// // }

// // function App(): JSX.Element {
// //   const isDarkMode = useColorScheme() === 'dark';

// //   const backgroundStyle = {
// //     backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
// //   };

// //   return (
// //     <SafeAreaView style={backgroundStyle}>
// //       <StatusBar
// //         barStyle={isDarkMode ? 'light-content' : 'dark-content'}
// //         backgroundColor={backgroundStyle.backgroundColor}
// //       />
// //       <ScrollView
// //         contentInsetAdjustmentBehavior="automatic"
// //         style={backgroundStyle}>
// //         <Header />
// //         <View
// //           style={{
// //             backgroundColor: isDarkMode ? Colors.black : Colors.white,
// //           }}>
// //           <Section title="Step One">
// //             Edit <Text style={styles.highlight}>App.tsx</Text> to change this
// //             screen and then come back to see your edits.
// //           </Section>
// //           <Section title="See Your Changes">
// //             <ReloadInstructions />
// //           </Section>
// //           <Section title="Debug">
// //             <DebugInstructions />
// //           </Section>
// //           <Section title="Learn More">
// //             Read the docs to discover what to do next:
// //           </Section>
// //           <LearnMoreLinks />
// //         </View>
// //       </ScrollView>
// //     </SafeAreaView>
// //   );
// // }

// // const styles = StyleSheet.create({
// //   sectionContainer: {
// //     marginTop: 32,
// //     paddingHorizontal: 24,
// //   },
// //   sectionTitle: {
// //     fontSize: 24,
// //     fontWeight: '600',
// //   },
// //   sectionDescription: {
// //     marginTop: 8,
// //     fontSize: 18,
// //     fontWeight: '400',
// //   },
// //   highlight: {
// //     fontWeight: '700',
// //   },
// // });

// export default App;

import React, { useState } from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';
import Card from './components/card/Card';




const LotsOfStyles = () => {

  const [showCard, setShowCard] = useState(true);

  const changeShowCard = () => {
    setShowCard(!showCard);
  };

  let imageUrl = {
    uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg',
  };
 
  return (
    <View style={styles.container}>
      <Text style={styles.red}>Flutter</Text>
      <Text style={[styles.bigBlue,styles.fontBold]}>Kieu Viet Thang</Text>
      <Text style={[styles.bigBlue, styles.red,styles.fontSemibold]}>Chay ung dung thanh cong</Text>
      
      {showCard ? (
        <Card title="Demo props for card component" imgUrl={imageUrl}/>
      ) : null}
      <Button title="Hide/Show CardCompoent" onPress={changeShowCard}/>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
  fontBold: {
    fontWeight: 'bold'
  },
  fontSemibold: {
    fontWeight: '400'
  },
  bigBlue: {
    color: 'blue',
    fontWeight: 'bold',
    fontSize: 30,
  },
  red: {
    fontSize: 20,
    color: 'red',
  },
});

export default LotsOfStyles;
