import React from 'react'
import { IScheduledCard } from '@/app/models/ChallengeData';
import { View, Text, Image, useColorScheme } from 'react-native'
import { StyledScheduleCard } from './styled';
import { StyledDesc, StyledTitle } from '@/styles/StyledHome';
import { days } from '@/utils/days';
import { CheckCircleIcon } from 'react-native-heroicons/solid';
import { ClockIcon } from 'react-native-heroicons/outline';

const ScheduleCard = (
    {bgColor, client, status, vendor, scheduledDate, title} : IScheduledCard
) => {

    const parseDateNumberAndDay = (date: string) => {
        const dateObj = new Date(date);
        const day = days[dateObj.getDay()];
        const month = dateObj.getMonth();
        const dateNumber = dateObj.getDate();
        const year = dateObj.getFullYear();
        return {
            day, 
            dateNumber
        }
    }
    const colorScheme = useColorScheme();

  return (
    <View
        style={{
            flex: 1,
            flexDirection: 'row',
            alignItems: 'flex-start',
            gap: 10,
            width: '100%',
        }}
    >
        {
            scheduledDate ? 
            <View
                style={{
                    gap: 2,
                    alignItems: 'center',
                    padding: 5,
                }}
            >
                    <StyledDesc
                        color={colorScheme === 'dark' ? 'white' : 'black'}
                        size='14px'
                    >
                        {
                            parseDateNumberAndDay(scheduledDate).day
                        }
                    </StyledDesc>
                    <StyledTitle
                        color={colorScheme === 'dark' ? 'white' : 'black'}
                        size='20px'
                    >
                        {
                            parseDateNumberAndDay(scheduledDate).dateNumber
                        }
                    </StyledTitle>
                    {
                        status === 'Completed' &&
                        <CheckCircleIcon
                            size={20}
                            fill={'green'}
                        />
                    }
                    {
                        status === 'Scheduled' &&
                        <ClockIcon
                            size={20}
                            stroke={'green'}
                        />
                    }
            </View>
            : <StyledTitle
                color={colorScheme === 'dark' ? 'white' : 'black'}
                size='16px'
            >
                TBD
            </StyledTitle>
        }
      <StyledScheduleCard
        bgColor={
            status === 'Scheduled' ? '#006A4B' : status === 'Completed' ? '#00B47D' : '#011638'
        }
      >
        <StyledTitle
            color='white'
            size='20px'
        >
          {title}
        </StyledTitle>
        {
            vendor && (
                <>
                <StyledDesc
                color='white'
                size='16px'
                >
                    {
                        vendor.firstName + ' ' + vendor.lastName
                    }
                </StyledDesc>
                <StyledDesc
                    color='white'
                >
                    {vendor.phoneNumber}
                </StyledDesc>
                <StyledDesc
                    color='white'
                    style={{
                        marginTop: '15px'
                    }}
                >
                    {vendor.streetAddress}
                </StyledDesc>
                </>
            )
        }
      </StyledScheduleCard>
    </View>
  )
}

export default ScheduleCard;