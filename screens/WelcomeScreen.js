import * as React from 'react';
import { Avatar, Button, Card, Text } from 'react-native-paper';

const LeftContent = props => <Avatar.Icon {...props} icon="folder" />

const WelcomeScreen = () => (
  <Card style={styles.card}>
    <Card.Title 
      title="Welcome to MediWard" 
      subtitle="About Us" 
      left={LeftContent} 
      titleStyle={styles.title}
      subtitleStyle={styles.subtitle}
    />
    <Card.Cover source={require('../assets/images/nurse.png')} style={styles.cover} />
    <Card.Content style={styles.content}>
      <Text style={[styles.paragraph, styles.justify]}>
        Welcome to MediWard, your trusted healthcare companion. At MediWard, we specialize in efficient ward management and scheduling services to ensure smooth operations and optimal patient care. Our advanced scheduling system allows healthcare providers to efficiently manage patient appointments, allocate resources, and streamline workflow processes. With MediWard, healthcare facilities can maximize their productivity and focus on delivering high-quality patient care. Join us in revolutionizing healthcare management and scheduling with MediWard.
      </Text>
    </Card.Content>
  </Card>
);

const styles = {
  card: {
    margin: 10,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  subtitle: {
    fontSize: 16,
    color: 'gray',
  },
  cover: {
    height: 200,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  content: {
    padding: 20,
  },
  paragraph: {
    fontSize: 16,
    lineHeight: 24,
  },
  justify: {
    textAlign: 'justify',
  },
};

export default WelcomeScreen;
