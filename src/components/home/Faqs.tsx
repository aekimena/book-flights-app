import { StyleSheet, Text, View } from 'react-native';
import React, { useState } from 'react';
import { Vspacer } from '../common/Vspacer';
import { LabelText } from '../common/LabelText';
import { FaqItem } from './FaqItem';

const faqData = [
  {
    id: '1',
    question: 'How can I find last-minute flight deals?',
    answer:
      'Finding last-minute flights is easy on Google Flights. Select your departure and destination cities in the form on the top of the page, and use the calendar to pick travel dates and find the lowest fares available. You can even check for flights departing today. To find the cheapest fares, it’s usually best to book at least a few weeks in advance for domestic flights and a few months in advance for international travel.',
  },
  {
    id: '2',
    question: 'How can I find cheap flights for a weekend getaway?',
    answer:
      'It’s easy to use Google Flights to find deals on weekend getaways or even weeklong trips. Just enter your departure and destination cities near the top of the page. Then, open the date selector and choose a trip length to see how the round-trip fare changes on different days. Adjust the trip type to see one-way fares. The cheapest available flights are highlighted and easy to spot. Once you settle on dates, select Search to see flight options and book the deal. \nYou can also turn on price tracking to get alerts if the price changes for a route or flight.',
  },
  {
    id: '3',
    question: 'How can I get flight alerts for my trip?',
    answer:
      'You can track flight prices for specific dates or, if your plans are flexible, any dates. To get flight alerts for a specific round trip, choose your dates and flights and select Search. Then, you can turn on price tracking.',
  },
];

export const Faqs = () => {
  const [faqs, setFaqs] = useState(
    faqData.map(i => ({ ...i, isExpanded: false })),
  );

  const onPressItem = item => {
    setFaqs(prevFaqs =>
      prevFaqs.map(i => ({
        ...i,
        isExpanded: i.id === item.id ? !i.isExpanded : i.isExpanded,
      })),
    );
  };
  return (
    <View style={{ paddingHorizontal: 20 }}>
      <Vspacer />

      <LabelText text="Frequently asked questions" style={{ fontSize: 18 }} />
      <Vspacer />

      <View style={{ gap: 10 }}>
        {faqs.map((item, index) => (
          <FaqItem key={index} item={item} onPress={() => onPressItem(item)} />
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({});
