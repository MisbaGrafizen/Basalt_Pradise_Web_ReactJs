import { DatePicker } from "antd";
import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import dayjs from "dayjs";
import moment from "moment";

const { RangePicker } = DatePicker;

export default function DetailsAddBar() {
  const [guestDetails, setGuestDetails] = useState(false);
  const [roomnum, setRoomNum] = useState(0);
  const [adultnum, setAdultNum] = useState(0);
  const [childrennum, setChildrenNum] = useState(0);
  const [selectedDates, setSelectedDates] = useState([dayjs(), dayjs()]);
  const [startDate, setStartDate] = useState(dayjs());
  const [numOfDays, setNumOfDays] = useState(null);
  const [endDate, setEndDate] = useState(dayjs());
  const [numOfNights, setNumOfNights] = useState(1);

  const adulthandleChange = (e) => {
    setAdultNum(e.target.value);
  };

  const childrenincNum = () => {
    if (childrennum < 10) {
      setChildrenNum(Number(childrennum) + 1);
    }
  };

  const childrendecNum = () => {
    if (childrennum > 0) {
      setChildrenNum(childrennum - 1);
    }
  };

  const childrenhandleChange = (e) => {
    setChildrenNum(e.target.value);
  };

  const handleGuestDetails = () => {
    setGuestDetails((prevCheck) => !prevCheck);
  };

  const roomincNum = () => {
    if (roomnum < 8) {
      setRoomNum(Number(roomnum) + 1);
    }
  };

  const roomdecNum = () => {
    if (roomnum > 0) {
      setRoomNum(roomnum - 1);
    }
  };
  const adultincNum = () => {
    if (adultnum < 10) {
      setAdultNum(Number(adultnum) + 1);
    }
  };
  const roomhandleChange = (e) => {
    setRoomNum(e.target.value);
  };

  const adultdecNum = () => {
    if (adultnum > 0) {
      setAdultNum(adultnum - 1);
    }
  };

  const handleDateChange = (dates) => {
    if (dates && dates.length === 2) {
      setSelectedDates(dates);
      const nights = dates[1].diff(dates[0], "days");
      setNumOfNights(nights);
    } else {
      // Reset to default (1 night) if no date is selected
      setSelectedDates([
        dayjs().startOf("day"),
        dayjs().startOf("day").add(1, "day"),
      ]);
      setNumOfNights(1);
    }
  };
  const formatPlaceholder = (dates) => {};

  useEffect(() => {
    // Set default values for today and tomorrow
    const defaultStartDate = moment().startOf("day");
    const defaultEndDate = moment().startOf("day").add(1, "days");

    // Update state with default values
    setStartDate(defaultStartDate);
    setEndDate(defaultEndDate);

    // Calculate and set the default number of nights
    const diffTime = Math.abs(defaultEndDate - defaultStartDate);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    setNumOfDays(diffDays);
  }, []);
  const disabledDate = (current) => {
    return current && current.isBefore(dayjs(), "day");
  };

  return (
    <>
      <div className=" flex  relative z-[10] shadow-md   pb-[10px] rounded-[10px] pt-[10px] items-center x` 2xl:w-[1400px]  mt-[20px] w-[79%]  mb-[10px] px-[30px] mx-auto  border justify-center  flex-col ">
        <div className=" flex w-[100%]  ">
          <div className=" w-[100%] flex flex-col h-[px] ">
            <div className="col md:w-[66%] w-[81%] justify-between  mt-[11px] flex">
              <p className="w-50 text-[12px] lg:!text-[14px] opacity-50  font-lucida-bright-regular font-[600] px-1">
                Check In
              </p>
              <p className="w-50 text-[12px] lg:!text-[14px] opacity-50  font-lucida-bright-regular font-[600] px-1">
                Check Out
              </p>
            </div>
            <div className=" w-[100%]  ">
              <div className=" absolute top-[28px] start-[16%] font-lucida-bright-regular  translate-middle z-10 px-2 md:w-[80px] py-[3px] text-center  rounded-full text-[11px] lg:!text-[12px] font-semibold basalt  tx-white tx-5 ">
               
                <p>
                  {numOfNights} {numOfNights === 1 ? "Night" : "Nights"}
                </p>
              </div>

              <RangePicker
                format="MMM DD, YYYY"
                onChange={(dates) => {
                  handleDateChange(dates);
                }}
                label="Tarix"
                name={["date"]}
                showTime={false}
                separator={null}
                inputReadOnly
                defaultValue={[dayjs(), dayjs().add(1, "day")]}
                // defaultValue={[dayjs('2024/02/11', dateFormat), dayjs('2024/02/12', dateFormat)]}
                placeholder={formatPlaceholder(selectedDates)}
                suffixIcon={null}
                disabledDate={disabledDate}
                className="w-[100%] border-x-0 border-t-0 !border-b-[1px] border-gray-200  bg-transparent !rounded-none py-2"
              />
            </div>
          </div>
          <div className=" items-center flex flex-row  lg:!items-center py-[5px] px-2 w-[100%] justify-between border-b-[1px] border-gray-200 relative">
            <div
              className="w-100 lg:!w-[50%] pointer"
              onClick={handleGuestDetails}
            >
              <p className="text-[12px] lg:!text-[14px] opacity-50  font-lucida-bright-regular font-[600] px-1">
                Guests & Rooms
              </p>
              <p className="mt-3 font-Montserrat text-[#797575] font-[500]">
                {childrennum > 0
                  ? `${childrennum} Children | ${adultnum} Adults | ${roomnum} Room`
                  : `${adultnum} Adults | ${roomnum} Room`}{" "}
              </p>
            </div>
            {guestDetails && (
              <div className="w-100 absolute  top-[78px] start-0  flex flex-col bs-white p-3 rounded-xl shadow-3">
                <div
                  className=" top-0 start-0 z-10 "
                  onClick={() => setGuestDetails(false)}
                ></div>
                <div className="flex flex-wrap w-100 gap-2 justify-around md:!justify-between  items-end">
                  <div className="w-fit">
                    <p className="text-[10px] lg:!text-[13px] py-1 text-center font-semibold">
                      Rooms(Max 8)
                    </p>
                    <div className="flex items-center rounded-2xl shadow-1 w-fit mx-auto">
                      <div
                        className="px-3 py-1.5 rounded-l-2xl pointer"
                        onClick={roomdecNum}
                      >
                        <i className="fa-solid fa-minus tx-blue fs-6"></i>
                      </div>
                      <input
                        type="text"
                        className="font-semibold py-1 tx-blue text-center min-w-[25px] !max-w-[25px]"
                        value={roomnum}
                        onChange={roomhandleChange}
                      />
                      <div
                        className="px-3 py-1.5 rounded-r-2xl pointer"
                        onClick={roomincNum}
                      >
                        <i className="fa-solid fa-plus tx-blue fs-6"></i>
                      </div>
                    </div>
                  </div>
                  <div className="w-fit">
                    <p className="text-[10px] lg:!text-[13px] py-1 text-center font-semibold">
                      Adults(12+ yr)
                    </p>
                    <div className="flex items-center rounded-2xl shadow-1 w-fit mx-auto">
                      <div
                        className="px-3 py-1.5 rounded-l-2xl pointer"
                        onClick={adultdecNum}
                      >
                        <i className="fa-solid fa-minus tx-blue fs-6"></i>
                      </div>
                      <input
                        type="text"
                        className="font-semibold py-1 tx-blue text-center min-w-[25px] !max-w-[25px]"
                        value={adultnum}
                        onChange={adulthandleChange}
                      />
                      <div
                        className="px-3 py-1.5 rounded-r-2xl pointer"
                        onClick={adultincNum}
                      >
                        <i className="fa-solid fa-plus tx-blue fs-6"></i>
                      </div>
                    </div>
                  </div>
                  <div className="w-fit">
                    <p className="text-[10px] lg:!text-[13px] py-1 text-center font-semibold">
                      Children(0-12 yr)
                    </p>
                    <div className="flex items-center rounded-2xl shadow-1 w-fit mx-auto">
                      <div
                        className="px-3 py-1.5 rounded-l-2xl pointer"
                        onClick={childrendecNum}
                      >
                        <i className="fa-solid fa-minus tx-blue fs-6"></i>
                      </div>
                      <input
                        type="text"
                        className="font-semibold py-1 tx-blue text-center min-w-[25px] !max-w-[25px]"
                        value={childrennum}
                        onChange={childrenhandleChange}
                      />
                      <div
                        className="px-3 py-1.5 rounded-r-2xl pointer"
                        onClick={childrenincNum}
                      >
                        <i className="fa-solid fa-plus tx-blue fs-6"></i>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="divide-x-1"></div>
                <div
                  className="col cursor-pointer basalt px-4 py-1 rounded-md mt-4"
                  onClick={() => setGuestDetails(false)}
                >
                  <p className="tx-white text-center fs-6 font-semibold">
                    Done
                  </p>
                </div>
              </div>
            )}

            <div className="cursor-pointer translate-middle text-select-none left-0  basalt   w-fit lg:!w-[140px] text-center duration-400 rounded-full px-[10px]  active:!px-[10px] py-[6px]">
              <button
                className="tx-white  font-Roboto text-[20px] md:text-[18px] font-bold"
                type="submit"
              >
                Update
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
