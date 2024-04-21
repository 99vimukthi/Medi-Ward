import React from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import { Avatar, Button, Card, Text } from 'react-native-paper';

const LeftContent = props => <Avatar.Icon {...props} icon="folder" />

const NewsScreen = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.cardsContainer}>
        <Card style={styles.card}>
          <Card.Title title="Mediward Sri Lanka" subtitle="Card Subtitle" left={LeftContent} />
          <Card.Content>
            <Text variant="titleLarge">Daily Avacado Consumption</Text>
            <Text variant="bodyMedium">Card content 1</Text>
          </Card.Content>
          <Card.Cover source={{ uri: 'https://www.health.com/thmb/KXQa1xm3IiFTlEtbnyUJmYy_AdI=/282x188/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/Health-GettyImages-1628733989-454aa67c40f74a82ac5f8a710a5e9c18.jpg' }} />
          <Card.Actions>
            <Button>Cancel</Button>
            <Button>Ok</Button>
          </Card.Actions>
        </Card>
        
        <Card style={styles.card}>
          <Card.Title title="Mediward Sri Lanka" subtitle="Card Subtitle" left={LeftContent} />
          <Card.Content>
            <Text variant="titleLarge">Weight Loss Surgery</Text>
            <Text variant="bodyMedium">Card content 2</Text>
          </Card.Content>
          <Card.Cover source={{ uri: 'https://www.health.com/thmb/rl1y2QP9yxmsOzgjYvWhtdXfFac=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/Health-GettyImages-1343458118-a82d51bef7444d3298bc41ad1bd97ae3.jpg' }} />
          <Card.Actions>
            <Button>Cancel</Button>
            <Button>Ok</Button>
          </Card.Actions>
        </Card>


        <Card style={styles.card}>
          <Card.Title title="Mediward Sri Lanka" subtitle="Card Subtitle" left={LeftContent} />
          <Card.Content>
            <Text variant="titleLarge">Nipha Virus Spreding</Text>
            <Text variant="bodyMedium">Card content 2</Text>
          </Card.Content>
          <Card.Cover source={{ uri: 'https://etimg.etb2bimg.com/photo/104084068.cms' }} />
          <Card.Actions>
            <Button>Cancel</Button>
            <Button>Ok</Button>
          </Card.Actions>
        </Card>

        <Card style={styles.card}>
          <Card.Title title="Mediward Sri Lanka" subtitle="Card Subtitle" left={LeftContent} />
          <Card.Content>
            <Text variant="titleLarge">Covid 19 booster</Text>
            <Text variant="bodyMedium">Covid 19 booster</Text>
          </Card.Content>
          <Card.Cover source={{ uri: 'https://ichef.bbci.co.uk/news/1024/cpsprodpb/7b50/live/cf6df6e0-ffc3-11ee-9041-db52872d9a2a.png.webp' }} />
          <Card.Actions>
            <Button>Cancel</Button>
            <Button>Ok</Button>
          </Card.Actions>
        </Card>

        <Card style={styles.card}>
          <Card.Title title="Mediward Sri Lanka" subtitle="Card Subtitle" left={LeftContent} />
          <Card.Content>
            <Text variant="titleLarge">Card title 2</Text>
            <Text variant="bodyMedium">Card content 2</Text>
          </Card.Content>
          <Card.Cover source={{ uri: 'https://media.cnn.com/api/v1/images/stellar/prod/processed-90a189d9-aaa4-429e-9ea9-d37647a51f42.jpeg?c=16x9&q=h_653,w_1160,c_fill/f_webp' }} />
          <Card.Actions>
            <Button>Cancel</Button>
            <Button>Ok</Button>
          </Card.Actions>
        </Card>
        <Card style={styles.card}>
          <Card.Title title="Mediward Sri Lanka" subtitle="Card Subtitle" left={LeftContent} />
          <Card.Content>
            <Text variant="titleLarge">Card title 2</Text>
            <Text variant="bodyMedium">Card content 2</Text>
          </Card.Content>
          <Card.Cover source={{ uri: 'https://picsum.photos/700' }} />
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
    width: '48%', // Adjust this value to change the width of each card
    marginBottom: 20,
  },
});

export default NewsScreen;
