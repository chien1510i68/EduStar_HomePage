import { Button, Col } from "antd";
import React from "react";
import ButtonScroll from "../Button/ButtonScroll";

function Course({ item }) {
  if (!item) return null;
  
  return (
    <>
      <Col
        span={20}
        className=" shadow-xl rounded-[10px] overflow-hidden mx-auto"
      >
        <h2 className="uppercase text-[5rem] font-[700] py-[2rem] bg-primaryColor text-[#fff] text-center">
          {item?.name || 'Chưa cập nhật'}
        </h2>
        <div className="px-[5%] py-[5%]  ">
          <div className="flex my-[10px] gap-[5px] items-baseline ">
            <h3>Trình độ đầu vào:</h3> <p>{item?.requestStudents || 'Chưa cập nhật'}</p>
          </div>
          <div className="flex my-[10px] gap-[5px] items-baseline ">
            <h3>Số buổi:</h3> <p>{item?.numberTeachingSessions || 'Chưa cập nhật'}</p>
          </div>
          <div className="flex my-[10px] gap-[5px] items-baseline ">
            <h3>Lịch học:</h3> <p>{item?.schedule || 'Chưa cập nhật'}</p>
          </div>
          <div className="flex my-[10px] gap-[5px] items-baseline ">
            <h3>Hình thức học:</h3> <p>{item?.learningForm || 'Chưa cập nhật'}</p>
          </div>
          <div className="flex my-[10px] gap-[5px] items-baseline ">
            <h3>Lộ trình đào tạo:</h3>
            <ul className="list-disc ml-[5%]">
              {item?.curriculum && item.curriculum.length > 0 ? item.curriculum.map((item, subIndex) => (
                <li key={subIndex}>{item}</li>
              )) : <li>Chưa cập nhật</li>}
            </ul>
          </div>
          <div className="flex my-[10px] gap-[5px] items-baseline ">
            {item?.description || 'Chưa cập nhật'}
          </div>
          <ButtonScroll />
        </div>
      </Col>
    </>
  );
}

export default Course;
