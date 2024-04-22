import React from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import { Avatar, Button, Card, Text } from 'react-native-paper';

const LeftContent = props => <Avatar.Icon {...props} icon={require('../assets/images/medi.png')} size={50} />

const NewsScreen = () => {
  return (
    <ScrollView contentContainerStyle={styles.container} >
      <View style={styles.cardsContainer}>
        <Card style={styles.card}>
          <Card.Title title="Mediward Sri Lanka" left={LeftContent} />
          <Card.Content>
            <Text variant="titleLarge">Daily Avacado Consumption</Text>
            <Text variant="bodyMedium">Study Finds Daily Avocado Consumption Is Linked to Better Diet—Here's Why. Nick Blackmer is a librarian, fact-checker, and researcher with more than 20 years of experience in consumer-facing health and wellness content. Researchers found that eating one whole avocado each day is associated with better diet quality.</Text>
          </Card.Content>
          <Card.Cover source={{ uri: 'https://www.health.com/thmb/KXQa1xm3IiFTlEtbnyUJmYy_AdI=/282x188/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/Health-GettyImages-1628733989-454aa67c40f74a82ac5f8a710a5e9c18.jpg' }} />
          <Card.Actions>
            <Button>Cancel</Button>
            <Button>Ok</Button>
          </Card.Actions>
        </Card>
        
        <Card style={styles.card} >
          <Card.Title title="Mediward Sri Lanka"  left={LeftContent} />
          <Card.Content>
            <Text variant="titleLarge">Weight Loss Surgery</Text>
            <Text variant="bodyMedium">Weight loss surgery, sometimes called bariatric surgery, is a treatment for people who are severely obese. It makes the stomach smaller so it feels fuller sooner and less food is eaten.</Text>
          </Card.Content>
          <Card.Cover source={{ uri: 'https://www.health.com/thmb/rl1y2QP9yxmsOzgjYvWhtdXfFac=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/Health-GettyImages-1343458118-a82d51bef7444d3298bc41ad1bd97ae3.jpg' }} />
          <Card.Actions>
            <Button>Cancel</Button>
            <Button>Ok</Button>
          </Card.Actions>
        </Card>


        <Card style={styles.card}>
          <Card.Title title="Mediward Sri Lanka" left={LeftContent} />
          <Card.Content>
            <Text variant="titleLarge">Nipha Virus Spreding</Text>
            <Text variant="bodyMedium">Nipah virus (NiV) is a zoonotic virus, transmitted predominantly from fruit bats and through food which has been contaminated by body fluids or secretions of infected animals, including directly from human to human via prolonged close contact.</Text>
          </Card.Content>
          <Card.Cover source={{ uri: 'https://etimg.etb2bimg.com/photo/104084068.cms' }} />
          <Card.Actions>
            <Button>Cancel</Button>
            <Button>Ok</Button>
          </Card.Actions>
        </Card>

        <Card style={styles.card}>
          <Card.Title title="Mediward Sri Lanka"  left={LeftContent} />
          <Card.Content>
            <Text variant="titleLarge">Covid 19 booster</Text>
            <Text variant="bodyMedium">COVID-19 additional doses provide an extra layer of protection to your previous vaccination and keep your immunity levels high. Additional doses use the Pfizer XBB 1.5 vaccine. </Text>
          </Card.Content>
          <Card.Cover source={{ uri: 'https://ichef.bbci.co.uk/news/1024/cpsprodpb/7b50/live/cf6df6e0-ffc3-11ee-9041-db52872d9a2a.png.webp' }} />
          <Card.Actions>
            <Button>Cancel</Button>
            <Button>Ok</Button>
          </Card.Actions>
        </Card>

        <Card style={styles.card}>
          <Card.Title title="Mediward Sri Lanka" left={LeftContent} />
          <Card.Content>
            <Text variant="titleLarge">Take Daily Aspirin</Text>
            <Text variant="bodyMedium">According to a University of Michigan poll on healthy aging, many older adults between the ages of 50 and 80 years take aspirin more than three times per week. While some adults might be told by their providers to do a low-dose daily aspirin regimen to help reduce their cardiovascular disease risk, that’s not a blanket recommendation for everyone. In fact, research shows that taking daily aspirin can come with some serious risks.</Text>
          </Card.Content>
          <Card.Cover source={{ uri: 'https://www.verywellhealth.com/thmb/gwSxQbUXRLC3P92zgkbEWJiQUMk=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/VWH-GettyImages-1309889567-35c87e1cb5c44a9782eeaed6e7637da9.jpg' }} />
          <Card.Actions>
            <Button>Cancel</Button>
            <Button>Ok</Button>
          </Card.Actions>
        </Card>
        <Card style={styles.card}>
          <Card.Title title="Mediward Sri Lanka"  left={LeftContent} />
          <Card.Content>
            <Text variant="titleLarge">Cocunut Water</Text>
            <Text variant="bodyMedium">“Coconut water is by no means a standalone strategy for ulcerative colitis, but it may complement standard interventions for mild to moderate UC and comes with few risks,”</Text>
          </Card.Content>
          <Card.Cover source={{ uri: 'https://www.verywellhealth.com/thmb/KpeznsfEib5fzppQturBLg7bMJE=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/VWH-coconut-water-ulcerative-colitis-8629742-905cb6f40c594b0d9600d9a59a96775e.jpg' }} />
          <Card.Actions>
            <Button>Cancel</Button>
            <Button>Ok</Button>
          </Card.Actions>
        </Card>
        
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#fff',
    paddingVertical: 20,
    paddingHorizontal: 10,
  },
  cardsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
  },
  card: {
    width: '100%', // Adjust this value to change the width of each card
    marginBottom: 20,
  },
});

export default NewsScreen;
