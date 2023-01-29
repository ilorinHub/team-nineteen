import { View, Text, Pressable } from "react-native";
import React, { useState } from "react";
import { Textt } from "../components/atoms/Typography";
import styled from "styled-components/native";
import { Wrapper } from "./Wallet";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";
import BookingsWrapper from "../components/molecules/BookingsWrapper";

const BookingHeader = styled.View`
  flex-direction: row;
  margin-top: ${hp(3)}px;
`;
const HeaderText = styled.View<{ focused?: boolean }>`
  border-bottom-width: ${({ focused }) => (focused ? "2px" : "1px")};
  border-bottom-color: ${(props) =>
    props.focused ? props.theme.color.phalanxYellow : "grey"};
  padding-horizontal: ${wp(5.5)}px;
  padding-bottom: ${hp(1)}px;
  margin-bottom: ${hp(4)}px;
`;
const Active = styled.View``;
const Empty = styled.View`
  margin-top: ${hp(20)}px;
  justify-content: center;
  align-items: center;
`;

const bookingArr = ["Active Now", "Completed", "Cancelled"];
const Bookings = () => {
  const actives: any = [
    {
      name: "Daniel Austin",
      status: "Active",
      plate: "APP 38GZ",
      time: "4 mins",
      amount: "#700",
      distance: "4.5 km",
      date: "Dec 20, 2024 | 10:00 AM",
      location: "Kwara state banquet hall",
      car: "Mercedes-Benz Gle 63",
    },
    {
      name: "Wade Warren",
      status: "Active",
      plate: "ILR 345GZ",
      time: "14 mins",
      amount: "#1700",
      distance: "9 km",
      date: "Apr 15, 2023 | 12:00 AM",
      location: "Osapa Mandate",
      car: "Mercedes-Benz Gle 63",
    },
  ];
  const complete: any = [
    {
      name: "Guy Hawkins",
      status: "Completed",
      plate: "APP 38GZ",
      time: "9 mins",
      amount: "#1200",
      distance: "5 km",
      date: "Jun 20, 2024 | 10:00 AM",
      location: "Kwara state banquet hall",
      car: "Mercedes-Benz Gle 63",
    },
    {
      name: "Jane Cooper",
      status: "Completed",
      plate: "ILR 345GZ",
      time: "10 mins",
      amount: "#1500",
      distance: "7.3 km",
      date: "Aug 15, 2023 | 12:00 AM",
      location: "Osapa Mandate",
      car: "Toyota Camry",
    },
  ];
  const [cat, setCat] = useState("Active Now");
  const [active, setActive] = useState(actives);
  const [completed, setCompleted] = useState(complete);
  return (
    <Wrapper>
      <Textt size="26px" weight={600}>
        Bookings
      </Textt>
      <BookingHeader>
        {bookingArr.map((item, itemIndex) => (
          <Pressable onPress={() => setCat(item)} key={itemIndex}>
            <HeaderText focused={item === cat}>
              <Textt>{item}</Textt>
            </HeaderText>
          </Pressable>
        ))}
      </BookingHeader>
      {cat === "Active Now" && (
        <Active>
          {!active.length ? (
            <Empty>
              <Textt size="18px" mb={`${hp(2)}px`} weight={600}>
                You have no active taxi booking
              </Textt>
              <Textt>You don't have an active taxi booking at the time</Textt>
            </Empty>
          ) : (
            active.map((item: any) => <BookingsWrapper item={item} />)
          )}
        </Active>
      )}
      {cat === "Completed" && (
        <Active>
          {!completed.length ? (
            <Empty>
              <Textt size="18px" mb={`${hp(2)}px`} weight={600}>
                You have no completed taxi booking
              </Textt>
              <Textt>You don't have a completed taxi booking at the time</Textt>
            </Empty>
          ) : (
            completed.map((item: any) => <BookingsWrapper item={item} />)
          )}
        </Active>
      )}
      {cat === "Cancelled" && (
        <Empty>
          <Textt size="18px" mb={`${hp(2)}px`} weight={600}>
            You have no cancelled taxi booking
          </Textt>
          <Textt>You don't have a cancelled taxi booking at the time</Textt>
        </Empty>
      )}
    </Wrapper>
  );
};

export default Bookings;
