// Dùng chung b2 aptis
function Detail({ service }) {
  if (!service) return null;
  
  return (
    <div>
      <div className="flex my-[10px] gap-[5px] items-baseline ">
        <h3>Trình độ đầu vào:</h3> <p>{service.requestStudents || 'Chưa cập nhật'}</p>
      </div>
      <div className="flex my-[10px] gap-[5px] items-baseline ">
        <h3>Số buổi:</h3> <p>{service.numberTeachingSessions || 'Chưa cập nhật'}</p>
      </div>
      <div className="flex my-[10px] gap-[5px] items-baseline">
        <h3>Lịch học:</h3> <p>{service.schedule || 'Chưa cập nhật'}</p>
      </div>
      <div className="flex my-[10px] gap-[5px] items-baseline ">
        <h3>Hình thức học:</h3> <p>{service.learningForm || 'Chưa cập nhật'}</p>
      </div>
      <div className="flex my-[10px] gap-[5px] items-baseline">
        <h3>Lộ trình đào tạo:</h3>
        <ul className="list-disc ml-[5%]">
          {service.curriculum && service.curriculum.length > 0 ? service.curriculum.map((item, subIndex) => (
            <li key={subIndex}>{item}</li>
          )) : <li>Chưa cập nhật</li>}
        </ul>
      </div>
      <div className="flex my-[10px] gap-[5px] items-baseline">
        <h3>Mục tiêu đạt được:</h3> <p>{service.studyGoals || 'Chưa cập nhật'}</p>
      </div>
      <div className="flex my-[10px] gap-[5px] items-baseline">
        <h3>Chi phí học:</h3> <p>{service.price || 'Chưa cập nhật'}</p>
      </div>
    </div>
  );
}

export default Detail;
