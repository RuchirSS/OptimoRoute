/*!
  _   _  ___  ____  ___ ________  _   _   _   _ ___   
 | | | |/ _ \|  _ \|_ _|__  / _ \| \ | | | | | |_ _| 
 | |_| | | | | |_) || |  / / | | |  \| | | | | || | 
 |  _  | |_| |  _ < | | / /| |_| | |\  | | |_| || |
 |_| |_|\___/|_| \_\___/____\___/|_| \_|  \___/|___|
                                                                                                                                                                                                                                                                                                                                       
=========================================================
* Horizon UI - v1.1.0
=========================================================

* Product Page: https://www.horizon-ui.com/
* Copyright 2023 Horizon UI (https://www.horizon-ui.com/)

* Designed and Coded by Simmmple

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/

// Chakra imports
import {
  Avatar,
  Box,
  Flex,
  FormLabel,
  Icon,
  Select,
  SimpleGrid,
  useColorModeValue,
} from "@chakra-ui/react";
// Assets
import Usa from "assets/img/dashboards/usa.png";
// Custom components
import MiniCalendar from "components/calendar/MiniCalendar";
import MiniStatistics from "components/card/MiniStatistics";
import IconBox from "components/icons/IconBox";
import React from "react";
import Map from "components/maps/IntMap";


import {
  MdAddTask,
  MdAttachMoney,
  MdBarChart,
  MdFileCopy,
  MdLocationPin,
  MdMoney,
  MdMoreTime,
  MdOutlineCurrencyPound,
  MdOutlineLockClock,
  MdOutlineMoney,
  MdOutlineSyncLock,
  MdOutlineWatch,
} from "react-icons/md";
import CheckTable from "views/admin/default/components/CheckTable";
import ComplexTable from "views/admin/default/components/ComplexTable";
import DailyTraffic from "views/admin/default/components/DailyTraffic";
import PieCard from "views/admin/default/components/PieCard";
import Tasks from "views/admin/default/components/Tasks";
import TotalSpent from "views/admin/default/components/TotalSpent";
import WeeklyRevenue from "views/admin/default/components/WeeklyRevenue";
import {
  columnsDataCheck,
  columnsDataComplex,
} from "views/admin/default/variables/columnsData";
import tableDataCheck from "views/admin/default/variables/tableDataCheck.json";
import tableDataComplex from "views/admin/default/variables/tableDataComplex.json";
import axios from 'axios';
import { useEffect, useState } from "react";
export default function UserReports() {
  const [cost, setCost] = useState();
  const [duration, setDuration] = useState();
  const [emission, setEmission] = useState();
  useEffect(() => {
    const fetchData = async () => {
      try{
        const response1 = await axios.get("http://127.0.0.1:8000/api/cost");
        const response2 = await axios.get("http://127.0.0.1:8000/api/duration");
        const response3 = await axios.get("http://127.0.0.1:8000/api/emission");
        setCost(response1.data.cost);
        setDuration(response2.data.duration);
        setEmission(response3.data.emission);
      } catch (e) {
        console.log(e);
      }
    };
    fetchData();
  }, []);
  // Chakra Color Mode
  const brandColor = useColorModeValue("brand.500", "white");
  const boxBg = useColorModeValue("secondaryGray.300", "whiteAlpha.100");
  return (
    <Box pt={{ base: "130px", md: "80px", xl: "80px" }}>
      <SimpleGrid
        columns={{ base: 1, md: 2, lg: 3, "2xl": 6 }}
        gap='20px'
        mb='20px'>
        <MiniStatistics
          startContent={
            <IconBox
              w='56px'
              h='56px'
              bg={boxBg}
              icon={
                <Icon w='32px' h='32px' as={MdOutlineCurrencyPound} color={brandColor} />
              }
            />
          }
          name='Total Cost'
          value='Rs. 1700'
        /> 
        <MiniStatistics
          startContent={
            <IconBox
              w='56px'
              h='56px'
              bg={boxBg}
              icon={
                <Icon w='32px' h='32px' as={MdMoreTime} color={brandColor} />
              }
            />
          }
          name='Time Duration'
          value='30 hours'
        />
        <MiniStatistics growth='Increased' name='CO2 Emissions' value={emission} />
        {/* <MiniStatistics
          endContent={
            <Flex me='-16px' mt='10px'>
              <FormLabel htmlFor='balance'>
                <Avatar src={Usa} />
              </FormLabel>
              <Select
                id='balance'
                variant='mini'
                mt='5px'
                me='0px'
                defaultValue='usd'>
                <option value='usd'>USD</option>
                <option value='eur'>EUR</option>
                <option value='gba'>GBA</option>
              </Select>
            </Flex>
          }
          name='Your balance'
          value='$1,000'
        /> */}
        {/* <MiniStatistics
          startContent={
            <IconBox
              w='56px'
              h='56px'
              bg='linear-gradient(90deg, #4481EB 0%, #04BEFE 100%)'
              icon={<Icon w='28px' h='28px' as={MdAddTask} color='white' />}
            />
          }
          name='New Routes'
          value='154'
        />
        <MiniStatistics
          startContent={
            <IconBox
              w='56px'
              h='56px'
              bg={boxBg}
              icon={
                <Icon w='32px' h='32px' as={MdFileCopy} color={brandColor} />
              }
            />
          }
          name='Total Routes'
          value='235'
        /> */}
      </SimpleGrid>

      {/* <SimpleGrid>
          <Map />
      </SimpleGrid> */}

      <SimpleGrid columns={{ base: 2, md: 1, xl: 2 }} gap='20px' mb='20px'>
        <TotalSpent />
        <WeeklyRevenue />
      </SimpleGrid>

      <SimpleGrid columns={{ base: 1, md: 1, xl: 2 }} gap='20px' mb='20px'>
        <CheckTable columnsData={columnsDataCheck} tableData={tableDataCheck} />
        <SimpleGrid columns={{ base: 1, sm: 1}} gap='20px'>
          <PieCard />
          {/* <DailyTraffic /> */}
        </SimpleGrid>
       </SimpleGrid>

      {/* <SimpleGrid columns={{ base: 1, md: 1, xl: 2 }} gap='20px' mb='70px'>
        <ComplexTable //Routes
          columnsData={columnsDataComplex}
          tableData={tableDataComplex}/>

        <SimpleGrid columns={{ base: 1, sm: 1}} gap='10px'>
          <Tasks />   
          <MiniCalendar h='100%' minW='100%' selectRange={false} />
        </SimpleGrid>
      </SimpleGrid> */}
    </Box>
  );
}
