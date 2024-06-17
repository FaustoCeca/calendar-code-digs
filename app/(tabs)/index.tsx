import React, { useEffect, useState } from 'react';
import { View, useColorScheme } from 'react-native';
import { StyledList, StyledTitle, StyledView } from '@/styles/StyledHome';
import ScheduleCard from '@/components/ScheduleCard';
import { CalendarType, ChallengeData } from '../models/ChallengeData';
import { months } from '../../utils/months';
import { getData } from '@/utils/getData';

export default function Calendar() {
  const [response, setResponse] = useState<ChallengeData | null>(null);
  const [tasks, setTasks] = useState<CalendarType[] | []>([]);
  const colorScheme = useColorScheme();

  useEffect(() => {
    getData()
      .then((data) => {
        setResponse(data);
        setTasks(data.calendar);
      })
      .catch((error) => {
        console.log(error);
      });

  }, []);

  const dataToRender = tasks.map((task) => {
    const month = months.find((month) => month.value === task.month);
    return {
      title: (month ? month.name : 'Unknown month') + ' ' + task.year,
      data: task.actions.sort((a, b) => {
        if (a.scheduledDate && b.scheduledDate) {
          return a.scheduledDate.localeCompare(b.scheduledDate);
        }
        return 0;
      }),
    };
  });

  return (
    <StyledView
      bgColor={colorScheme === 'dark' ? 'black' : 'white'}
    >
      <View
        style={{
          padding: 30,
          marginTop: 20,
          borderBottomWidth: 1,
          alignItems: 'center',
          width: '100%',
          borderBottomColor: colorScheme === 'dark' ? 'white' : 'black',
          borderStyle: 'solid',
        }}
      >
        <StyledTitle 
          color={colorScheme === 'dark' ? 'white' : 'black'}
          size="24px"
        >
          Calendar
        </StyledTitle>
      </View>
      {
        tasks && 
        <StyledList 
          sections={dataToRender}
          renderItem={({ item }) => (
            <ScheduleCard
              title={item.name}
              bgColor={'#f0f0f0'}
              scheduledDate={item.scheduledDate}
              client={item.vendor?.firstName}
              status={item.status}
              vendor={item.vendor}
            />
          )}
          renderSectionHeader={({ section }) => (
            <StyledTitle
              color={colorScheme === 'dark' ? 'white' : 'black'}
              size="20px"
            >{section.title}</StyledTitle>
          )}
          keyExtractor={(item, index) => index.toString()}
        />
      }
    </StyledView>
  );
}